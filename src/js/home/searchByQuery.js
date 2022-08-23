import { fetсhByQuery } from '../api/fetch';
import { renderGalleryMarkup } from './renderGalleryMarkup';
const warningEl = document.querySelector('.warning-notify');
const formEl = document.querySelector('#form-search');

formEl.addEventListener('submit', onSearchSubmit);
let page = 1;
let query = '';

function onSearchSubmit(evt) {
  evt.preventDefault();
  query = evt.target.elements[0].value;
  if (!query) {
    warningEl.classList.remove('visually-hidden');
    setTimeout(() => {
      warningEl.classList.add('visually-hidden');
    }, 5000);
    return;
  }
  fetсhByQuery(query, page).then(data => {
    if (data.results.length === 0) {
      warningEl.classList.remove('visually-hidden');
      setTimeout(() => {
        warningEl.classList.add('visually-hidden');
      }, 5000);
      return;
    }
    renderGalleryMarkup(data.results);
  });
}
