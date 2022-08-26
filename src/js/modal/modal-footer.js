import { fetchByID } from '../api/fetch';
import { renderMovieMarkup } from '../renderModal';
import { onAddToWatched } from '../modal/modalBtnFunction';
import { onAddToQueue } from '../modal/modalBtnFunction';
import { setToLibrary } from '../modal/modalBtnFunction';
import { modalBtnsStatusCheck } from '../modal/modalBtnFunction';

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
};

refs.openCardModal.addEventListener('click', onOpenCardModal);
refs.closeCardModal.addEventListener('click', onCloseCardModal);
refs.backdrop.addEventListener('click', onBackdropClickCloseModal);
// refs.btnAddToWatched.addEventListener('click', onAddToWatched);
// refs.btnAddToQueue.addEventListener('click', onAddToQueue);

////////MODAL OPEN//////////////////
let currentMovie = null;
let movieId;

function onOpenCardModal(event) {
  event.preventDefault();
  movieId = Number(event.target.closest('.gallery__item').id);

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
    // if (event.target.closest('[data-library]')) {
    //   const arr = JSON.parse(localStorage.getItem('library'));
    //   currentMovie = arr.find(item => item.id === movieId);
    //   renderMovieMarkup(currentMovie);
    // }
  }
  modalBtnsStatusCheck(currentMovie);

  const modalBtns = document.querySelector('.card-modal__buttons');
  modalBtns.addEventListener('click', onModalBtnClick);
}

function onModalBtnClick(evt) {
  if (evt.target.classList.contains('js-addToWatched')) {
    if (evt.target.textContent === 'ADD TO WATCHED') {
      onAddToWatched(currentMovie, 'watchedMovies');
      evt.target.textContent = 'REMOVE FROM WATCHED';
      return;
    }

    if (evt.target.textContent === 'REMOVE FROM WATCHED') {
      const arr = JSON.parse(localStorage.getItem('watchedMovies'));
      const currentIdx = arr.findIndex(item => item.id === movieId);
      arr.splice(currentIdx, 1);
      if (!arr.length) {
        localStorage.removeItem('watchedMovies');
        evt.target.textContent = 'ADD TO WATCHED';
        return;
      }
      localStorage.setItem('watchedMovies', JSON.stringify(arr));
      evt.target.textContent = 'ADD TO WATCHED';
      return;
    }
  }

  if (evt.target.classList.contains('js-addToQueue')) {
    if (evt.target.textContent === 'ADD TO QUEUE') {
      onAddToQueue(currentMovie, 'queueMovies');
      evt.target.textContent = 'REMOVE FROM QUEUE';
      return;
    }

    if (evt.target.textContent === 'REMOVE FROM QUEUE') {
      const arr = JSON.parse(localStorage.getItem('queueMovies'));
      const currentIdx = arr.findIndex(item => item.id === movieId);
      arr.splice(currentIdx, 1);
      if (!arr.length) {
        localStorage.removeItem('queueMovies');
        evt.target.textContent = 'ADD TO QUEUE';
        return;
      }
      localStorage.setItem('queueMovies', JSON.stringify(arr));
      evt.target.textContent = 'ADD TO QUEUE';
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

// function onAddToWatched(event) {
//   if (event.currentTarget === event.target) {
//     console.log('ok1');
//     event.target.textContent = 'REMOVE';
//   }
// }

// function onAddToQueue(event) {
//   if (event.currentTarget === event.target) {
//     console.log('ok2');
//     event.target.textContent = 'REMOVE';
//   }
// }
