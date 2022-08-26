import { renderGalleryMarkup } from '../home/renderGalleryMarkup';
import { renderDefaulMarkup } from '../home/renderGalleryMarkup';

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

myBtns.forEach(btn => {
  btn.addEventListener('click', onClickMyBtn);
});


export function libraryMovieCreator(page = 1) {
  WATCHED_BTN.classList.add('js-activeBtn');
  QUEUE_BTN.classList.remove('js-activeBtn');
  if (!localStorage.getItem('watchedMovies')) {
    renderDefaulMarkup();
    return;
  }
  const allItemsFromLocaleStorage = JSON.parse(
    localStorage.getItem('watchedMovies')
  );
  let total_pages = Math.ceil(allItemsFromLocaleStorage.length / 9);
  console.log(typeof total_pages);
  let itemsFromLocaleStorage = getItemsByPage(
    page,
    total_pages,
    allItemsFromLocaleStorage
  );
  console.log(itemsFromLocaleStorage);
  renderGalleryMarkup(itemsFromLocaleStorage, 'data-watched');
  renderPagination(page, itemsFromLocaleStorage, total_pages);
}

function onLibBtnClick(e) {
  if (e.target.classList.contains('js-watchedBtn')) {
    if (localStorage.getItem('watchedMovies')) {
      const parsedWatched = JSON.parse(localStorage.getItem('watchedMovies'));
      renderGalleryMarkup(parsedWatched, 'data-watched');
    } else {
      renderDefaulMarkup();
    }

    /////// watchedBtn class toggle ///////////
    if (!e.target.classList.contains('js-activeBtn')) {
      e.target.classList.add('js-activeBtn');
      QUEUE_BTN.classList.remove('js-activeBtn');
    }
  }

  if (e.target.classList.contains('js-queueBtn')) {
    if (localStorage.getItem('queueMovies')) {
      const parsedQueue = JSON.parse(localStorage.getItem('queueMovies'));
      renderGalleryMarkup(parsedQueue, 'data-queue');
    } else {
      renderDefaulMarkup();
    }
  }
  /////// queueBtn class toggle ///////////
  if (!e.target.classList.contains('js-activeBtn')) {
    e.target.classList.add('js-activeBtn');
    WATCHED_BTN.classList.remove('js-activeBtn');
  }
}

function onClickMyBtn(e) {
  let page = Number(e.currentTarget.dataset.page)
  libraryMovieCreator(page)
}
function onClickMyPagination(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  let page = e.target.dataset.page
  console.log(e.target.dataset.page)
  libraryMovieCreator(page)
}

function getItemsByPage(page,total_pages,allItemsFromLocaleStorage) {
 let end = allItemsFromLocaleStorage.length < 9 ?  allItemsFromLocaleStorage.length : 9
 let start = 0
 if(page === total_pages && page !== 1) {
    start = 9 * (page - 1)
    end = allItemsFromLocaleStorage.length % 9 + start
    console.log(end,allItemsFromLocaleStorage.length % 9, start)
 } else if(page > 1) {
  start = 9 * (page - 1)
  end = start + 9
 } 

  let arr = []
  
    for(let i = start; i < end; i++){
      arr.push(allItemsFromLocaleStorage[i])
      }
      console.log(start,end, allItemsFromLocaleStorage.length)
      console.log(page, total_pages)
  return arr

function getItemsByPage(page, total_pages, allItemsFromLocaleStorage) {
  console.log(allItemsFromLocaleStorage);
  let end = 9;
  let start = 0;
  if (page === total_pages && page !== 1) {
    start = start + end;
    end = (allItemsFromLocaleStorage.length % 9) + end;
  }
  let arr = [];
  console.log(start, end, allItemsFromLocaleStorage.length);
  for (let i = start; i < end; i++) {
    arr.push(allItemsFromLocaleStorage[i]);
  }
  return arr;
}
