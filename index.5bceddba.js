function e(e){return fetch(`https://api.themoviedb.org/3/trending/movie/week?&api_key=d70849b39c7b399ded2dffef6ee1baa4&page=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}function t(e,t){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US&page=${t}&include_adult=false&query=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}function a(e){return fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}const n=document.querySelector(".gallery__list");function r(e,t){const a=e.reduce(((e,{id:t,poster_path:a,name:n,title:r,release_date:o,vote_average:s,genre_ids:l})=>{const i=[];return JSON.parse(localStorage.getItem("genresData")).forEach((e=>{l.includes(e.id)&&i.push(e.name)})),e+`<li class="gallery__item" id=${t}>\n          <div class="gallery__link">\n              <img class="gallery__image" src="https://image.tmdb.org/t/p/original${a}" alt="${r||n}" width="394" height ="335"/> \n        </div>\n        <div class="gallery__info">\n              <h2 class="gallery__title">${r||n}</h2>\n              <p>${i.length>3?i.splice(0,2).join(", ")+", Others":i.join(", ")}</p>\n                  <p class="gallery__release">${o?o.slice(0,4):""}</p>\n          </div>\n        </li>`}),"");return n.innerHTML=a,{results:e,page:t}}const o=document.querySelector(".pagination__list"),s=document.querySelector(".pagination__btn--left"),l=document.querySelector(".pagination__btn--rigth"),i=document.querySelector(".search__input"),d=document.querySelectorAll(".pagination__btn");let c="";function u(e,t,a){let n="",[r,i]=function(e){if(window.innerWidth>=320&&e<3)var t=1,a=5;else t=e-2,a=e+2;return[t,a]}(e);for(let e=r;e<=i;e+=1)n+=`\n      <li class ="pagination__item" data-page="${e}" >\n        ${e}\n      </li>  \n      \n      `;o.innerHTML=n,l.dataset.page=e+1,s.dataset.page=e-1,function(e,t){1===e?(s.disabled=!0,s.classList.add("disabled")):(s.disabled=!1,s.classList.remove("disabled"));t.length<20?l.disabled=!0:l.disabled=!1}(e,t),p(e)}function g(a){let n=a.currentTarget.dataset.page;console.log(n),c=i.value,""===c?(e(n).then((({page:e,results:t})=>(r(t,e),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t}))).then((({page:e,results:t})=>u(e,t))),p(n)):t(c,n).then((({page:e,results:t})=>(r(t,e),localStorage.setItem("queryFilms",JSON.stringify(t)),{page:e,results:t}))).then((({page:e,results:t})=>u(e,t)))}function p(e){const t=document.querySelector(".pagination__item.pagination__item--active");document.querySelector(`[data-page="${e}"]`).classList.add("pagination__item--active"),t&&t.classList.remove("pagination__item--active")}o.addEventListener("click",(function(a){if(a.preventDefault(),"LI"!==a.target.nodeName)return;let n=a.target.dataset.page;if(c=i.value,""!==c)return void t(c,n).then((({page:e,results:t})=>(r(t,e),localStorage.setItem("queryFilms",JSON.stringify(t)),{page:e,results:t}))).then((({page:e,results:t})=>u(e,t)));e(n).then((({page:e,results:t})=>(r(t,e),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t}))).then((({page:e,results:t})=>u(e,t))),p(n)})),d.forEach((e=>{e.addEventListener("click",g)}));localStorage.getItem("genresData")||fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).then((e=>localStorage.setItem("genresData",JSON.stringify(e.genres)))),e(1).then((({page:e,results:t})=>(r(t,e),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t}))).then((({page:e,results:t})=>u(e,t)));const m=document.querySelector(".warning-notify");document.querySelector("#form-search").addEventListener("submit",(function(e){if(e.preventDefault(),_=e.target.elements[0].value.trim(),!_)return m.classList.remove("visually-hidden"),void setTimeout((()=>{m.classList.add("visually-hidden")}),5e3);t(_,1).then((e=>e.results.length?(r(e.results),localStorage.setItem("queryFilms",JSON.stringify(e.results)),{page:1,data:e}):(m.classList.remove("visually-hidden"),void setTimeout((()=>{m.classList.add("visually-hidden")}),5e3)))).then((({page:e,data:t})=>u(e,t.results)))}));let _="";const h=document.querySelector(".modal__container");function f({poster_path:e,name:t,title:a,original_title:n,vote_average:r,overview:o,vote_count:s,popularity:l,genres:i}){h.innerHTML=`<div class="card-modal__item">\n  <h2 class="card-modal__title">${a}</h2>\n        <img width="50" class="card-modal__image" src="https://image.tmdb.org/t/p/original${e}" alt="${a||t}"/><p class="card-modal__rating">Vote/Votes</p><span class="card-modal__rating-result">${r.toFixed(1)}/</span>\n          <span class="card-modal__rating-multiply">${s}</span>\n          <p class="card-modal__popularity">Popularity</p><span class="card-modal__popularity-result">${l.toFixed(1)}</span>\n          <p class="card-modal__origin-title">Original Title</p><span class="card-modal__origin-title-result">${n}</span>\n          <p class="card-modal__genres">Genre</p>\n              <span class="card-modal__genres-result">${i.map((e=>e.name)).join(", ")}</span>\n          <p class="card-modal__overview">${o}</p>\n          </div>`}(()=>{const e={openModal:document.querySelector("[data-modal-open]"),closeModal:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden")}function a(n){"Escape"===n.code&&(e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",a),t())}e.openModal.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",a)})),e.closeModal.addEventListener("click",t),e.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&(console.log("кликнули именно в бекдроп"),t())}))})();const v={openCardModal:document.querySelector("[data-card-modal-open]"),closeCardModal:document.querySelector("[data-card-modal-close]"),cardModal:document.querySelector("[data-card-modal]"),modalContainer:document.querySelector(".modal__container"),backdrop:document.querySelector("[data-backdrop-card]")};function y(){v.cardModal.classList.add("is-hidden"),v.modalContainer.innerHTML=""}function S(e){"Escape"===e.code&&(y(),window.removeEventListener("keydown",S))}v.openCardModal.addEventListener("click",(function(e){e.preventDefault();const t=e.target.closest(".gallery__item").id;if("UL"!==e.currentTarget.nodeName)return;a(t).then((e=>f(e))),v.cardModal.classList.remove("is-hidden"),window.addEventListener("keydown",S)})),v.closeCardModal.addEventListener("click",y),v.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&y()}));
//# sourceMappingURL=index.5bceddba.js.map
