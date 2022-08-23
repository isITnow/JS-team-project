import { fetсhByQuery } from '../api/fetch';
const inputEl = document.querySelector('.search__input');

inputEl.addEventListener('submit', onSearchSubmit);
let page = 1;
let query = '';

console.log('SEARCH BY QUERY');

function onSearchSubmit(evt) {
  evt.preventDefault();
  console.log(evt);
}
