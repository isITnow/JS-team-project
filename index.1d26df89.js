var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var o=n("i2Aqx"),d=(o=n("i2Aqx"),n("ldBz7")),r=n("8huCE"),l=n("04jNI");(0,l.loaderToggle)(),localStorage.getItem("genresData")||(0,o.fetchGenres)().then((e=>localStorage.setItem("genresData",JSON.stringify(e.genres)))),(0,o.fetchTrending)(1).then((({page:e,results:t,total_pages:a})=>((0,l.loaderToggle)(),(0,d.renderGalleryMarkup)(t,e,a),localStorage.setItem("popularFilms",JSON.stringify(t)),{page:e,results:t,total_pages:a}))).then((({page:e,results:t,total_pages:a})=>(0,r.renderPagination)(e,t,a))).finally((()=>setTimeout((()=>{(0,l.hideLoader)()}),500)));o=n("i2Aqx"),d=n("ldBz7"),r=n("8huCE");const i=document.querySelector(".warning-notify");document.querySelector("#form-search").addEventListener("submit",(function(e){if(e.preventDefault(),s=e.target.elements[0].value.trim(),!s)return i.classList.remove("visually-hidden"),void setTimeout((()=>{i.classList.add("visually-hidden")}),5e3);(0,o.fetсhByQuery)(s,1).then((e=>e.results.length?((0,d.renderQueryMarkup)(e.results),localStorage.setItem("queryFilms",JSON.stringify(e.results)),{page:1,data:e}):(i.classList.remove("visually-hidden"),void setTimeout((()=>{i.classList.add("visually-hidden")}),5e3)))).then((({page:e,data:t})=>(0,r.renderPagination)(e,t.results,t.total_pages)))}));let s="";n("i2Aqx");const c=document.querySelector(".modal__container");function u({poster_path:e,name:t,title:a,original_title:n,vote_average:o,overview:d,vote_count:r,popularity:l,genre_ids:i}){e=e?"https://image.tmdb.org/t/p/original"+e:"https://i.ibb.co/SwmHkLf/zaglushka.jpg";const s=[];JSON.parse(localStorage.getItem("genresData")).forEach((e=>{i.includes(e.id)&&s.push(e.name)})),c.innerHTML=`\n  <div class="card-modal__item">\n  <div class="card-modal__image-wrap">\n  \n        <img width="50" class="card-modal__image" src="${e}" alt="${a||t}"/>\n        </div>\n        <div class="card-modal__wrapper">\n        <h2 class="card-modal__title">${a}</h2>\n        <table class="card-modal__film-info">\n        <tbody>\n  <tr>\n  <td class="card-modal__rating">Vote/Votes</td>\n  <td class="card-modal__rating-result"><span class="card-modal__rating-result-span">${o.toFixed(1)}</span>  / ${r}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__popularity">Popularity</td>\n         \n          <td class="card-modal__popularity-result">${l.toFixed(1)}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__origin-title">Original Title</td>\n          <td class="card-modal__origin-title-result">${n}</td>\n          </tr>\n          <tr>\n          <td class="card-modal__genres">Genre</td>\n              <td class="card-modal__genres-result">${s.join(", ")||"genre information missing"}</td>\n\n              </tr>\n              </tbody>\n              </table>\n              <p class="card-modal__overwiew-title">ABOUT</p>\n          <p class="card-modal__overview">${d}</p>\n          <ul class="card-modal__buttons">\n<li class="card-modal__button-item">\n          <button class="card-modal__button-add js-addToWatched" type="button">ADD TO WATCHED</button>\n</li>\n<li class="card-modal__button-item">\n          <button class="card-modal__button-queue js-addToQueue" type="button">ADD TO QUEUE</button>\n          </li>\n        </div>\n        </div>\n        </div>\n          </div>\n          \n          `}function m(e,t){p(e,t)}function g(e,t){p(e,t)}function p(e,t){if(!localStorage.getItem(t)){const a=[];return a.push(e),void localStorage.setItem(t,JSON.stringify(a))}const a=JSON.parse(localStorage.getItem(t));a.some((t=>t.id===e.id))||(a.push(e),localStorage.setItem(t,JSON.stringify(a)))}(()=>{const e={openModal:document.querySelector("[data-modal-open]"),closeModal:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop")};function t(){e.modal.classList.add("is-hidden"),window.removeEventListener("keydown",a),window.removeEventListener("click",n)}function a(a){"Escape"===a.code&&(e.modal.classList.add("is-hidden"),t())}function n(e){e.currentTarget===e.target&&t()}e.openModal.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),window.addEventListener("keydown",a),window.addEventListener("click",n)})),e.closeModal.addEventListener("click",t),e.backdrop.addEventListener("click",n)})();const _={openCardModal:document.querySelector("[data-card-modal-open]"),closeCardModal:document.querySelector("[data-card-modal-close]"),cardModal:document.querySelector("[data-card-modal]"),modalContainer:document.querySelector(".modal__container"),backdrop:document.querySelector("[data-backdrop-card]")};_.openCardModal.addEventListener("click",(function(e){if(e.preventDefault(),_.cardModal.classList.remove("is-hidden"),window.addEventListener("keydown",b),window.addEventListener("click",w),v=Number(e.target.closest(".gallery__item").id),"UL"!==e.currentTarget.nodeName)return;if(e.target.closest("[data-trending]")){const e=JSON.parse(localStorage.getItem("popularFilms"));y=e.find((e=>e.id===v)),u(y)}if(e.target.closest("[data-query]")){const e=JSON.parse(localStorage.getItem("queryFilms"));y=e.find((e=>e.id===v)),u(y)}document.querySelector(".card-modal__buttons").addEventListener("click",f)})),_.closeCardModal.addEventListener("click",h),_.backdrop.addEventListener("click",w);let v,y=null;function f(e){e.target.classList.contains("js-addToWatched")&&(p(y,"watchedMovies"),g(y,"library")),e.target.classList.contains("js-addToQueue")&&(m(y,"queueMovies"),g(y,"library"))}function h(){_.cardModal.classList.add("is-hidden"),_.modalContainer.innerHTML="",window.removeEventListener("keydown",b),window.removeEventListener("click",w)}function b(e){"Escape"===e.code&&h()}function w(e){e.currentTarget===e.target&&h()}n("8huCE");const L={btnUp:document.querySelector("#btn-up")};L.btnUp.addEventListener("click",(function(){document.body.scrollIntoView({behavior:"smooth",block:"start"})})),document.addEventListener("scroll",(()=>{document.body.scrollTop>window.innerHeight/2||document.documentElement.scrollTop>window.innerHeight/2?L.btnUp.style.display="block":L.btnUp.style.display="none"})),n("6DdjN"),n("iZvD9"),n("04jNI");
//# sourceMappingURL=index.1d26df89.js.map