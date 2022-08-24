import { fetсhByQuery } from '../api/fetch';
import { renderQueryMarkup } from './renderGalleryMarkup';
import { renderPagination } from '../pagination/pagination';
const warningEl = document.querySelector('.warning-notify');
const formEl = document.querySelector('#form-search');

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
    .then(data => {
      if (!data.results.length) {
        warningEl.classList.remove('visually-hidden');
        setTimeout(() => {
          warningEl.classList.add('visually-hidden');
        }, 5000);
        return;
      }
      renderQueryMarkup(data.results);
      localStorage.setItem('queryFilms', JSON.stringify(data.results));
      return { page, data };
    })
    .then(({ page, data }) => renderPagination(page, data.results));
}
