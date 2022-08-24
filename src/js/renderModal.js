const modalForm = document.querySelector('.modal__container');

export function renderMovieMarkup({
  poster_path,
  name,
  title,
  original_title,
  vote_average,
  overview,
  vote_count,
  popularity,
  genre_ids,
}) {
  const currentGenres = [];
  const genres = JSON.parse(localStorage.getItem('genresData'));
  genres.forEach(item => {
    if (genre_ids.includes(item.id)) {
      currentGenres.push(item.name);
    }
  });
  modalForm.innerHTML = `<div class="card-modal__item">
  <h2 class="card-modal__title">${title}</h2>
        <img width="50" class="card-modal__image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${
    title || name
  }"/><p class="card-modal__rating">Vote/Votes</p><span class="card-modal__rating-result">${vote_average.toFixed(
    1
  )}/</span>
          <span class="card-modal__rating-multiply">${vote_count}</span>
          <p class="card-modal__popularity">Popularity</p><span class="card-modal__popularity-result">${popularity.toFixed(
            1
          )}</span>
          <p class="card-modal__origin-title">Original Title</p><span class="card-modal__origin-title-result">${original_title}</span>
          <p class="card-modal__genres">Genre</p>
              <span class="card-modal__genres-result">${
                currentGenres.length > 3
                  ? currentGenres.splice(0, 2).join(', ') + ', Others'
                  : currentGenres.join(', ')
              }</span>
          <p class="card-modal__overview">${overview}</p>
          </div>`;
}
