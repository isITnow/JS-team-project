!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var l={id:e,exports:{}};return r[e]=l,a.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){t[e]=r},e.parcelRequired7c6=a),a("7tQI6"),a("j1lrD"),a("7k6zZ");var l=a("1uIgm");a("civ12");var o=document.querySelector(".gallery__list");document.querySelector(".buttons-list").addEventListener("click",(function(e){if(e.target.classList.contains("js-watchedBtn"))if(localStorage.getItem("watchedMovies")){var r=JSON.parse(localStorage.getItem("watchedMovies"));(0,l.renderGalleryMarkup)("",r,"","data-watched")}else o.innerHTML="ХЕР ВАМ!";if(e.target.classList.contains("js-queueBtn"))if(localStorage.getItem("queueMovies")){var t=JSON.parse(localStorage.getItem("queueMovies"));(0,l.renderGalleryMarkup)("",t,"","data-queue")}else o.innerHTML="ХЕР ВАМ!"})),function(){if(localStorage.getItem("library")){var e=JSON.parse(localStorage.getItem("library"));(0,l.renderGalleryMarkup)("",e,"","data-library")}}()}();
//# sourceMappingURL=library.63fd1a7c.js.map
