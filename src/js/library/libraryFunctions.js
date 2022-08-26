import { renderGalleryMarkup } from '../home/renderGalleryMarkup';
import { renderMovieMarkup } from '../renderModal';
import '../pagination/pagination'
import { renderPagination } from '../pagination/pagination';
const galleryList = document.querySelector('.gallery__list');
const myBtns = document.querySelectorAll('.pagination__btn');
const paginationList = document.querySelector('.pagination__container')
const btnsLib = document.querySelector('.buttons-list');

paginationList.addEventListener('click', onClickMyPagination);
btnsLib.addEventListener('click', onLibBtnClick);

myBtns.forEach(btn => {btn.addEventListener('click', onClickMyBtn)});


export function libraryMovieCreator(page = 1) {
  if (!localStorage.getItem('watchedMovies')) {
    return;
  }
  const allItemsFromLocaleStorage = JSON.parse(localStorage.getItem('watchedMovies'));
  let total_pages =  Math.ceil(allItemsFromLocaleStorage.length / 9)
  console.log(typeof total_pages)
  let itemsFromLocaleStorage = getItemsByPage(page,total_pages,allItemsFromLocaleStorage)
  console.log(itemsFromLocaleStorage)
  renderGalleryMarkup(itemsFromLocaleStorage, 'data-watched');
  renderPagination(page,itemsFromLocaleStorage, total_pages)

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

function onClickMyBtn(e) {
  page = Number(e.currentTarget.dataset.page)
  libraryMovieCreator(page)
}
function onClickMyPagination(e) {
  e.preventDefault();
  // scrollToTop();
  if (e.target.nodeName !== 'LI') {
    return;
  }
  
  libraryMovieCreator(page)
}

function getItemsByPage(page,total_pages,allItemsFromLocaleStorage) {
 console.log(allItemsFromLocaleStorage)
 let end = 9
 let start = 0
 if(page === total_pages && page !== 1) {
    start = start + end
    end = allItemsFromLocaleStorage.length % 9 + end
 }
  let arr = []
  console.log(start,end, allItemsFromLocaleStorage.length)
    for(let i = start; i < end; i++){
      arr.push(allItemsFromLocaleStorage[i])
      }
  return arr
}

