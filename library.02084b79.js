!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a("7tQI6"),a("j1lrD"),a("7k6zZ");var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var l=a("1uIgm");a("civ12");var i=a("bOuzt"),c=(i=a("bOuzt"),document.querySelector(".gallery__list"),document.querySelectorAll(".pagination__btn")),u=document.querySelector(".pagination__container"),d=document.querySelector(".buttons-list");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(localStorage.getItem("watchedMovies")){var r=JSON.parse(localStorage.getItem("watchedMovies")),n=Math.ceil(r.length/9);console.log(void 0===n?"undefined":e(o)(n));var a=f(t,n,r);console.log(a),(0,l.renderGalleryMarkup)(a,"data-watched"),(0,i.renderPagination)(t,a,n)}}function g(e){page=Number(e.currentTarget.dataset.page),s(page)}function f(e,t,r){console.log(r);var n=9,a=0;e===t&&1!==e&&(a+=n,n=r.length%9+n);var o=[];console.log(a,n,r.length);for(var l=a;l<n;l++)o.push(r[l]);return o}u.addEventListener("click",(function(e){if(e.preventDefault(),"LI"!==e.target.nodeName)return;s(page)})),d.addEventListener("click",(function(e){if(e.target.classList.contains("js-watchedBtn")&&localStorage.getItem("watchedMovies")){var t=JSON.parse(localStorage.getItem("watchedMovies"));(0,l.renderGalleryMarkup)(t,"data-watched")}if(e.target.classList.contains("js-queueBtn")&&localStorage.getItem("queueMovies")){var r=JSON.parse(localStorage.getItem("queueMovies"));(0,l.renderGalleryMarkup)(r,"data-queue")}})),c.forEach((function(e){e.addEventListener("click",g)})),s()}();
//# sourceMappingURL=library.02084b79.js.map
