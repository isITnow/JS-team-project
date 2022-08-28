import {
  renderGalleryMarkup,
  renderDefaulMarkup,
} from '../home/renderGalleryMarkup';

import { renderMovieMarkup } from '../renderModal';
import '../pagination/pagination';
import { renderPagination } from '../pagination/pagination';
const galleryList = document.querySelector('.gallery__list');
const myBtns = document.querySelectorAll('.pagination__btn');
const WATCHED_BTN = document.querySelector('.js-watchedBtn');
const QUEUE_BTN = document.querySelector('.js-queueBtn');
const paginationList = document.querySelector('.pagination__container');
const btnsLib = document.querySelector('.buttons-list');
paginationList.addEventListener('click', onClickMyPagination);
btnsLib.addEventListener('click', onLibBtnClick);

WATCHED_BTN.classList.add('js-activeBtn');
QUEUE_BTN.classList.remove('js-activeBtn');

myBtns.forEach(btn => {
  btn.addEventListener('click', onClickMyBtn);
});

export function getListName() {
  return WATCHED_BTN.classList.contains('js-activeBtn')
    ? 'watchedMovies'
    : 'queueMovies';
}

export function libraryMovieCreator(page = 1, listName = 'watchedMovies') {
  if (!localStorage.getItem(listName)) {
    renderDefaulMarkup();
    paginationList.classList.add('visually-hidden');
    return;
  }

  const allItemsFromLocaleStorage = JSON.parse(localStorage.getItem(listName));

  let total_pages = Math.ceil(allItemsFromLocaleStorage.length / 9);

  let itemsFromLocaleStorage = getItemsByPage(
    page,
    total_pages,
    allItemsFromLocaleStorage
  );

  renderGalleryMarkup(
    itemsFromLocaleStorage,
    listName === 'watchedMovies' ? 'data-watched' : 'data-queue'
  );
  renderPagination(page, itemsFromLocaleStorage, total_pages);
}

function getItemsToShowAndPaginationInfo() {
  const listName = getListName();

  const allItemsFromLocaleStorage = JSON.parse(localStorage.getItem(listName));

  let total_pages = Math.ceil(allItemsFromLocaleStorage.length / 9);
  let itemsFromLocaleStorage = getItemsByPage(
    1,
    total_pages,
    allItemsFromLocaleStorage
  );

  return {
    listName,
    total_pages,
    itemsFromLocaleStorage,
  };
}

function onLibBtnClick(e) {
  if (e.target.classList.contains('js-watchedBtn')) {
    /////// watchedBtn class toggle ///////////
    if (!e.target.classList.contains('js-activeBtn')) {
      e.target.classList.add('js-activeBtn');
      QUEUE_BTN.classList.remove('js-activeBtn');
    }

    if (localStorage.getItem('watchedMovies')) {
      const { itemsFromLocaleStorage, total_pages } =
        getItemsToShowAndPaginationInfo();
      paginationList.classList.remove('visually-hidden');
      renderGalleryMarkup(itemsFromLocaleStorage, 'data-watched');
      renderPagination(1, itemsFromLocaleStorage, total_pages);
    } else {
      renderDefaulMarkup();
      paginationList.classList.add('visually-hidden');
    }
  }

  if (e.target.classList.contains('js-queueBtn')) {
    /////// queueBtn class toggle ///////////
    if (!e.target.classList.contains('js-activeBtn')) {
      e.target.classList.add('js-activeBtn');
      WATCHED_BTN.classList.remove('js-activeBtn');
    }

    if (localStorage.getItem('queueMovies')) {
      const { itemsFromLocaleStorage, total_pages } =
        getItemsToShowAndPaginationInfo();
      paginationList.classList.remove('visually-hidden');
      renderGalleryMarkup(itemsFromLocaleStorage, 'data-queue');
      renderPagination(1, itemsFromLocaleStorage, total_pages);
    } else {
      renderDefaulMarkup();
      paginationList.classList.add('visually-hidden');
    }
  }
}

function onClickMyBtn(e) {
  let page = Number(e.currentTarget.dataset.page);

  const listName = getListName();

  libraryMovieCreator(page, listName);
}
function onClickMyPagination(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  let page = Number(e.target.dataset.page);

  const listName = getListName();

  libraryMovieCreator(page, listName);
}

function getItemsByPage(page, total_pages, allItemsFromLocaleStorage) {
  let end =
    allItemsFromLocaleStorage.length < 9 ? allItemsFromLocaleStorage.length : 9;
  let start = 0;
  if (page === total_pages && page !== 1) {
    start = 9 * (page - 1);
    end = (allItemsFromLocaleStorage.length % 9) + start;
  } else if (page > 1) {
    start = 9 * (page - 1);
    end = start + 9;
  }
  return allItemsFromLocaleStorage.splice((page - 1) * 9, 9);
}
