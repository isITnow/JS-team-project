!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n),n("7tQI6"),n("bOhwW"),n("7k6zZ");var r=n("1uIgm"),i=n("bOuzt"),s=(i=n("bOuzt"),document.querySelectorAll(".pagination__btn")),l=document.querySelector(".js-watchedBtn"),o=document.querySelector(".js-queueBtn"),c=document.querySelector(".pagination__container"),d=document.querySelector(".buttons-list");function u(){return l.classList.contains("js-activeBtn")?"watchedMovies":"queueMovies"}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"watchedMovies";if(!localStorage.getItem(t))return(0,r.renderDefaulMarkup)(),void c.classList.add("visually-hidden");var a=JSON.parse(localStorage.getItem(t)),n=Math.ceil(a.length/9),s=h(e,n,a);(0,r.renderGalleryMarkup)(s,"watchedMovies"===t?"data-watched":"data-queue"),(0,i.renderPagination)(e,s,n)}function v(){var e=u(),t=JSON.parse(localStorage.getItem(e)),a=Math.ceil(t.length/9);return{listName:e,total_pages:a,itemsFromLocaleStorage:h(1,a,t)}}function f(e){g(Number(e.currentTarget.dataset.page),u())}function h(e,t,a){a.length<9&&a.length;var n=0;return e===t&&1!==e?(n=9*(e-1),a.length%9+n):e>1&&(n=9*(e-1))+9,a.splice(9*(e-1),9)}c.addEventListener("click",(function(e){if("LI"!==e.target.nodeName)return;var t=Number(e.target.dataset.page),a=u();g(t,a)})),d.addEventListener("click",(function(e){if(e.target.classList.contains("js-watchedBtn"))if(e.target.classList.contains("js-activeBtn")||(e.target.classList.add("js-activeBtn"),o.classList.remove("js-activeBtn")),localStorage.getItem("watchedMovies")){var t=v(),a=t.itemsFromLocaleStorage,n=t.total_pages;c.classList.remove("visually-hidden"),(0,r.renderGalleryMarkup)(a,"data-watched"),(0,i.renderPagination)(1,a,n)}else(0,r.renderDefaulMarkup)(),c.classList.add("visually-hidden");if(e.target.classList.contains("js-queueBtn"))if(e.target.classList.contains("js-activeBtn")||(e.target.classList.add("js-activeBtn"),l.classList.remove("js-activeBtn")),localStorage.getItem("queueMovies")){var s=v(),d=s.itemsFromLocaleStorage,u=s.total_pages;c.classList.remove("visually-hidden"),(0,r.renderGalleryMarkup)(d,"data-queue"),(0,i.renderPagination)(1,d,u)}else(0,r.renderDefaulMarkup)(),c.classList.add("visually-hidden")})),l.classList.add("js-activeBtn"),o.classList.remove("js-activeBtn"),s.forEach((function(e){e.addEventListener("click",f)})),g()}();
//# sourceMappingURL=library.b9d0975b.js.map