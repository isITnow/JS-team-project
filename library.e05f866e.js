!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r),r("7tQI6"),r("j1lrD"),r("7k6zZ");var o=r("1uIgm");document.querySelector(".buttons-list").addEventListener("click",(function(e){if(e.target.classList.contains("js-watchedBtn")&&localStorage.getItem("watchedMovies")){var t=JSON.parse(localStorage.getItem("watchedMovies"));(0,o.renderGalleryMarkup)(t,"data-watched")}if(e.target.classList.contains("js-queueBtn")&&localStorage.getItem("queueMovies")){var a=JSON.parse(localStorage.getItem("queueMovies"));(0,o.renderGalleryMarkup)(a,"data-queue")}})),function(){if(localStorage.getItem("watchedMovies")){var e=JSON.parse(localStorage.getItem("watchedMovies"));(0,o.renderGalleryMarkup)(e,"data-watched")}}()}();
//# sourceMappingURL=library.e05f866e.js.map
