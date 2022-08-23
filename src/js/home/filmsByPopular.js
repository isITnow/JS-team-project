import { fetchTrending } from '../api/fetch';
import { fetchGenres } from '../api/fetch';
import { renderGalleryMarkup } from './renderGalleryMarkup';
import {renderPagination} from '../pagination/pagination'

let page = 1;
fetchGenres().then(data =>
  localStorage.setItem('genresData', JSON.stringify(data.genres))
);
fetchTrending(page)
.then(({page, results} )=> renderGalleryMarkup( results, page))
.then(({page, results}) => renderPagination(page, results));
