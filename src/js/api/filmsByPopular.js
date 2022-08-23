import { fetchTrending } from "./fetch";
const galleryItem = document.querySelector(".gallery__list")

fetchTrending(1).then(data => filmByPopular(data.results))

function filmByPopular(arr){
    

    const markup = arr.reduce((acc, {id, poster_path, name, title, release_date, vote_average, genre_ids})=>{
        const currentGenres = [];
        const genres = JSON.parse(localStorage.getItem(`genresList`));
        genres.forEach(elem => {
            if (genre_ids.includes(elem.id)) {
                currentGenres.push(elem.name);
            };
        });

        return (acc +
            `<li class="gallery__item" id=${id}>
            <img class="gallery__image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${title || name}" width="100"/>
            <h2 class="gallery__title">${title || name}</h2>
            <p>${currentGenres.join(',')}</p>
                <p class="gallery__release">${release_date.slice(0,4)}</p>
                <span class="gallery__rating">${vote_average.toFixed(1)}</span>
            </li>`
        );
    }, '');
    galleryItem.innerHTML = markup;
    }
