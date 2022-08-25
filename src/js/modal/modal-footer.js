import { fetchByID } from '../api/fetch';
import { renderMovieMarkup } from '../renderModal';
// import { onAddToWatched } from '../modal/modalBtnFunction';
// import { onAddToQueue } from '../modal/modalBtnFunction';

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
  btnAddToWatched: document.querySelector('.card-modal__button-add'),
  btnAddToQueue: document.querySelector('.card-modal__button-queue'),
};

// refs.openCardModal.addEventListener('click', onOpenCardModal);
// refs.closeCardModal.addEventListener('click', onCloseCardModal);
refs.backdrop.addEventListener('click', onBackdropClickCloseModal);
// refs.btnAddToWatched.addEventListener('click', onAddToWatched);
// refs.btnAddToQueue.addEventListener('click', onAddToQueue);

////////MODAL OPEN//////////////////

function onOpenCardModal(event) {
  event.preventDefault();
  const movieId = Number(event.target.closest('.gallery__item').id);
  if (event.currentTarget.nodeName !== 'UL') {
    return;
  }
  if (event.target.closest('[data-trending]')) {
    const trendingArr = JSON.parse(localStorage.getItem('popularFilms'));
    const trendingObj = trendingArr.find(item => item.id === movieId);
    renderMovieMarkup(trendingObj);
  }
  if (event.target.closest('[data-query]')) {
    const querygArr = JSON.parse(localStorage.getItem('queryFilms'));
    const querygObj = querygArr.find(item => item.id === movieId);
    renderMovieMarkup(querygObj);
  }

  refs.cardModal.classList.remove('is-hidden');

  window.addEventListener('keydown', onEscapeCloseModal);
  window.addEventListener('click', onBackdropClickCloseModal);
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
