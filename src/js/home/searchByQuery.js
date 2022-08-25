import { fetсhByQuery } from '../api/fetch';
import { renderGalleryMarkup } from './renderGalleryMarkup';
import { renderPagination } from '../pagination/pagination';
const warningEl = document.querySelector('.warning-notify');
const formEl = document.querySelector('#form-search');
const paginationEl = document.querySelector('.pagination__container');

formEl.addEventListener('submit', onSearchSubmit);
let page = 1;
let query = '';

function onSearchSubmit(evt) {
  evt.preventDefault();
  query = evt.target.elements[0].value.trim();
  if (!query) {
    warningEl.classList.remove('visually-hidden');
    setTimeout(() => {
      warningEl.classList.add('visually-hidden');
    }, 5000);
    return;
  }
  fetсhByQuery(query, page)
    .then(({ page, results, total_pages }) => {
      if (!results.length) {
        warningEl.classList.remove('visually-hidden');
        setTimeout(() => {
          warningEl.classList.add('visually-hidden');
        }, 5000);
        paginationEl.classList.add('visually-hidden');
        return;
      }
      paginationEl.classList.remove('visually-hidden');
      renderGalleryMarkup(page, results, total_pages, 'data-query');
      localStorage.setItem('queryFilms', JSON.stringify(results));
      return { page, results, total_pages };
    })
    .then(({ page, results, total_pages }) =>
      renderPagination(page, results, total_pages)
    );
}
