function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("iZvD9",(function(e,t){var o=a("6DdjN");const n=localStorage.getItem("theme");o.toggleRef.addEventListener("change",(e=>{localStorage.setItem("theme",o.bodyRef.classList)})),n&&(o.bodyRef.classList=n),"dark-theme"===n&&o.toggleRef.setAttribute("checked",!0),"dark-theme"===n&&o.footerDarktheme.classList.add("dark-theme")})),a.register("6DdjN",(function(t,o){e(t.exports,"bodyRef",(function(){return n})),e(t.exports,"toggleRef",(function(){return a})),e(t.exports,"footerDarktheme",(function(){return r}));const n=document.querySelector("body"),a=document.querySelector("#theme-switch-selector"),r=document.querySelector(".page-footer");a.addEventListener("change",(()=>{n.classList.contains("dark-theme")?(n.classList.remove("dark-theme"),n.classList.add("light-theme"),r.classList.remove("dark-theme")):(n.classList.remove("light-theme"),n.classList.add("dark-theme"),r.classList.add("dark-theme"))}))})),a.register("04jNI",(function(t,o){function n(){document.querySelector(".loader-overlay").classList.toggle("is-open")}function a(){document.querySelector(".loader-overlay").classList.remove("is-open")}e(t.exports,"loaderToggle",(function(){return n})),e(t.exports,"hideLoader",(function(){return a}))})),a.register("7XQqj",(function(e,t){a("i2Aqx");var o=a("9J6qy"),n=a("6yUL1");a("6yUL1"),a("6yUL1"),n=a("6yUL1");(()=>{const e={openModal:document.querySelector("[data-modal-open]"),closeModal:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",o),window.removeEventListener("click",n)}function o(o){"Escape"===o.code&&(e.modal.classList.add("is-hidden"),t())}function n(e){e.currentTarget===e.target&&t()}e.openModal.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",o),window.addEventListener("click",n)})),e.closeModal.addEventListener("click",t),e.backdrop.addEventListener("click",n)})();const r={openCardModal:document.querySelector("[data-card-modal-open]"),closeCardModal:document.querySelector("[data-card-modal-close]"),cardModal:document.querySelector("[data-card-modal]"),modalContainer:document.querySelector(".modal__container"),backdrop:document.querySelector("[data-backdrop-card]")};r.openCardModal.addEventListener("click",(function(e){if(e.preventDefault(),d=Number(e.target.closest(".gallery__item").id),"UL"===e.currentTarget.nodeName){if(r.cardModal.classList.remove("is-hidden"),window.addEventListener("keydown",c),window.addEventListener("click",u),e.target.closest("[data-trending]")){const e=JSON.parse(localStorage.getItem("popularFilms"));s=e.find((e=>e.id===d)),(0,o.renderMovieMarkup)(s)}if(e.target.closest("[data-query]")){const e=JSON.parse(localStorage.getItem("queryFilms"));s=e.find((e=>e.id===d)),(0,o.renderMovieMarkup)(s)}if(e.target.closest("[data-watched]")){const e=JSON.parse(localStorage.getItem("watchedMovies"));s=e.find((e=>e.id===d)),(0,o.renderMovieMarkup)(s)}if(e.target.closest("[data-queue]")){const e=JSON.parse(localStorage.getItem("queueMovies"));s=e.find((e=>e.id===d)),(0,o.renderMovieMarkup)(s)}}(0,n.modalBtnsStatusCheck)(s);document.querySelector(".card-modal__buttons").addEventListener("click",i)})),r.closeCardModal.addEventListener("click",l),r.backdrop.addEventListener("click",u);let d,s=null;function i(e){if(e.target.classList.contains("js-addToWatched")&&("ADD TO WATCHED"===e.target.textContent&&((0,n.onAddToWatched)(s,"watchedMovies"),e.target.textContent="REMOVE FROM WATCHED"),"REMOVE FROM WATCHED"===e.target.textContent)){const t=JSON.parse(localStorage.getItem("watchedMovies")),o=t.findIndex((e=>e.id===d));t.splice(o,1),localStorage.setItem("watchedMovies",JSON.stringify(t)),e.target.textContent="ADD TO WATCHED"}if(e.target.classList.contains("js-addToQueue")&&("ADD TO QUEUE"===e.target.textContent&&((0,n.onAddToQueue)(s,"queueMovies"),e.target.textContent="REMOVE FROM QUEUE"),"REMOVE FROM QUEUE"===e.target.textContent)){const t=JSON.parse(localStorage.getItem("queueMovies")),o=t.findIndex((e=>e.id===d));t.splice(o,1),localStorage.setItem("queueMovies",JSON.stringify(t)),e.target.textContent="ADD TO QUEUE"}}function l(){r.cardModal.classList.add("is-hidden"),r.modalContainer.innerHTML="",window.removeEventListener("keydown",c),window.removeEventListener("click",u)}function c(e){"Escape"===e.code&&l()}function u(e){e.currentTarget===e.target&&l()}})),a.register("i2Aqx",(function(t,o){e(t.exports,"fetchTrending",(function(){return d})),e(t.exports,"fetchGenres",(function(){return s})),e(t.exports,"fetсhByQuery",(function(){return i}));var n=a("04jNI");const r="api_key=d70849b39c7b399ded2dffef6ee1baa4";function d(e){return(0,n.loaderToggle)(),fetch(`https://api.themoviedb.org/3/trending/movie/day?&${r}&page=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).finally((()=>setTimeout((()=>{(0,n.hideLoader)()}),500)))}function s(){return fetch(`https://api.themoviedb.org/3/genre/movie/list?${r}&language=en-US`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}function i(e,t){return(0,n.loaderToggle)(),fetch(`https://api.themoviedb.org/3/search/movie?${r}&language=en-US&page=${t}&include_adult=false&query=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).finally((()=>setTimeout((()=>{(0,n.hideLoader)()}),500)))}})),a.register("9J6qy",(function(t,o){e(t.exports,"renderMovieMarkup",(function(){return a}));const n=document.querySelector(".modal__container");function a({poster_path:e,name:t,title:o,original_title:a,vote_average:r,overview:d,vote_count:s,popularity:i,genre_ids:l}){e=e?"https://image.tmdb.org/t/p/original"+e:"https://i.ibb.co/SwmHkLf/zaglushka.jpg";const c=[];JSON.parse(localStorage.getItem("genresData")).forEach((e=>{l.includes(e.id)&&c.push(e.name)})),n.innerHTML=`\n  <div class="card-modal__item">\n  <div class="card-modal__image-wrap">\n  \n        <img width="50" class="card-modal__image" src="${e}" alt="${o||t}"/>\n        </div>\n        <div class="card-modal__wrapper">\n        <h2 class="card-modal__title">${o}</h2>\n        <table class="card-modal__film-info">\n        <tbody>\n  <tr>\n  <td class="card-modal__rating">Vote/Votes</td>\n  <td class="card-modal__rating-result"><span class="card-modal__rating-result-span">${r.toFixed(1)}</span>  / ${s}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__popularity">Popularity</td>\n         \n          <td class="card-modal__popularity-result">${i.toFixed(1)}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__origin-title">Original Title</td>\n          <td class="card-modal__origin-title-result">${a}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__genres">Genre</td>\n              <td class="card-modal__genres-result">${c.join(", ")||"genre information missing"}</td>\n              </tr>\n              </tbody>\n              </table>\n              <p class="card-modal__overwiew-title">ABOUT</p>\n          <p class="card-modal__overview">${d}</p>\n          <ul class="card-modal__buttons">\n<li class="card-modal__button-item">\n          <button class="card-modal__button-add js-addToWatched" type="button">ADD TO WATCHED</button>\n</li>\n<li class="card-modal__button-item">\n          <button class="card-modal__button-queue js-addToQueue" type="button">ADD TO QUEUE</button>\n          </li>\n        </div>\n        </div>\n        </div>\n          </div>\n          \n          `}})),a.register("6yUL1",(function(t,o){function n(e,t){console.log(e),r(e,t),console.log("W CLICK")}function a(e,t){console.log(e),r(e,t),console.log("Q CLICK")}function r(e,t){if(!localStorage.getItem(t)){const o=[];return o.push(e),void localStorage.setItem(t,JSON.stringify(o))}const o=JSON.parse(localStorage.getItem(t));o.some((t=>t.id===e.id))||(o.push(e),localStorage.setItem(t,JSON.stringify(o)))}function d(e){const t=JSON.parse(localStorage.getItem("watchedMovies")),o=JSON.parse(localStorage.getItem("queueMovies"));if(localStorage.getItem("watchedMovies")&&t.some((t=>t.id===e.id))){document.querySelector(".js-addToWatched").textContent="REMOVE FROM WATCHED"}if(localStorage.getItem("queueMovies")&&o.some((t=>t.id===e.id))){document.querySelector(".js-addToQueue").textContent="REMOVE FROM QUEUE"}}e(t.exports,"onAddToWatched",(function(){return n})),e(t.exports,"onAddToQueue",(function(){return a})),e(t.exports,"modalBtnsStatusCheck",(function(){return d}))})),a.register("ldBz7",(function(t,o){e(t.exports,"renderGalleryMarkup",(function(){return a}));const n=document.querySelector(".gallery__list");function a(e,t){const o=e.reduce(((e,{id:o,poster_path:n,name:a,title:r,release_date:d,vote_average:s,genre_ids:i})=>{const l=[];return JSON.parse(localStorage.getItem("genresData")).forEach((e=>{i.includes(e.id)&&l.push(e.name)})),e+`<li class="gallery__item" id=${o} ${t}>\n          <div class="gallery__link">\n              <img class="gallery__image" src="${n=n?"https://image.tmdb.org/t/p/original"+n:"https://i.ibb.co/SwmHkLf/zaglushka.jpg"}" alt="${r||a}" width="394" height ="335"/> \n        </div>\n        <div class="gallery__info">\n              <h2 class="gallery__title">${r||a}</h2>\n              <p class="gallery__genres">\n              <span class="gallery__genr"> ${l.length>3?l.splice(0,2).join(", ")+", Others":l.join(", ")||"genre information missing"}</span> | \n                  <span class="gallery__release">${d?d.slice(0,4):"no release date"}</span>\n                  <span class="gallery__rating">${s.toFixed(1)}\n              </span>\n              </p>\n          </div>\n        </li>`}),"");return n.innerHTML=o,{data:e,dataAttribute:t}}}));
//# sourceMappingURL=library.433298d7.js.map
