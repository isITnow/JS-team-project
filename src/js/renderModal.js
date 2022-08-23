const modalForm = document.querySelector('[data-backdrop-card]');
console.log(modalForm);

// export function renderMovieMarkup(data) {
//   // const getFilmData = JSON.parse(localStorage.getItem('genresData'));
//   const markup = data.reduce(
//     (
//       acc,
//       {
//         poster_path,
//         name,
//         title,
//         original_title,
//         vote_average,
//         overview,
//         vote_count,
//         popularity,
//         genres,
//       }
//     ) => {
//       return (
//         acc +
//         `<li class="card-modal__item">
//           <h2 class="card-modal__title">${title}</h2>
//           <img class="card-modal__image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${
//           title || name
//         }"/>
//           <p class="card-modal__rating">Vote/Votes</p><span class="card-modal__rating-result">${vote_average}</span>
//           <span class="card-modal__rating-multiply">${vote_count}</span>
//           <p class="card-modal__popularity">Popularity</p><span class="card-modal__popularity-result">${popularity}</span>
//           <p class="card-modal__origin-title">Original Title</p><span class="card-modal__origin-title-result">${original_title}</span>
//           <p class="card-modal__genres">Genre</p>
//               <span class="card-modal__genres-result">${genres.join(
//                 ', '
//               )}</span>

//           <p class="card-modal__overview">${overview}</p>
//           <button class="card-modal__button-add" type="button">ADD TO WATCHED</button>
//           <button class="card-modal__button-queue" type="button">ADD TO QUEUE</button>
//           </li>`
//       );
//     },
//     ''
//   );
//   modalForm.innerHTML = markup;
// }

export function renderMovieMarkup({
  poster_path,
  name,
  title,
  original_title,
  vote_average,
  overview,
  vote_count,
  popularity,
  genres,
}) {
  modalForm.innerHTML = `<li class="card-modal__item">
  <h2 class="card-modal__title">${title}</h2>
        <img width="250" class="card-modal__image" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${
    title || name
  }"/>
          <p class="card-modal__rating">Vote/Votes</p><span class="card-modal__rating-result">${vote_average.toFixed(
            1
          )}/</span>
          <span class="card-modal__rating-multiply">${vote_count}</span>
          <p class="card-modal__popularity">Popularity</p><span class="card-modal__popularity-result">${popularity.toFixed(
            1
          )}</span>
          <p class="card-modal__origin-title">Original Title</p><span class="card-modal__origin-title-result">${original_title}</span>
          <p class="card-modal__genres">Genre</p>
              <span class="card-modal__genres-result">${genres
                .map(elem => elem.name)
                .join(', ')}</span>

          <p class="card-modal__overview">${overview}</p>
          <button class="card-modal__button-add" type="button">ADD TO WATCHED</button>
          <button class="card-modal__button-queue" type="button">ADD TO QUEUE</button>
          </li>`;
}
