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
    window.addEventListener('keydown', onEscapeCloseCardModal);
  }

  function onEscapeCloseCardModal(event) {
    if (event.code === 'Escape') {
      refs.modal.classList.add('is-hidden');
      window.removeEventListener('keydown', onEscapeCloseCardModal);
    }
  }
})();

const refs = {
  openCardModal: document.querySelector('[data-card-modal-open]'),
  closeCardModal: document.querySelector('[data-card-modal-close]'),
  cardModal: document.querySelector('[data-card-modal]'),
  modalContainer: document.querySelector('.modal__container'),
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
  refs.cardModal.classList.remove('is-hidden');
  const modal = {
    onShow: () => {
      window.addEventListener('keydown', onEscapeCloseModal);
    },
    onClose: () => {
      window.removeEventListener('keydown', onEscapeCloseModal);
    },
  };
  // window.addEventListener('keydown', onEscapeCloseModal);
  modal.onShow();
}

function onCloseCardModal() {
  refs.cardModal.classList.add('is-hidden');
  refs.modalContainer.innerHTML = '';
}

function onEscapeCloseModal(event) {
  if (event.code === 'Escape') {
    refs.cardModal.classList.add('is-hidden');
    window.removeEventListener('keydown', onEscapeCloseModal);
  }
}
