import { fetchByID } from '../api/fetch';
import { renderMovieMarkup } from '../renderModal';

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
  }

  function onCloseModal() {
    refs.modal.classList.add('is-hidden');
  }

  function onEscapeCloseModal(event) {
    if (event.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      window.removeEventListener('keydown', onEscapeCloseModal);
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

function onOpenCardModal(event) {
  event.preventDefault();
  const id = event.target.closest('.gallery__item').id;
  if (event.currentTarget.nodeName !== 'UL') {
    return;
  }
  fetchByID(id).then(data => renderMovieMarkup(data));
  refs.cardModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onEscapeCloseModal);
}

function onCloseCardModal() {
  refs.cardModal.classList.add('is-hidden');
  refs.modalContainer.innerHTML = '';
}

function onEscapeCloseModal(event) {
  if (event.code === 'Escape') {
    onCloseCardModal();
    window.removeEventListener('keydown', onEscapeCloseModal);
  }
}

function onBackdropClickCloseModal(event) {
  if (event.currentTarget === event.target) {
    onCloseCardModal();
  }
}
