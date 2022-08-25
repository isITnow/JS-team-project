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
  modalForm.innerHTML = `
  <div class="card-modal__item">
  <div class="card-modal__image-wrap">
  
        <img width="50" class="card-modal__image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${
    title || name
  }"/>
        </div>
        <div class="card-modal__wrapper">
        <h2 class="card-modal__title">${title}</h2>
        <table class="card-modal__film-info">
        <tbody>
  <tr>
  <td class="card-modal__rating">Vote/Votes</td>
  <td class="card-modal__rating-result"><span class="card-modal__rating-result-span">${vote_average.toFixed(
    1
  )}</span>  / ${vote_count}</td>
          </tr>
          <tr>
          <td class="card-modal__popularity">Popularity</td>
         
          <td class="card-modal__popularity-result">${popularity.toFixed(
            1
          )}</td>
          </tr>
          <tr>
          <td class="card-modal__origin-title">Original Title</td>
          <td class="card-modal__origin-title-result">${original_title}</td>
          </tr>
          <tr>
          <td class="card-modal__genres">Genre</td>
              <td class="card-modal__genres-result">${currentGenres.join(', ')}</td>

              </tr>
              </tbody>
              </table>
              <p class="card-modal__overwiew-title">ABOUT</p>
          <p class="card-modal__overview">${overview}</p>
          <ul class="card-modal__buttons">
<li class="card-modal__button-item">
          <button class="card-modal__button-add js-addToWatched" type="button">ADD TO WATCHED</button>
</li>
<li class="card-modal__button-item">
          <button class="card-modal__button-queue js-addToQueue" type="button">ADD TO QUEUE</button>
          </li>
        </div>
        </div>
        </div>
          </div>
          
          `;
}
