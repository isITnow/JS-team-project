import { fetchTrending } from './fetch';
import {fetchGenres} from './fetch'
import { renderGalleryMarkup } from '../home/renderGalleryMarkup';

let page = 1;
fetchGenres()
.then(data=> (localStorage.setItem('genresData', JSON.stringify(data.genres))))
fetchTrending(page).then(data => renderGalleryMarkup(data.results));

