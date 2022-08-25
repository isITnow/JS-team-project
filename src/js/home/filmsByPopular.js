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
  .then(({ page, results, total_pages }) => {
    loaderToggle();
    renderGalleryMarkup(results, page, total_pages);
    localStorage.setItem('popularFilms', JSON.stringify(results));
    return { page, results, total_pages };
  })
  .then(({ page, results, total_pages }) =>
    renderPagination(page, results, total_pages)
  )
  .finally(() =>
    setTimeout(() => {
      hideLoader();
    }, 500)
  );

// добавить дату в лс
