import { fetchTrending } from '../api/fetch';
import { fetchGenres } from '../api/fetch';
import { renderGalleryMarkup } from './renderGalleryMarkup';

let page = 1;
fetchGenres().then(data =>
  localStorage.setItem('genresData', JSON.stringify(data.genres))
);
fetchTrending(page).then(data => renderGalleryMarkup(data.results));
