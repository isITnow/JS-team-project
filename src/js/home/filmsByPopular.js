import { fetchTrending } from '../api/fetch';
import { fetchGenres } from '../api/fetch';
import { renderGalleryMarkup } from './renderGalleryMarkup';
import { renderPagination } from '../pagination/pagination';
import { loaderToggle, hideLoader } from '../spinner';

let page = 1;
loaderToggle();
function checkGenresLocalStorage() {
  if (localStorage.getItem('genresData')) {
    return;
  }

  fetchGenres().then(data =>
    localStorage.setItem('genresData', JSON.stringify(data.genres))
  );
}

checkGenresLocalStorage();

fetchTrending(page)
  .then((data) => {
    loaderToggle();
    renderGalleryMarkup(data.results, 'data-trending');
    localStorage.setItem('popularFilms', JSON.stringify(data.results));
    return  data
  })
  .then((data) =>
    renderPagination(data.page, data.results, data.total_pages)
  )
  .finally(() =>
    setTimeout(() => {
      hideLoader();
    }, 500)
  );

// добавить дату в лс
