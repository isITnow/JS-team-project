function e(e){return fetch(`https://api.themoviedb.org/3/trending/movie/day?&api_key=d70849b39c7b399ded2dffef6ee1baa4&page=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}function a(e,a){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US&page=${a}&include_adult=false&query=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}const t=document.querySelector(".gallery__list");function s(e,a,s){const n=e.reduce(((e,{id:a,poster_path:t,name:s,title:n,release_date:i,vote_average:l,genre_ids:r})=>{const o=[];return JSON.parse(localStorage.getItem("genresData")).forEach((e=>{r.includes(e.id)&&o.push(e.name)})),e+`<li class="gallery__item" id=${a} data-trending>\n          <div class="gallery__link">\n              <img class="gallery__image" src="https://image.tmdb.org/t/p/original${t}" alt="${n||s}" width="394" height ="335"/> \n        </div>\n        <div class="gallery__info">\n              <h2 class="gallery__title">${n||s}</h2>\n              <p class="gallery__genres">\n              <span class="gallery__genr"> ${o.length>3?o.splice(0,2).join(", ")+", Others":o.join(", ")||"No information"} ${r?"|":"no information"}</span> | \n                  <span class="gallery__release">${i?i.slice(0,4):"no data"}</span>\n                  <span class="gallery__rating">${l.toFixed(1)}\n              </span>\n              </p>\n          </div>\n        </li>`}),"");return t.innerHTML=n,{results:e,page:a,total_pages:s}}function n(e,a,s){const n=e.reduce(((e,{id:a,poster_path:t,name:s,title:n,release_date:i,vote_average:l,genre_ids:r})=>{const o=[];return JSON.parse(localStorage.getItem("genresData")).forEach((e=>{r.includes(e.id)&&o.push(e.name)})),e+`<li class="gallery__item" id=${a} data-query>\n          <div class="gallery__link">\n              <img class="gallery__image" src="https://image.tmdb.org/t/p/original${t}" alt="${n||s}" width="394" height ="335"/> \n        </div>\n        <div class="gallery__info">\n              <h2 class="gallery__title">${n||s}</h2>\n              <p class="gallery__genres">\n              <span class="gallery__genr"> ${o.length>3?o.splice(0,2).join(", ")+", Others":o.join(", ")||"No information"} </span> |\n                  <span class="gallery__release">${i?i.slice(0,4):"no data"}</span>\n                  <span class="gallery__rating">${l.toFixed(1)}\n              </span>\n              </p>\n          </div>\n        </li>`}),"");return t.innerHTML=n,{results:e,page:a,total_pages:s}}const i=document.querySelector(".pagination__list"),l=document.querySelector(".pagination__btn--left"),r=document.querySelector(".pagination__btn--rigth"),o=document.querySelector(".search__input"),g=document.querySelectorAll(".pagination__btn");let c="";function d(e,a,t){let s="",[n,o]=function(e){if(window.innerWidth>=320&&e<3)var a=1,t=5;else a=e-2,t=e+2;return[a,t]}(e),g=t-3;e>=5&&(s+='\n    <li class ="pagination__item" data-page="1">1</li>',s+='\n    <li class ="pagination__item">...</li>');for(let e=n;e<=o;e+=1)s+=`\n      <li class ="pagination__item" data-page="${e}" >\n        ${e}\n      </li>  \n      \n      `;e>=1&&(s+='\n    <li class ="pagination__item">...</li>',s+=`\n    <li class ="pagination__item" data-page="${t}">${t}</li>`),e>=g&&(s=`\n    <li class ="pagination__item" data-page="1">1</li>\n    <li class ="pagination__item">...</li>\n    <li class ="pagination__item" data-page="${t-4}">${t-4}</li>\n    <li class ="pagination__item" data-page="${t-3}">${t-3}</li>\n    <li class ="pagination__item" data-page="${t-2}">${t-2}</li>\n    <li class ="pagination__item" data-page="${t-1}">${t-1}</li>\n    <li class ="pagination__item" data-page="${t}">${t}</li>\n    `),e===t?(r.disabled=!0,r.classList.add("disabled")):(r.disabled=!1,r.classList.remove("disabled")),i.innerHTML=s,r.dataset.page=e+1,l.dataset.page=e-1,function(e,a){1===e?(l.disabled=!0,l.classList.add("disabled")):(l.disabled=!1,l.classList.remove("disabled"))}(e),_(e)}function p(t){let n=t.currentTarget.dataset.page;c=o.value,""===c?(e(n).then((({page:e,results:a,total_pages:t})=>(s(a,e,t),localStorage.setItem("popularFilms",JSON.stringify(a)),{page:e,results:a,total_pages:t}))).then((({page:e,results:a,total_pages:t})=>d(e,0,t))),_(n)):a(c,n).then((({page:e,results:a,total_pages:t})=>(s(a,e,t),localStorage.setItem("popularFilms",JSON.stringify(a)),{page:e,results:a,total_pages:t}))).then((({page:e,results:a,total_pages:t})=>d(e,0,t)))}function _(e){const a=document.querySelector(".pagination__item.pagination__item--active");document.querySelector(`[data-page="${e}"]`).classList.add("pagination__item--active"),a&&a.classList.remove("pagination__item--active")}i.addEventListener("click",(function(t){if(t.preventDefault(),"LI"!==t.target.nodeName)return;let i=t.target.dataset.page;if(c=o.value,""!==c)return void a(c,i).then((({page:e,results:a,total_pages:t})=>(n(a,e),localStorage.setItem("queryFilms",JSON.stringify(a)),{page:e,results:a,total_pages:t}))).then((({page:e,results:a,total_pages:t})=>d(e,a,t)));e(i).then((({page:e,results:a,total_pages:t})=>(s(a,e,t),localStorage.setItem("popularFilms",JSON.stringify(a)),{page:e,results:a,total_pages:t}))).then((({page:e,results:a,total_pages:t})=>d(e,a,t))),_(i)})),g.forEach((e=>{e.addEventListener("click",p)}));const m=document.querySelector("body"),u=document.querySelector("#theme-switch-selector"),h=document.querySelector(".page-footer");u.addEventListener("change",(()=>{m.classList.contains("dark-theme")?(m.classList.remove("dark-theme"),m.classList.add("light-theme"),h.classList.remove("dark-theme")):(m.classList.remove("light-theme"),m.classList.add("dark-theme"),h.classList.add("dark-theme"))}));const y=localStorage.getItem("theme");u.addEventListener("change",(e=>{localStorage.setItem("theme",m.classList)})),y&&(m.classList=y),"dark-theme"===y&&u.setAttribute("checked",!0),"dark-theme"===y&&h.classList.add("dark-theme");
//# sourceMappingURL=library.ca5b0ecf.js.map
