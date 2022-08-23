import { fetchByID } from '../api/fetch';
import { renderMovieMarkup } from '../renderModal';

(() => {
  const refs = {
    openModal: document.querySelector('[data-modal-open]'),
    closeModal: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModal.addEventListener('click', toggleModal);
  refs.closeModal.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const refs = {
  openCardModal: document.querySelector('[data-card-modal-open]'),
  closeCardModal: document.querySelector('[data-card-modal-close]'),
  cardModal: document.querySelector('[data-card-modal]'),
};

refs.openCardModal.addEventListener('click', onOpenCardModal);
refs.closeCardModal.addEventListener('click', onCloseCardModal);

function onOpenCardModal(event) {
  event.preventDefault();
  const id = event.target.closest('.gallery__item').id;
  if (event.currentTarget.nodeName !== 'UL') {
    return;
  }
  fetchByID(id).then(data => renderMovieMarkup(data));
  fetchByID(id).then(console.log);
  refs.cardModal.classList.remove('is-hidden');
}

function onCloseCardModal(event) {
  refs.cardModal.classList.add('is-hidden');

  onEscapeCloseModal();
}

function onEscapeCloseModal(event) {
  if (event.code === 'Escape') {
    refs.cardModal.classList.remove('is-hidden');
    refs.modal.classList.remove('is-hidden');
    window.removeEventListener('keydown', onEscapeCloseModal);
  }
}
