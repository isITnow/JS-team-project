var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,r.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var l=r("i2Aqx"),i=(l=r("i2Aqx"),r("ldBz7")),o=r("8huCE"),s=r("04jNI");(0,s.loaderToggle)(),localStorage.getItem("genresData")||(0,l.fetchGenres)().then((e=>localStorage.setItem("genresData",JSON.stringify(e.genres)))),(0,l.fetchTrending)(1).then((e=>((0,s.loaderToggle)(),(0,i.renderGalleryMarkup)(e.results,"data-trending"),localStorage.setItem("popularFilms",JSON.stringify(e.results)),e))).then((e=>(0,o.renderPagination)(e.page,e.results,e.total_pages))).finally((()=>setTimeout((()=>{(0,s.hideLoader)()}),500)));l=r("i2Aqx"),i=r("ldBz7"),o=r("8huCE");const a=document.querySelector(".warning-notify"),d=document.querySelector("#form-search"),u=document.querySelector(".pagination__container");d.addEventListener("submit",(function(e){if(e.preventDefault(),c=e.target.elements[0].value.trim(),!c)return a.classList.remove("visually-hidden"),void setTimeout((()=>{a.classList.add("visually-hidden")}),5e3);(0,l.fetсhByQuery)(c,1).then((e=>e.results.length?(u.classList.remove("visually-hidden"),(0,i.renderGalleryMarkup)(e.results,"data-query"),localStorage.setItem("queryFilms",JSON.stringify(e.results)),e):(a.classList.remove("visually-hidden"),setTimeout((()=>{a.classList.add("visually-hidden")}),5e3),void u.classList.add("visually-hidden")))).then((e=>(0,o.renderPagination)(e.page,e.results,e.total_pages)))}));let c="";r("7XQqj"),r("8huCE");const g={btnUp:document.querySelector("#btn-up")};g.btnUp.addEventListener("click",(function(){document.body.scrollIntoView({behavior:"smooth",block:"start"})})),document.addEventListener("scroll",(()=>{document.body.scrollTop>window.innerHeight/2||document.documentElement.scrollTop>window.innerHeight/2?g.btnUp.style.display="block":g.btnUp.style.display="none"})),r("6DdjN"),r("iZvD9"),r("04jNI");
//# sourceMappingURL=index.f82531d2.js.map