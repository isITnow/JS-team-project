function e(e){return fetch(`https://api.themoviedb.org/3/trending/movie/day?&api_key=d70849b39c7b399ded2dffef6ee1baa4&page=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}function t(e,t){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US&page=${t}&include_adult=false&query=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}const a=document.querySelector(".gallery__list");function n(e,t,n){const s=e.reduce(((e,{id:t,poster_path:a,name:n,title:s,release_date:l,vote_average:r,genre_ids:o})=>{const i=[];return JSON.parse(localStorage.getItem("genresData")).forEach((e=>{o.includes(e.id)&&i.push(e.name)})),e+`<li class="gallery__item" id=${t} data-trending>\n          <div class="gallery__link">\n              <img class="gallery__image" src="https://image.tmdb.org/t/p/original${a}" alt="${s||n}" width="394" height ="335"/> \n        </div>\n        <div class="gallery__info">\n              <h2 class="gallery__title">${s||n}</h2>\n              <p class="gallery__genres">\n              <span class="gallery__genr"> ${i.length>3?i.splice(0,2).join(", ")+", Others":i.join(", ")}</span> | \n                  <span class="gallery__release">${l?l.slice(0,4):"no data"}</span>\n                  <span class="gallery__rating">${r.toFixed(1)}\n              </span>\n              </p>\n          </div>\n        </li>`}),"");return a.innerHTML=s,{results:e,page:t,total_pages:n}}function s(e,t,n){const s=e.reduce(((e,{id:t,poster_path:a,name:n,title:s,release_date:l,vote_average:r,genre_ids:o})=>{const i=[];return JSON.parse(localStorage.getItem("genresData")).forEach((e=>{o.includes(e.id)&&i.push(e.name)})),e+`<li class="gallery__item" id=${t} data-query>\n          <div class="gallery__link">\n              <img class="gallery__image" src="https://image.tmdb.org/t/p/original${a}" alt="${s||n}" width="394" height ="335"/> \n        </div>\n        <div class="gallery__info">\n              <h2 class="gallery__title">${s||n}</h2>\n              <p class="gallery__genres">\n              <span class="gallery__genr"> ${i.length>3?i.splice(0,2).join(", ")+", Others":i.join(", ")}</span> | \n                  <span class="gallery__release">${l?l.slice(0,4):"no data"}</span>\n                  <span class="gallery__rating">${r.toFixed(1)}\n              </span>\n              </p>\n          </div>\n        </li>`}),"");return a.innerHTML=s,{results:e,page:t,total_pages:n}}const l=document.querySelector(".pagination__list"),r=document.querySelector(".pagination__btn--left"),o=document.querySelector(".pagination__btn--rigth"),i=document.querySelector(".search__input"),d=document.querySelectorAll(".pagination__btn");let c="";function g(e,t,a){let n="",[s,i]=function(e){if(window.innerWidth>=320&&e<3)var t=1,a=5;else t=e-2,a=e+2;return[t,a]}(e);e>=4&&(n+='\n    <li class ="pagination__item" data-page="1">1</li>',n+='\n    <li class ="pagination__item">...</li>');for(let e=s;e<=i;e+=1)n+=`\n      <li class ="pagination__item" data-page="${e}" >\n        ${e}\n      </li>  \n      \n      `;e>=3&&(n+='\n    <li class ="pagination__item">...</li>',n+=`\n    <li class ="pagination__item" data-page="${a}">${a}</li>`),l.innerHTML=n,o.dataset.page=e+1,r.dataset.page=e-1,function(e,t){1===e?(r.disabled=!0,r.classList.add("disabled")):(r.disabled=!1,r.classList.remove("disabled"));t.length<20?o.disabled=!0:o.disabled=!1}(e,t),m(e)}function u(a){let s=a.currentTarget.dataset.page;c=i.value,""===c?(e(s).then((({page:e,results:t,total_pages:a})=>(n(t,e,a),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>g(e,t,a))),m(s)):t(c,s).then((({page:e,results:t,total_pages:a})=>(n(t,e,a),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>g(e,t,a)))}function m(e){const t=document.querySelector(".pagination__item.pagination__item--active");document.querySelector(`[data-page="${e}"]`).classList.add("pagination__item--active"),t&&t.classList.remove("pagination__item--active")}l.addEventListener("click",(function(a){if(a.preventDefault(),"LI"!==a.target.nodeName)return;let l=a.target.dataset.page;if(c=i.value,""!==c)return void t(c,l).then((({page:e,results:t,total_pages:a})=>(s(t,e),localStorage.setItem("queryFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>g(e,t,a)));e(l).then((({page:e,results:t,total_pages:a})=>(n(t,e,a),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>g(e,t,a))),m(l)})),d.forEach((e=>{e.addEventListener("click",u)}));localStorage.getItem("genresData")||fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).then((e=>localStorage.setItem("genresData",JSON.stringify(e.genres)))),e(1).then((({page:e,results:t,total_pages:a})=>(n(t,e,a),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>g(e,t,a)));const p=document.querySelector(".warning-notify");document.querySelector("#form-search").addEventListener("submit",(function(e){if(e.preventDefault(),_=e.target.elements[0].value.trim(),!_)return p.classList.remove("visually-hidden"),void setTimeout((()=>{p.classList.add("visually-hidden")}),5e3);t(_,1).then((e=>e.results.length?(s(e.results),localStorage.setItem("queryFilms",JSON.stringify(e.results)),{page:1,data:e}):(p.classList.remove("visually-hidden"),void setTimeout((()=>{p.classList.add("visually-hidden")}),5e3)))).then((({page:e,data:t})=>g(e,t.results,t.total_pages)))}));let _="";const h=document.querySelector(".modal__container");function v({poster_path:e,name:t,title:a,original_title:n,vote_average:s,overview:l,vote_count:r,popularity:o,genre_ids:i}){const d=[];JSON.parse(localStorage.getItem("genresData")).forEach((e=>{i.includes(e.id)&&d.push(e.name)})),h.innerHTML=`\n  <div class="card-modal__item">\n  <div class="card-modal__image-wrap">\n  \n        <img width="50" class="card-modal__image" src="https://image.tmdb.org/t/p/original${e}" alt="${a||t}"/>\n        </div>\n        <div class="card-modal__wrapper">\n        <h2 class="card-modal__title">${a}</h2>\n        <table class="card-modal__film-info">\n        <tbody>\n  <tr>\n  <td class="card-modal__rating">Vote/Votes</td>\n  <td class="card-modal__rating-result"><span class="card-modal__rating-result-span">${s.toFixed(1)}</span>  / ${r}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__popularity">Popularity</td>\n         \n          <td class="card-modal__popularity-result">${o.toFixed(1)}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__origin-title">Original Title</td>\n          <td class="card-modal__origin-title-result">${n}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__genres">Genre</td>\n              <td class="card-modal__genres-result">${d.length>3?d.splice(0,2).join(", ")+", Others":d.join(", ")}</td>\n              </tr>\n              </tbody>\n              </table>\n              <h3 class="card-modal__overwiew-title">ABOUT</h3>\n          <p class="card-modal__overview">${l}</p>\n          <div class="card-modal__buttons">\n          <button class="card-modal__button-add" type="button">ADD TO WATCHED</button>\n          <button class="card-modal__button-queue" type="button">ADD TO QUEUE</button>\n        </div>\n        </div>\n        </div>\n          </div>\n          \n          `}(()=>{const e={openModal:document.querySelector("[data-modal-open]"),closeModal:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",a),window.removeEventListener("click",n)}function a(a){"Escape"===a.code&&(e.modal.classList.add("is-hidden"),t())}function n(e){e.currentTarget===e.target&&t()}e.openModal.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",a),window.addEventListener("click",n)})),e.closeModal.addEventListener("click",t),e.backdrop.addEventListener("click",n)})();const y={openCardModal:document.querySelector("[data-card-modal-open]"),closeCardModal:document.querySelector("[data-card-modal-close]"),cardModal:document.querySelector("[data-card-modal]"),modalContainer:document.querySelector(".modal__container"),backdrop:document.querySelector("[data-backdrop-card]"),btnAddToWatched:document.querySelector(".card-modal__button-add"),btnAddToQueue:document.querySelector(".card-modal__button-queue")};function f(){y.cardModal.classList.add("is-hidden"),y.modalContainer.innerHTML="",window.removeEventListener("keydown",b),window.removeEventListener("click",S)}function b(e){"Escape"===e.code&&f()}function S(e){e.currentTarget===e.target&&f()}y.openCardModal.addEventListener("click",(function(e){e.preventDefault();const t=Number(e.target.closest(".gallery__item").id);if("UL"!==e.currentTarget.nodeName)return;if(e.target.closest("[data-trending]")){const e=JSON.parse(localStorage.getItem("popularFilms"));v(e.find((e=>e.id===t)))}if(e.target.closest("[data-query]")){const e=JSON.parse(localStorage.getItem("queryFilms"));v(e.find((e=>e.id===t)))}y.cardModal.classList.remove("is-hidden"),window.addEventListener("keydown",b),window.addEventListener("click",S)})),y.closeCardModal.addEventListener("click",f),y.backdrop.addEventListener("click",S);const L={btnUp:document.querySelector("#btn-up")};L.btnUp.addEventListener("click",(function(){document.body.scrollIntoView({behavior:"smooth",block:"start"})})),document.addEventListener("scroll",(()=>{document.body.scrollTop>window.innerHeight/2||document.documentElement.scrollTop>window.innerHeight/2?L.btnUp.style.display="block":L.btnUp.style.display="none"}));const w=document.querySelector("body"),k=document.querySelector("#theme-switch-selector"),q=document.querySelector(".page-footer");k.addEventListener("change",(()=>{w.classList.contains("dark-theme")?(w.classList.remove("dark-theme"),w.classList.add("light-theme"),q.classList.remove("dark-theme")):(w.classList.remove("light-theme"),w.classList.add("dark-theme"),q.classList.add("dark-theme"))}));const E=localStorage.getItem("theme");k.addEventListener("change",(e=>{localStorage.setItem("theme",w.classList)})),E&&(w.classList=E),"dark-theme"===E&&k.setAttribute("checked",!0),"dark-theme"===E&&q.classList.add("dark-theme");
//# sourceMappingURL=index.1166e686.js.map