const galleryItem = document.querySelector('.gallery__list');

export function renderGalleryMarkup(results, page) {
  console.log(results)
  const markup = results.reduce(
    (
      acc,
      { id, poster_path, name, title, release_date, vote_average, genre_ids }
    ) => {
      const currentGenres = [];
      const genres = JSON.parse(localStorage.getItem('genresData'));
      genres.forEach(item => {
        if (genre_ids.includes(item.id)) {
          currentGenres.push(item.name);
        }
      });
      return (
        acc +
        `<li class="gallery__item" id=${id}>
          <a class="gallery__link" href="#">
              <img class="gallery__image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${
          title || name
        }" width="100"/>
              <h2 class="gallery__title">${title || name}</h2>
              <p>${
                currentGenres.length > 3
                  ? currentGenres.splice(0, 2).join(', ') + ', Others'
                  : currentGenres.join(', ')
              }</p>
                  <p class="gallery__release">${release_date.slice(0, 4)}</p>
                  <span class="gallery__rating">${vote_average.toFixed(
                    1
                  )}</span>
           </a>
              </li>`
        );
      },
      ''
    );
    galleryItem.innerHTML = markup;
      return {results, page}
  }
