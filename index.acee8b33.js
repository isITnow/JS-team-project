const e=document.querySelector(".gallery__list");(async function(e=1){const n=await fetch(`https://api.themoviedb.org/3/trending/all/week?&api_key=d70849b39c7b399ded2dffef6ee1baa4&page=${e}`);return await n.json()})(undefined).then((n=>e.innerHTML=parseGallery(n)));
//# sourceMappingURL=index.acee8b33.js.map
