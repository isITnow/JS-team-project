var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("iZvD9"),o("04jNI"),o("7XQqj");var a=o("ldBz7");o("9J6qy");var r=o("8huCE");r=o("8huCE");document.querySelector(".gallery__list");const l=document.querySelectorAll(".pagination__btn"),c=document.querySelector(".pagination__container"),i=document.querySelector(".buttons-list");function u(e=1){if(!localStorage.getItem("watchedMovies"))return;const t=JSON.parse(localStorage.getItem("watchedMovies"));let n=Math.ceil(t.length/9);console.log(typeof n);let o=function(e,t,n){console.log(n);let o=9,a=0;e===t&&1!==e&&(a+=o,o=n.length%9+o);let r=[];console.log(a,o,n.length);for(let e=a;e<o;e++)r.push(n[e]);return r}(e,n,t);console.log(o),(0,a.renderGalleryMarkup)(o,"data-watched"),(0,r.renderPagination)(e,o,n)}function s(e){page=Number(e.currentTarget.dataset.page),u(page)}c.addEventListener("click",(function(e){if(e.preventDefault(),"LI"!==e.target.nodeName)return;u(page)})),i.addEventListener("click",(function(e){if(e.target.classList.contains("js-watchedBtn")&&localStorage.getItem("watchedMovies")){const e=JSON.parse(localStorage.getItem("watchedMovies"));(0,a.renderGalleryMarkup)(e,"data-watched")}if(e.target.classList.contains("js-queueBtn")&&localStorage.getItem("queueMovies")){const e=JSON.parse(localStorage.getItem("queueMovies"));(0,a.renderGalleryMarkup)(e,"data-queue")}})),l.forEach((e=>{e.addEventListener("click",s)})),u();
//# sourceMappingURL=library.91625d15.js.map
