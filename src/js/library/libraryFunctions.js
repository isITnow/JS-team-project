import { renderGalleryMarkup } from '../home/renderGalleryMarkup';

const btnsLib = document.querySelector('.buttons-list');
btnsLib.addEventListener('click', onLibBtnClick);

export function libraryMovieCreator() {
  if (!localStorage.getItem('watchedMovies')) {
    return;
  }
  const parsedLib = JSON.parse(localStorage.getItem('watchedMovies'));
  renderGalleryMarkup(parsedLib, 'data-watched');
}

function onLibBtnClick(e) {
  if (e.target.classList.contains('js-watchedBtn')) {
    if (localStorage.getItem('watchedMovies')) {
      const parsedWatched = JSON.parse(localStorage.getItem('watchedMovies'));
      renderGalleryMarkup(parsedWatched, 'data-watched');
    }
  }

  if (e.target.classList.contains('js-queueBtn')) {
    if (localStorage.getItem('queueMovies')) {
      const parsedQueue = JSON.parse(localStorage.getItem('queueMovies'));
      renderGalleryMarkup(parsedQueue, 'data-queue');
    }
  }
}
