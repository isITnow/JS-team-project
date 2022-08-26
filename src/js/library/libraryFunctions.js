import { renderGalleryMarkup } from '../home/renderGalleryMarkup';
import { renderMovieMarkup } from '../renderModal';
const galleryList = document.querySelector('.gallery__list');

const btnsLib = document.querySelector('.buttons-list');
btnsLib.addEventListener('click', onLibBtnClick);

export function libraryMovieCreator() {
  if (!localStorage.getItem('library')) {
    return;
    // заглушка
  }
  const parsedLib = JSON.parse(localStorage.getItem('library'));
  renderGalleryMarkup(parsedLib, 'data-library');
}

function onLibBtnClick(e) {
  if (e.target.classList.contains('js-watchedBtn')) {
    if (localStorage.getItem('watchedMovies')) {
      const parsedWatched = JSON.parse(localStorage.getItem('watchedMovies'));
      renderGalleryMarkup(parsedWatched, 'data-watched');
    } else {
      galleryList.innerHTML = 'ХЕР ВАМ!';
    }
  }

  if (e.target.classList.contains('js-queueBtn')) {
    if (localStorage.getItem('queueMovies')) {
      const parsedQueue = JSON.parse(localStorage.getItem('queueMovies'));
      renderGalleryMarkup(parsedQueue, 'data-queue');
    } else {
      galleryList.innerHTML = 'ХЕР ВАМ!';
    }
  }
}
