export { renderPagination };
import { fetchTrending } from '../api/fetch';
import { renderGalleryMarkup } from '../home/renderGalleryMarkup';
import { renderQueryMarkup } from '../home/renderGalleryMarkup';
import { fetсhByQuery } from '../api/fetch';

const paginationList = document.querySelector('.pagination__list');
const btnLeft = document.querySelector('.pagination__btn--left');
const btnRight = document.querySelector('.pagination__btn--rigth');
const myInput = document.querySelector('.search__input');
const myBtns = document.querySelectorAll('.pagination__btn');
let query = '';

paginationList.addEventListener('click', onClickMyPagination);

myBtns.forEach(btn => {
  btn.addEventListener('click', onClickMyBtn);
});

// fetchTrending(1).then(({page, results}) => renderPagination(page, results))

function renderPagination(page, results, total_pages) {
  let html = '';

  let [startPageNumber, endPageNumber] = getStartedAndPages(page);

  let lastel = total_pages - 3

  if(page >= 5 ) {
    html += `
    <li class ="pagination__item" data-page="1">1</li>`
    html += `
    <li class ="pagination__item">...</li>`
    
  }
  for (let i = startPageNumber; i <= endPageNumber; i += 1) {
    html += `
      <li class ="pagination__item" data-page="${i}" >
        ${i}
      </li>  
      
      `;
    
  }
  if(page >= 1) {
    html += `
    <li class ="pagination__item">...</li>`
    html += `
    <li class ="pagination__item" data-page="${total_pages}">${total_pages}</li>`
  }
  if(page >= lastel) {
    html = `
    <li class ="pagination__item" data-page="1">1</li>
    <li class ="pagination__item">...</li>
    <li class ="pagination__item" data-page="${total_pages - 4}">${total_pages - 4}</li>
    <li class ="pagination__item" data-page="${total_pages - 3}">${total_pages - 3}</li>
    <li class ="pagination__item" data-page="${total_pages - 2}">${total_pages - 2}</li>
    <li class ="pagination__item" data-page="${total_pages - 1}">${total_pages - 1}</li>
    <li class ="pagination__item" data-page="${total_pages}">${total_pages}</li>
    `
  }
  if (page === total_pages) {
    btnRight.disabled = true;
    btnRight.classList.add('disabled')
  } else {
    btnRight.disabled = false;
    btnRight.classList.remove('disabled')
  }
  
  paginationList.innerHTML = html;
  btnRight.dataset.page = page + 1;
  btnLeft.dataset.page = page - 1;

  disabledBtn(page, results);
  makeActive(page);
}

function onClickMyPagination(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'LI') {
    return;
  }
  let page = e.target.dataset.page;
  query = myInput.value;
  if (query !== '') {
    fetсhByQuery(query, page)
      .then(({ page, results, total_pages}) => {
        renderQueryMarkup(results, page);
        localStorage.setItem('queryFilms', JSON.stringify(results));
        return { page, results, total_pages };
      })
      .then(({ page, results, total_pages }) => renderPagination(page, results, total_pages));
    return;
  }
  fetchTrending(page)
    .then(({ page, results, total_pages }) => {
      renderGalleryMarkup(results, page, total_pages);
      localStorage.setItem('popularFilms', JSON.stringify(results));
      return { page, results, total_pages };
      
    })
    .then(({ page, results, total_pages }) => renderPagination(page, results, total_pages));

  makeActive(page);
}

function onClickMyBtn(e) {
  let page = e.currentTarget.dataset.page;
  query = myInput.value;
  if (query !== '') {
    fetсhByQuery(query, page)
    .then(({ page, results, total_pages }) => {
      
      renderGalleryMarkup(results, page, total_pages);
      localStorage.setItem('popularFilms', JSON.stringify(results));
      return { page, results, total_pages };
      
    })
    .then(({ page, results, total_pages }) => renderPagination(page, results, total_pages));
    return;
  }
  fetchTrending(page)
    .then(({ page, results, total_pages }) => {
      renderGalleryMarkup(results, page, total_pages);
      localStorage.setItem('popularFilms', JSON.stringify(results));
      return { page, results, total_pages };
      
    })
    .then(({ page, results, total_pages }) => renderPagination(page, results, total_pages));
  makeActive(page);
}

function makeActive(page) {
  const myActiveLink = document.querySelector(
    '.pagination__item.pagination__item--active'
  );
  const myLink = document.querySelector(`[data-page="${page}"]`);

  myLink.classList.add('pagination__item--active');

  if (myActiveLink) {
    myActiveLink.classList.remove('pagination__item--active');
  }
}

function getStartedAndPages(page) {
  if (window.innerWidth >= 320 && page < 3) {
    var startPageNumber = 1;
    var endPageNumber = 5;
  } else {
    var startPageNumber = page - 2;
    var endPageNumber = page + 2;
  }
  return [startPageNumber, endPageNumber];
}

function disabledBtn(page, results) {
  if (page === 1) {
    btnLeft.disabled = true;
    btnLeft.classList.add('disabled');
  } else {
    btnLeft.disabled = false;
    btnLeft.classList.remove('disabled');
  }
  
}
