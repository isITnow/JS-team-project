import { fetchTrending } from '../api/fetch-trending';
// import parseGallery from '../tmp/parse_gallery.hbs';
const galleryListEl = document.querySelector('.gallery__list');

let page;
fetchTrending(page).then(
  data => (galleryListEl.innerHTML = parseGallery(data))
);
