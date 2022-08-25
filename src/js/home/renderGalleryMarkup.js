const galleryItem = document.querySelector('.gallery__list');

export function renderGalleryMarkup(results, page, total_pages) {
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

      poster_path = poster_path
        ? 'https://image.tmdb.org/t/p/original' + poster_path
        : 'https://i.ibb.co/SwmHkLf/zaglushka.jpg';
      return (
        acc +
        `<li class="gallery__item" id=${id} data-trending>
          <div class="gallery__link">
              <img class="gallery__image" src="${poster_path}" alt="${
          title || name
        }" width="394" height ="335"/> 
        </div>
        <div class="gallery__info">
              <h2 class="gallery__title">${title || name}</h2>
              <p class="gallery__genres">
              <span class="gallery__genr"> ${
                currentGenres.length > 3
                  ? currentGenres.splice(0, 2).join(', ') + ', Others'
                  : currentGenres.join(', ') || 'genre information missing'
              }</span> | 
                  <span class="gallery__release">${
                    release_date ? release_date.slice(0, 4) : 'no release date'
                  }</span>
                  <span class="gallery__rating">${vote_average.toFixed(1)}
              </span>
              </p>
          </div>
        </li>`
      );
    },
    ''
  );
  galleryItem.innerHTML = markup;
  return { results, page, total_pages };
}

export function renderQueryMarkup(results, page, total_pages) {
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
      poster_path = poster_path
        ? 'https://image.tmdb.org/t/p/original' + poster_path
        : 'https://i.ibb.co/SwmHkLf/zaglushka.jpg';
      return (
        acc +
        `<li class="gallery__item" id=${id} data-query>
          <div class="gallery__link">
              <img class="gallery__image" src="${poster_path}" alt="${
          title || name
        }" width="394" height ="335"/> 
        </div>
        <div class="gallery__info">
              <h2 class="gallery__title">${title || name}</h2>
              <p class="gallery__genres">
              <span class="gallery__genr"> ${
                currentGenres.length > 3
                  ? currentGenres.splice(0, 2).join(', ') + ', Others'
                  : currentGenres.join(', ') || 'genre information missing'
              } </span> |
                  <span class="gallery__release">${
                    release_date ? release_date.slice(0, 4) : 'no release date'
                  }</span>
                  <span class="gallery__rating">${vote_average.toFixed(1)}
              </span>
              </p>
          </div>
        </li>`
      );
    },
    ''
  );
  galleryItem.innerHTML = markup;
  return { results, page, total_pages };
}

export function renderWatchedMarkup(results, page, total_pages) {
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
      poster_path = poster_path
        ? 'https://image.tmdb.org/t/p/original' + poster_path
        : 'https://i.ibb.co/SwmHkLf/zaglushka.jpg';
      return (
        acc +
        `<li class="gallery__item" id=${id} data-watched>
          <div class="gallery__link">
              <img class="gallery__image" src="${poster_path}" alt="${
          title || name
        }" width="394" height ="335"/> 
        </div>
        <div class="gallery__info">
              <h2 class="gallery__title">${title || name}</h2>
              <p class="gallery__genres">
              <span class="gallery__genr"> ${
                currentGenres.length > 3
                  ? currentGenres.splice(0, 2).join(', ') + ', Others'
                  : currentGenres.join(', ') || 'genre information missing'
              } </span> |
                  <span class="gallery__release">${
                    release_date ? release_date.slice(0, 4) : 'no release date'
                  }</span>
                  <span class="gallery__rating">${vote_average.toFixed(1)}
              </span>
              </p>
          </div>
        </li>`
      );
    },
    ''
  );
  galleryItem.innerHTML = markup;
  return { results, page, total_pages };
}

export function renderQueueMarkup(results, page, total_pages) {
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
      poster_path = poster_path
        ? 'https://image.tmdb.org/t/p/original' + poster_path
        : 'https://i.ibb.co/SwmHkLf/zaglushka.jpg';
      return (
        acc +
        `<li class="gallery__item" id=${id} data-queue>
          <div class="gallery__link">
              <img class="gallery__image" src="${poster_path}" alt="${
          title || name
        }" width="394" height ="335"/> 
        </div>
        <div class="gallery__info">
              <h2 class="gallery__title">${title || name}</h2>
              <p class="gallery__genres">
              <span class="gallery__genr"> ${
                currentGenres.length > 3
                  ? currentGenres.splice(0, 2).join(', ') + ', Others'
                  : currentGenres.join(', ') || 'genre information missing'
              } </span> |
                  <span class="gallery__release">${
                    release_date ? release_date.slice(0, 4) : 'no release date'
                  }</span>
                  <span class="gallery__rating">${vote_average.toFixed(1)}
              </span>
              </p>
          </div>
        </li>`
      );
    },
    ''
  );
  galleryItem.innerHTML = markup;
  return { results, page, total_pages };
}
