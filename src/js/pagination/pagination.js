export { renderPagination };
import { fetchTrending } from '../api/fetch';
import { renderGalleryMarkup } from '../home/renderGalleryMarkup';
// import { renderQueryMarkup } from '../home/renderGalleryMarkup';
import { fetсhByQuery } from '../api/fetch';

const paginationList = document.querySelector('.pagination__list');
const btnLeft = document.querySelector('.pagination__btn--left');
const btnRight = document.querySelector('.pagination__btn--rigth');
const myInput = document.querySelector('.search__input');
const myBtns = document.querySelectorAll('.pagination__btn');

let startPageNumber;
let endPageNumber;
let query = '';

paginationList.addEventListener('click', onClickMyPagination);

myBtns.forEach(btn => {
  btn.addEventListener('click', onClickMyBtn);
});

function renderPagination(page, results, total_pages) {
  let [startPageNumber, endPageNumber] = getStartedAndPages(page, total_pages);

  let lastel = total_pages - 3;

  let html = addStartDots(page, lastel, total_pages);

  for (let i = startPageNumber; i <= endPageNumber; i += 1) {
    html += `<li class ="pagination__item" data-page="${i}">${i}</li>`;
  }
  if (
    window.innerWidth >= 768 &&
    page >= 1 &&
    lastel > 5 &&
    total_pages >= 50
  ) {
    html += `<li class ="pagination__item">...</li>`;
    html += `<li class ="pagination__item" data-page="${total_pages}">${total_pages}</li>`;
  }
  if (
    window.innerWidth >= 768 &&
    page >= lastel &&
    lastel > 5 &&
    total_pages >= 50
  ) {
    html = `
    <li class ="pagination__item" data-page="${1}">${1}</li>
    <li class ="pagination__item">...</li>
    <li class ="pagination__item" data-page="${total_pages - 4}">${
      total_pages - 4
    }</li>
    <li class ="pagination__item" data-page="${total_pages - 3}">${
      total_pages - 3
    }</li>
    <li class ="pagination__item" data-page="${total_pages - 2}">${
      total_pages - 2
    }</li>
    <li class ="pagination__item" data-page="${total_pages - 1}">${
      total_pages - 1
    }</li>
    <li class ="pagination__item" data-page="${total_pages}">${total_pages}</li>
    `;
  }

  if (page === total_pages) {
    btnRight.disabled = true;
    btnRight.classList.add('disabled');
  } else {
    btnRight.disabled = false;
    btnRight.classList.remove('disabled');
  }

  paginationList.innerHTML = html;
  btnRight.dataset.page = page + 1;
  btnLeft.dataset.page = page - 1;

  disabledBtn(page, results);
  makeActive(page);
}

function onClickMyPagination(e) {
  e.preventDefault();

  scrollToTop();
  if (e.target.nodeName !== 'LI') {
    return;
  }
  let page = e.target.dataset.page;

  console.log(page);

  if (!myInput) {
    console.log('will return');
    return;
  }
  query = myInput.value;
  if (query !== '') {
    fetсhByQuery(query, page)
      .then(data => {
        renderGalleryMarkup(data.results, 'data-query');
        localStorage.setItem('queryFilms', JSON.stringify(data.results));
        return data;
      })
      .then(data =>
        renderPagination(data.page, data.results, data.total_pages)
      );

    return;
  }
  fetchTrending(page)
    .then(data => {
      renderGalleryMarkup(data.results, 'data-trending');
      localStorage.setItem('popularFilms', JSON.stringify(data.results));
      return data;
    })
    .then(data => renderPagination(data.page, data.results, data.total_pages));

  makeActive(page);
}

function onClickMyBtn(e) {
  scrollToTop();
  if (!myInput) {
    return;
  }
  let page = e.currentTarget.dataset.page;
  query = myInput.value;
  if (query !== '') {
    fetсhByQuery(query, page)
      .then(data => {
        renderGalleryMarkup(data.results, 'data-query');
        localStorage.setItem('queryFilms', JSON.stringify(data.results));
        return data;
      })
      .then(data =>
        renderPagination(data.page, data.results, data.total_pages)
      );

    return;
  }
  fetchTrending(page)
    .then(data => {
      renderGalleryMarkup(data.results, 'data-trending');
      localStorage.setItem('popularFilms', JSON.stringify(data.results));
      return data;
    })
    .then(data => renderPagination(data.page, data.results, data.total_pages));

  makeActive(page);
}

function makeActive(page) {
  console.log('page ' + page);

  const myActiveLink = document.querySelector(
    '.pagination__item.pagination__item--active'
  );
  const myLink = document.querySelector(`[data-page="${page}"]`);

  if (!myLink) return;

  myLink.classList.add('pagination__item--active');

  if (myActiveLink) {
    myActiveLink.classList.remove('pagination__item--active');
  }
}

function getStartedAndPages(page, total_pages) {
  if (window.innerWidth >= 320 && page <= 3) {
    startPageNumber = 1;
    endPageNumber = total_pages < 5 ? total_pages : 5;
  } else {
    startPageNumber = total_pages <= 5 ? 1 : page - 2;
    endPageNumber = total_pages - page < 2 ? total_pages : page + 2;
  }
  return [startPageNumber, endPageNumber];
}

function disabledBtn(page) {
  if (page === 1) {
    btnLeft.disabled = true;
    btnLeft.classList.add('disabled');
  } else {
    btnLeft.disabled = false;
    btnLeft.classList.remove('disabled');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 220,
    behavior: 'smooth',
  });
}

function addStartDots(page, lastel, total_pages) {
  let html = '';
  if (
    window.innerWidth >= 768 &&
    page >= 5 &&
    lastel > 5 &&
    total_pages >= 50
  ) {
    html += `<li class ="pagination__item" data-page="1">1</li>`;
    html += `<li class ="pagination__item">...</li>`;
  }
  return html;
}
