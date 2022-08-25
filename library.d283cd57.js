!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("7tQI6",(function(e,t){var n=a("j9iUH"),r=localStorage.getItem("theme");n.toggleRef.addEventListener("change",(function(e){localStorage.setItem("theme",n.bodyRef.classList)})),r&&(n.bodyRef.classList=r),"dark-theme"===r&&n.toggleRef.setAttribute("checked",!0),"dark-theme"===r&&n.footerDarktheme.classList.add("dark-theme")})),a.register("j9iUH",(function(t,n){e(t.exports,"bodyRef",(function(){return r})),e(t.exports,"toggleRef",(function(){return a})),e(t.exports,"footerDarktheme",(function(){return o}));var r=document.querySelector("body"),a=document.querySelector("#theme-switch-selector"),o=document.querySelector(".page-footer");a.addEventListener("change",(function(){r.classList.contains("dark-theme")?(r.classList.remove("dark-theme"),r.classList.add("light-theme"),o.classList.remove("dark-theme")):(r.classList.remove("light-theme"),r.classList.add("dark-theme"),o.classList.add("dark-theme"))}))})),a.register("j1lrD",(function(t,n){function r(){document.querySelector(".loader-overlay").classList.toggle("is-open")}function a(){document.querySelector(".loader-overlay").classList.remove("is-open")}e(t.exports,"loaderToggle",(function(){return r})),e(t.exports,"hideLoader",(function(){return a}))})),a.register("7k6zZ",(function(e,t){a("5YnpJ");var n=a("civ12"),r=a("hQmZi");a("hQmZi"),a("hQmZi"),r=a("hQmZi");!function(){var e={openModal:document.querySelector("[data-modal-open]"),closeModal:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",n),window.removeEventListener("click",r)}function n(n){"Escape"===n.code&&(e.modal.classList.add("is-hidden"),t())}function r(e){e.currentTarget===e.target&&t()}e.openModal.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",n),window.addEventListener("click",r)})),e.closeModal.addEventListener("click",t),e.backdrop.addEventListener("click",r)}();var o={openCardModal:document.querySelector("[data-card-modal-open]"),closeCardModal:document.querySelector("[data-card-modal-close]"),cardModal:document.querySelector("[data-card-modal]"),modalContainer:document.querySelector(".modal__container"),backdrop:document.querySelector("[data-backdrop-card]")};o.openCardModal.addEventListener("click",(function(e){if(e.preventDefault(),o.cardModal.classList.remove("is-hidden"),window.addEventListener("keydown",s),window.addEventListener("click",u),c=Number(e.target.closest(".gallery__item").id),"UL"!==e.currentTarget.nodeName)return;if(e.target.closest("[data-trending]")){var t=JSON.parse(localStorage.getItem("popularFilms"));i=t.find((function(e){return e.id===c})),(0,n.renderMovieMarkup)(i)}if(e.target.closest("[data-query]")){var a=JSON.parse(localStorage.getItem("queryFilms"));i=a.find((function(e){return e.id===c})),(0,n.renderMovieMarkup)(i)}if(e.target.closest("[data-watched]")){var l=JSON.parse(localStorage.getItem("watchedMovies"));i=l.find((function(e){return e.id===c})),(0,n.renderMovieMarkup)(i)}if(e.target.closest("[data-queue]")){var g=JSON.parse(localStorage.getItem("queueMovies"));i=g.find((function(e){return e.id===c})),(0,n.renderMovieMarkup)(i)}if(e.target.closest("[data-library]")){var m=JSON.parse(localStorage.getItem("library"));i=m.find((function(e){return e.id===c})),(0,n.renderMovieMarkup)(i)}(0,r.modalBtnsStatusCheck)(i),document.querySelector(".card-modal__buttons").addEventListener("click",d)})),o.closeCardModal.addEventListener("click",l),o.backdrop.addEventListener("click",u);var c,i=null;function d(e){if(e.target.classList.contains("js-addToWatched")&&((0,r.onAddToWatched)(i,"watchedMovies"),(0,r.setToLibrary)(i,"library"),"Remove from watched"===e.target.textContent)){var t=JSON.parse(localStorage.getItem("watchedMovies")),n=t.findIndex((function(e){return e.id===c}));t.splice(n,1),localStorage.setItem("watchedMovies",JSON.stringify(t)),e.target.textContent="Add to watched";var a=JSON.parse(localStorage.getItem("library")),o=t.findIndex((function(e){return e.id===c}));a.splice(o,1),localStorage.setItem("library",JSON.stringify(a))}e.target.classList.contains("js-addToQueue")&&((0,r.onAddToQueue)(i,"queueMovies"),(0,r.setToLibrary)(i,"library"))}function l(){o.cardModal.classList.add("is-hidden"),o.modalContainer.innerHTML="",window.removeEventListener("keydown",s),window.removeEventListener("click",u)}function s(e){"Escape"===e.code&&l()}function u(e){e.currentTarget===e.target&&l()}})),a.register("5YnpJ",(function(t,n){e(t.exports,"fetchTrending",(function(){return i})),e(t.exports,"fetchGenres",(function(){return d})),e(t.exports,"fetсhByQuery",(function(){return l}));var r=a("j1lrD"),o="https://api.themoviedb.org/3",c="api_key=d70849b39c7b399ded2dffef6ee1baa4";function i(e){return(0,r.loaderToggle)(),fetch("".concat(o,"/trending/movie/day?&").concat(c,"&page=").concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log(e)})).finally((function(){return setTimeout((function(){(0,r.hideLoader)()}),500)}))}function d(){return fetch("".concat(o,"/genre/movie/list?").concat(c,"&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log(e)}))}function l(e,t){return(0,r.loaderToggle)(),fetch("".concat(o,"/search/movie?").concat(c,"&language=en-US&page=").concat(t,"&include_adult=false&query=").concat(e)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch((function(e){return console.log(e)})).finally((function(){return setTimeout((function(){(0,r.hideLoader)()}),500)}))}})),a.register("civ12",(function(t,n){e(t.exports,"renderMovieMarkup",(function(){return a}));var r=document.querySelector(".modal__container");function a(e){var t=e.poster_path,n=e.name,a=e.title,o=e.original_title,c=e.vote_average,i=e.overview,d=e.vote_count,l=e.popularity,s=e.genre_ids;t=t?"https://image.tmdb.org/t/p/original"+t:"https://i.ibb.co/SwmHkLf/zaglushka.jpg";var u=[];JSON.parse(localStorage.getItem("genresData")).forEach((function(e){s.includes(e.id)&&u.push(e.name)})),r.innerHTML='\n  <div class="card-modal__item">\n  <div class="card-modal__image-wrap">\n  \n        <img width="50" class="card-modal__image" src="'.concat(t,'" alt="').concat(a||n,'"/>\n        </div>\n        <div class="card-modal__wrapper">\n        <h2 class="card-modal__title">').concat(a,'</h2>\n        <table class="card-modal__film-info">\n        <tbody>\n  <tr>\n  <td class="card-modal__rating">Vote/Votes</td>\n  <td class="card-modal__rating-result"><span class="card-modal__rating-result-span">').concat(c.toFixed(1),"</span>  / ").concat(d,'</td>\n          </tr>\n          <tr>\n          <td class="card-modal__popularity">Popularity</td>\n         \n          <td class="card-modal__popularity-result">').concat(l.toFixed(1),'</td>\n          </tr>\n          <tr>\n          <td class="card-modal__origin-title">Original Title</td>\n          <td class="card-modal__origin-title-result">').concat(o,'</td>\n          </tr>\n          <tr>\n          <td class="card-modal__genres">Genre</td>\n              <td class="card-modal__genres-result">').concat(u.join(", ")||"genre information missing",'</td>\n              </tr>\n              </tbody>\n              </table>\n              <p class="card-modal__overwiew-title">ABOUT</p>\n          <p class="card-modal__overview">').concat(i,'</p>\n          <ul class="card-modal__buttons">\n<li class="card-modal__button-item">\n          <button class="card-modal__button-add js-addToWatched" type="button">ADD TO WATCHED</button>\n</li>\n<li class="card-modal__button-item">\n          <button class="card-modal__button-queue js-addToQueue" type="button">ADD TO QUEUE</button>\n          </li>\n        </div>\n        </div>\n        </div>\n          </div>\n          \n          ')}})),a.register("hQmZi",(function(t,n){function r(e,t){console.log("CLICK"),c(e,t)}function a(e,t){c(e,t)}function o(e,t){c(e,t)}function c(e,t){if(!localStorage.getItem(t)){var n=[];return n.push(e),void localStorage.setItem(t,JSON.stringify(n))}var r=JSON.parse(localStorage.getItem(t));r.some((function(t){return t.id===e.id}))||(r.push(e),localStorage.setItem(t,JSON.stringify(r)))}function i(e){var t=JSON.parse(localStorage.getItem("watchedMovies")),n=JSON.parse(localStorage.getItem("queueMovies"));localStorage.getItem("watchedMovies")&&(t.some((function(t){return t.id===e.id}))&&(document.querySelector(".js-addToWatched").textContent="Remove from watched"));localStorage.getItem("queueMovies")&&(n.some((function(t){return t.id===e.id}))&&(document.querySelector(".js-addToQueue").textContent="Remove from queue"))}e(t.exports,"onAddToWatched",(function(){return r})),e(t.exports,"onAddToQueue",(function(){return a})),e(t.exports,"setToLibrary",(function(){return o})),e(t.exports,"modalBtnsStatusCheck",(function(){return i}))})),a.register("1uIgm",(function(t,n){e(t.exports,"renderGalleryMarkup",(function(){return a}));var r=document.querySelector(".gallery__list");function a(e,t,n,a){var o=t.reduce((function(e,t){var n=t.id,r=t.poster_path,o=t.name,c=t.title,i=t.release_date,d=t.vote_average,l=t.genre_ids,s=[];return JSON.parse(localStorage.getItem("genresData")).forEach((function(e){l.includes(e.id)&&s.push(e.name)})),r=r?"https://image.tmdb.org/t/p/original"+r:"https://i.ibb.co/SwmHkLf/zaglushka.jpg",e+'<li class="gallery__item" id='.concat(n," ").concat(a,'>\n          <div class="gallery__link">\n              <img class="gallery__image" src="').concat(r,'" alt="').concat(c||o,'" width="394" height ="335"/> \n        </div>\n        <div class="gallery__info">\n              <h2 class="gallery__title">').concat(c||o,'</h2>\n              <p class="gallery__genres">\n              <span class="gallery__genr"> ').concat(s.length>3?s.splice(0,2).join(", ")+", Others":s.join(", ")||"genre information missing",'</span> | \n                  <span class="gallery__release">').concat(i?i.slice(0,4):"no release date",'</span>\n                  <span class="gallery__rating">').concat(d.toFixed(1),"\n              </span>\n              </p>\n          </div>\n        </li>")}),"");return r.innerHTML=o,{page:e,results:t,total_pages:n,dataAttribute:a}}}))}();
//# sourceMappingURL=library.d283cd57.js.map
