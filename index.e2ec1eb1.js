function e(e,t){return fetch(`https://api.themoviedb.org/3/search/movie?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US&page=${t}&include_adult=false&query=${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))}const t=document.querySelector(".gallery__list");function a(e){const a=e.reduce(((e,{id:t,poster_path:a,name:n,title:l,release_date:o,vote_average:r,genre_ids:s})=>{const i=[];return JSON.parse(localStorage.getItem("genresData")).forEach((e=>{s.includes(e.id)&&i.push(e.name)})),e+`<li class="gallery__item" id=${t}>\n          <a class="gallery__link" href="//">\n              <img class="gallery__image" src="https://image.tmdb.org/t/p/original${a}" alt="${l||n}" width="100"/>\n              <h2 class="gallery__title">${l||n}</h2>\n              <p>${i.length>3?i.splice(0,2).join(", ")+", Others":i.join(", ")}</p>\n                  <p class="gallery__release">${o.slice(0,4)}</p>\n                  <span class="gallery__rating">${r.toFixed(1)}</span>\n           </a>\n              </li>`}),"");t.innerHTML=a}var n;fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d70849b39c7b399ded2dffef6ee1baa4&language=en-US").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e))).then((e=>localStorage.setItem("genresData",JSON.stringify(e.genres)))),(n=1,fetch(`https://api.themoviedb.org/3/trending/movie/week?&api_key=d70849b39c7b399ded2dffef6ee1baa4&page=${n}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch((e=>console.log(e)))).then((e=>a(e.results)));const l=document.querySelector(".warning-notify");document.querySelector("#form-search").addEventListener("submit",(function(t){if(t.preventDefault(),o=t.target.elements[0].value,!o)return l.classList.remove("visually-hidden"),void setTimeout((()=>{l.classList.add("visually-hidden")}),5e3);e(o,1).then((e=>{a(e.results)}))}));let o="";(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.e2ec1eb1.js.map
