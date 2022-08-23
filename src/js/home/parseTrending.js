import { fetchTrending } from '../api/fetch';
import parseGallery from '../tmp/parse_gallery.hbs';
const galleryListEl = document.querySelector('.gallery__list');

let page;
fetchTrending(page).then(data => createMarkup(data));

function createMarkup(data) {
  console.log(data.results);
  galleryListEl.innerHTML = parseGallery(data.results);
}
