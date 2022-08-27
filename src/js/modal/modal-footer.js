import { renderMovieMarkup } from '../renderModal';
import { onAddToWatched } from '../modal/modalBtnFunction';
import { onAddToQueue } from '../modal/modalBtnFunction';
import { modalBtnsStatusCheck } from '../modal/modalBtnFunction';
import { renderGalleryMarkup } from '../home/renderGalleryMarkup';
import { renderDefaulMarkup } from '../home/renderGalleryMarkup';

// Логіка що працює на модалку команди;

(() => {
  const refs = {
    openModal: document.querySelector('[data-modal-open]'),
    closeModal: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModal.addEventListener('click', onOpenModal);
  refs.closeModal.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onBackdropClickCloseModal);

  function onOpenModal() {
    refs.modal.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscapeCloseModal);
    window.addEventListener('click', onBackdropClickCloseModal);
  }

  function onCloseModal() {
    refs.modal.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscapeCloseModal);
    window.removeEventListener('click', onBackdropClickCloseModal);
  }

  function onEscapeCloseModal(event) {
    if (event.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      onCloseModal();
    }
  }

  function onBackdropClickCloseModal(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }
})();

// Логіка що працює на модалку фільма;

const refs = {
  openCardModal: document.querySelector('[data-card-modal-open]'),
  closeCardModal: document.querySelector('[data-card-modal-close]'),
  cardModal: document.querySelector('[data-card-modal]'),
  modalContainer: document.querySelector('.modal__container'),
  backdrop: document.querySelector('[data-backdrop-card]'),
  title: document.querySelector('title'),
  libWatchedBtn: document.querySelector('.js-watchedBtn'),
  libQueueBtn: document.querySelector('.js-queueBtn'),
};

refs.openCardModal.addEventListener('click', onOpenCardModal);
refs.closeCardModal.addEventListener('click', onCloseCardModal);
refs.backdrop.addEventListener('click', onBackdropClickCloseModal);

//////// MODAL OPEN //////////////////

let currentMovie = null;
let movieId;

function onOpenCardModal(event) {
  console.log(event.target);
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  movieId = Number(event.target.closest('.gallery__item').id);
  console.log(movieId);
  if (event.currentTarget.nodeName === 'UL') {
    refs.cardModal.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscapeCloseModal);
    window.addEventListener('click', onBackdropClickCloseModal);
    if (event.target.closest('[data-trending]')) {
      const arr = JSON.parse(localStorage.getItem('popularFilms'));
      currentMovie = arr.find(item => item.id === movieId);
      renderMovieMarkup(currentMovie);
    }
    if (event.target.closest('[data-query]')) {
      const arr = JSON.parse(localStorage.getItem('queryFilms'));
      currentMovie = arr.find(item => item.id === movieId);
      renderMovieMarkup(currentMovie);
    }
    if (event.target.closest('[data-watched]')) {
      const arr = JSON.parse(localStorage.getItem('watchedMovies'));
      currentMovie = arr.find(item => item.id === movieId);
      renderMovieMarkup(currentMovie);
    }
    if (event.target.closest('[data-queue]')) {
      const arr = JSON.parse(localStorage.getItem('queueMovies'));
      currentMovie = arr.find(item => item.id === movieId);
      renderMovieMarkup(currentMovie);
    }
  }
  modalBtnsStatusCheck(currentMovie);

  const modalBtns = document.querySelector('.card-modal__buttons');
  modalBtns.addEventListener('click', onModalBtnClick);
}

///////////// ADD/REMOVE TO/FROM LIBRARY ////////////////////////////

function onModalBtnClick(evt) {
  if (evt.target.classList.contains('js-addToWatched')) {
    if (evt.target.textContent === 'ADD TO WATCHED') {
      onAddToWatched(currentMovie, 'watchedMovies');
      evt.target.textContent = 'REMOVE FROM WATCHED';
      evt.target.classList.add('js-activeBtn');
      if (
        refs.title.textContent === 'My library' &&
        refs.libWatchedBtn.classList.contains('js-activeBtn')
      ) {
        const arr = JSON.parse(localStorage.getItem('watchedMovies'));
        renderGalleryMarkup(arr, 'data-watched');
      }
      return;
    }

    //// REMOVE FROM WATCHED ////

    if (evt.target.textContent === 'REMOVE FROM WATCHED') {
      const arr = JSON.parse(localStorage.getItem('watchedMovies'));
      const currentIdx = arr.findIndex(item => item.id === movieId);
      arr.splice(currentIdx, 1);
      if (!arr.length) {
        localStorage.removeItem('watchedMovies');
        if (
          refs.title.textContent === 'My library' &&
          refs.libWatchedBtn.classList.contains('js-activeBtn')
        ) {
          renderDefaulMarkup();
        }
        evt.target.textContent = 'ADD TO WATCHED';
        evt.target.classList.remove('js-activeBtn');
        return;
      }
      localStorage.setItem('watchedMovies', JSON.stringify(arr));
      evt.target.textContent = 'ADD TO WATCHED';
      evt.target.classList.remove('js-activeBtn');
      if (
        refs.title.textContent === 'My library' &&
        refs.libWatchedBtn.classList.contains('js-activeBtn')
      ) {
        renderGalleryMarkup(arr, 'data-watched');
      }
      return;
    }
  }

  ////////////////////// QUEUE BTN //////////////////////////////////////

  if (evt.target.classList.contains('js-addToQueue')) {
    if (evt.target.textContent === 'ADD TO QUEUE') {
      onAddToQueue(currentMovie, 'queueMovies');
      evt.target.textContent = 'REMOVE FROM QUEUE';
      evt.target.classList.add('js-activeBtn');
      if (
        refs.title.textContent === 'My library' &&
        refs.libQueueBtn.classList.contains('js-activeBtn')
      ) {
        const arr = JSON.parse(localStorage.getItem('queueMovies'));
        renderGalleryMarkup(arr, 'data-queue');
      }
      return;
    }

    /// REMOVE FROM QUEUE ///

    if (evt.target.textContent === 'REMOVE FROM QUEUE') {
      const arr = JSON.parse(localStorage.getItem('queueMovies'));
      const currentIdx = arr.findIndex(item => item.id === movieId);
      arr.splice(currentIdx, 1);
      if (!arr.length) {
        localStorage.removeItem('queueMovies');
        if (
          refs.title.textContent === 'My library' &&
          refs.libQueueBtn.classList.contains('js-activeBtn')
        ) {
          renderDefaulMarkup();
        }
        evt.target.textContent = 'ADD TO QUEUE';
        evt.target.classList.remove('js-activeBtn');
        return;
      }
      localStorage.setItem('queueMovies', JSON.stringify(arr));
      evt.target.textContent = 'ADD TO QUEUE';
      evt.target.classList.remove('js-activeBtn');
      if (
        refs.title.textContent === 'My library' &&
        refs.libQueueBtn.classList.contains('js-activeBtn')
      ) {
        renderGalleryMarkup(arr, 'data-queue');
      }
      return;
    }
  }
}

///////////////MODAL CLOSE//////////////

function onCloseCardModal() {
  refs.cardModal.classList.add('is-hidden');
  refs.modalContainer.innerHTML = '';

  window.removeEventListener('keydown', onEscapeCloseModal);
  window.removeEventListener('click', onBackdropClickCloseModal);
}

function onEscapeCloseModal(event) {
  if (event.code === 'Escape') {
    onCloseCardModal();
  }
}

function onBackdropClickCloseModal(event) {
  if (event.currentTarget === event.target) {
    onCloseCardModal();
  }
}
