function e(){document.querySelector(".loader-overlay").classList.toggle("is-open")}function t(){document.querySelector(".loader-overlay").classList.remove("is-open")}function a(a){return e(),fetch(`https://api.themoviedb.org/3/trending/movie/day?&api_key=d70849b39c7b399ded2dffef6ee1baa4&page=${a}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).finally((()=>setTimeout((()=>{t()}),500)))}function n(a,n){return e(),fetch(`https://api.themoviedb.org/3/search/movie?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US&page=${n}&include_adult=false&query=${a}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).finally((()=>setTimeout((()=>{t()}),500)))}const s=document.querySelector(".gallery__list");function i(e,t,a,n){const i=t.reduce(((e,{id:t,poster_path:a,name:s,title:i,release_date:o,vote_average:l,genre_ids:r})=>{const d=[];return JSON.parse(localStorage.getItem("genresData")).forEach((e=>{r.includes(e.id)&&d.push(e.name)})),e+`<li class="gallery__item" id=${t} ${n}>\n          <div class="gallery__link">\n              <img class="gallery__image" src="${a=a?"https://image.tmdb.org/t/p/original"+a:"https://i.ibb.co/SwmHkLf/zaglushka.jpg"}" alt="${i||s}" width="394" height ="335"/> \n        </div>\n        <div class="gallery__info">\n              <h2 class="gallery__title">${i||s}</h2>\n              <p class="gallery__genres">\n              <span class="gallery__genr"> ${d.length>3?d.splice(0,2).join(", ")+", Others":d.join(", ")||"genre information missing"}</span> | \n                  <span class="gallery__release">${o?o.slice(0,4):"no release date"}</span>\n                  <span class="gallery__rating">${l.toFixed(1)}\n              </span>\n              </p>\n          </div>\n        </li>`}),"");return s.innerHTML=i,{page:e,results:t,total_pages:a,dataAttribute:n}}const o=document.querySelector(".pagination__list"),l=document.querySelector(".pagination__btn--left"),r=document.querySelector(".pagination__btn--rigth"),d=document.querySelector(".search__input"),c=document.querySelectorAll(".pagination__btn");let g,u,m="";function p(e,t,a){let n="",[s,i]=function(e){window.innerWidth>=320&&e<3?(g=1,u=5):(g=e-2,u=e+2);return[g,u]}(e),d=a-3;window.innerWidth>=768&&e>=5&&(n+='\n    <li class ="pagination__item" data-page="1">1</li>',n+='\n    <li class ="pagination__item">...</li>');for(let e=s;e<=i;e+=1)n+=`\n      <li class ="pagination__item" data-page="${e}" >\n        ${e}\n      </li>  \n      \n      `;window.innerWidth>=768&&e>=1&&(n+='\n    <li class ="pagination__item">...</li>',n+=`\n    <li class ="pagination__item" data-page="${a}">${a}</li>`),window.innerWidth>=768&&e>=d&&(n=`\n    <li class ="pagination__item" data-page="1">1</li>\n    <li class ="pagination__item">...</li>\n    <li class ="pagination__item" data-page="${a-4}">${a-4}</li>\n    <li class ="pagination__item" data-page="${a-3}">${a-3}</li>\n    <li class ="pagination__item" data-page="${a-2}">${a-2}</li>\n    <li class ="pagination__item" data-page="${a-1}">${a-1}</li>\n    <li class ="pagination__item" data-page="${a}">${a}</li>\n    `),e===a?(r.disabled=!0,r.classList.add("disabled")):(r.disabled=!1,r.classList.remove("disabled")),o.innerHTML=n,r.dataset.page=e+1,l.dataset.page=e-1,function(e){1===e?(l.disabled=!0,l.classList.add("disabled")):(l.disabled=!1,l.classList.remove("disabled"))}(e),h(e)}function _(e){y();let t=e.currentTarget.dataset.page;m=d.value,""===m?(a(t).then((({page:e,results:t,total_pages:a})=>(i(e,t,a,"data-trending"),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>p(e,0,a))),h(t)):n(m,t).then((({page:e,results:t,total_pages:a})=>(i(e,t,a,"data-query"),localStorage.setItem("queryFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>p(e,0,a)))}function h(e){const t=document.querySelector(".pagination__item.pagination__item--active");document.querySelector(`[data-page="${e}"]`).classList.add("pagination__item--active"),t&&t.classList.remove("pagination__item--active")}function y(){window.scrollTo({top:220,behavior:"smooth"})}o.addEventListener("click",(function(e){if(e.preventDefault(),y(),"LI"!==e.target.nodeName)return;let t=e.target.dataset.page;if(m=d.value,""!==m)return void n(m,t).then((({page:e,results:t,total_pages:a})=>(i(e,t,a,"data-query"),localStorage.setItem("queryFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>p(e,t,a)));a(t).then((({page:e,results:t,total_pages:a})=>(i(e,t,a,"data-trending"),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>p(e,t,a))),h(t)})),c.forEach((e=>{e.addEventListener("click",_)}));e(),localStorage.getItem("genresData")||fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).then((e=>localStorage.setItem("genresData",JSON.stringify(e.genres)))),a(1).then((({page:t,results:a,total_pages:n})=>(e(),i(t,a,n,"data-trending"),localStorage.setItem("popularFilms",JSON.stringify(a)),{page:t,results:a,total_pages:n}))).then((({page:e,results:t,total_pages:a})=>p(e,0,a))).finally((()=>setTimeout((()=>{t()}),500)));const v=document.querySelector(".warning-notify");document.querySelector("#form-search").addEventListener("submit",(function(e){if(e.preventDefault(),f=e.target.elements[0].value.trim(),!f)return v.classList.remove("visually-hidden"),void setTimeout((()=>{v.classList.add("visually-hidden")}),5e3);n(f,1).then((({page:e,results:t,total_pages:a})=>t.length?(i(e,t,a,"data-query"),localStorage.setItem("queryFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}):(v.classList.remove("visually-hidden"),void setTimeout((()=>{v.classList.add("visually-hidden")}),5e3)))).then((({page:e,results:t,total_pages:a})=>p(e,0,a)))}));let f="";const b=document.querySelector(".modal__container");function S({poster_path:e,name:t,title:a,original_title:n,vote_average:s,overview:i,vote_count:o,popularity:l,genre_ids:r}){e=e?"https://image.tmdb.org/t/p/original"+e:"https://i.ibb.co/SwmHkLf/zaglushka.jpg";const d=[];JSON.parse(localStorage.getItem("genresData")).forEach((e=>{r.includes(e.id)&&d.push(e.name)})),b.innerHTML=`\n  <div class="card-modal__item">\n  <div class="card-modal__image-wrap">\n  \n        <img width="50" class="card-modal__image" src="${e}" alt="${a||t}"/>\n        </div>\n        <div class="card-modal__wrapper">\n        <h2 class="card-modal__title">${a}</h2>\n        <table class="card-modal__film-info">\n        <tbody>\n  <tr>\n  <td class="card-modal__rating">Vote/Votes</td>\n  <td class="card-modal__rating-result"><span class="card-modal__rating-result-span">${s.toFixed(1)}</span>  / ${o}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__popularity">Popularity</td>\n         \n          <td class="card-modal__popularity-result">${l.toFixed(1)}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__origin-title">Original Title</td>\n          <td class="card-modal__origin-title-result">${n}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__genres">Genre</td>\n              <td class="card-modal__genres-result">${d.join(", ")||"genre information missing"}</td>\n              </tr>\n              </tbody>\n              </table>\n              <p class="card-modal__overwiew-title">ABOUT</p>\n          <p class="card-modal__overview">${i}</p>\n          <ul class="card-modal__buttons">\n<li class="card-modal__button-item">\n          <button class="card-modal__button-add js-addToWatched" type="button">ADD TO WATCHED</button>\n</li>\n<li class="card-modal__button-item">\n          <button class="card-modal__button-queue js-addToQueue" type="button">ADD TO QUEUE</button>\n          </li>\n        </div>\n        </div>\n        </div>\n          </div>\n          \n          `}function L(e,t){k(e,t)}function w(e,t){k(e,t)}function k(e,t){if(!localStorage.getItem(t)){const a=[];return a.push(e),void localStorage.setItem(t,JSON.stringify(a))}const a=JSON.parse(localStorage.getItem(t));a.some((t=>t.id===e.id))||(a.push(e),localStorage.setItem(t,JSON.stringify(a)))}(()=>{const e={openModal:document.querySelector("[data-modal-open]"),closeModal:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",a),window.removeEventListener("click",n)}function a(a){"Escape"===a.code&&(e.modal.classList.add("is-hidden"),t())}function n(e){e.currentTarget===e.target&&t()}e.openModal.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",a),window.addEventListener("click",n)})),e.closeModal.addEventListener("click",t),e.backdrop.addEventListener("click",n)})();const q={openCardModal:document.querySelector("[data-card-modal-open]"),closeCardModal:document.querySelector("[data-card-modal-close]"),cardModal:document.querySelector("[data-card-modal]"),modalContainer:document.querySelector(".modal__container"),backdrop:document.querySelector("[data-backdrop-card]")};q.openCardModal.addEventListener("click",(function(e){if(e.preventDefault(),q.cardModal.classList.remove("is-hidden"),window.addEventListener("keydown",O),window.addEventListener("click",M),$=Number(e.target.closest(".gallery__item").id),"UL"!==e.currentTarget.nodeName)return;if(e.target.closest("[data-trending]")){const e=JSON.parse(localStorage.getItem("popularFilms"));E=e.find((e=>e.id===$)),S(E)}if(e.target.closest("[data-query]")){const e=JSON.parse(localStorage.getItem("queryFilms"));E=e.find((e=>e.id===$)),S(E)}document.querySelector(".card-modal__buttons").addEventListener("click",T)})),q.closeCardModal.addEventListener("click",I),q.backdrop.addEventListener("click",M);let $,E=null;function T(e){e.target.classList.contains("js-addToWatched")&&(k(E,"watchedMovies"),w(E,"library")),e.target.classList.contains("js-addToQueue")&&(L(E,"queueMovies"),w(E,"library"))}function I(){q.cardModal.classList.add("is-hidden"),q.modalContainer.innerHTML="",window.removeEventListener("keydown",O),window.removeEventListener("click",M)}function O(e){"Escape"===e.code&&I()}function M(e){e.currentTarget===e.target&&I()}const N={btnUp:document.querySelector("#btn-up")};N.btnUp.addEventListener("click",(function(){document.body.scrollIntoView({behavior:"smooth",block:"start"})})),document.addEventListener("scroll",(()=>{document.body.scrollTop>window.innerHeight/2||document.documentElement.scrollTop>window.innerHeight/2?N.btnUp.style.display="block":N.btnUp.style.display="none"}));const J=document.querySelector("body"),j=document.querySelector("#theme-switch-selector"),D=document.querySelector(".page-footer");j.addEventListener("change",(()=>{J.classList.contains("dark-theme")?(J.classList.remove("dark-theme"),J.classList.add("light-theme"),D.classList.remove("dark-theme")):(J.classList.remove("light-theme"),J.classList.add("dark-theme"),D.classList.add("dark-theme"))}));const F=localStorage.getItem("theme");j.addEventListener("change",(e=>{localStorage.setItem("theme",J.classList)})),F&&(J.classList=F),"dark-theme"===F&&j.setAttribute("checked",!0),"dark-theme"===F&&D.classList.add("dark-theme");
//# sourceMappingURL=index.00cb83f0.js.map