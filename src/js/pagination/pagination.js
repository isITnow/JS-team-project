export { renderPagination };
import { fetchTrending } from '../api/fetch';

const paginationList = document.querySelector('.pagination__list');
const btnLeft = document.querySelector('.pagination__btn--left');
const btnRight = document.querySelector('.pagination__btn--rigth');

btnLeft.addEventListener('click', onClickBtnLeft);
btnRight.addEventListener('click', onClickBtnRight);
paginationList.addEventListener('click', onClickMyPagination);

fetchTrending().then(({page, results}) => renderPagination(page, results))

function renderPagination(page,results) {
   
    let html = '';
    console.log(results)
   let [startPageNumber,endPageNumber] =  getStartedAndPages(page)

    for (let i = startPageNumber; i <= endPageNumber; i += 1) {
      html += `
        <li class ="pagination__item" data-page="${i}" >
          ${i}
        </li>`;
    }
    
    paginationList.innerHTML = html;
    btnRight.dataset.page = page + 1
    btnLeft.dataset.page = page -1
    
    disabledBtn(page, results)
    makeActive(page);
}

function onClickMyPagination(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'LI') {
    return;
  }
  page = e.target.dataset.page;

  fetchTrending(page).then(({page, results}) => renderPagination(page, results))
  makeActive(page);
  
}

function onClickBtnRight() {
    let page = btnRight.dataset.page 
    
    
    fetchTrending(page).then(({page, results}) => renderPagination(page, results))
}

function onClickBtnLeft() {
    let page = btnLeft.dataset.page 
    fetchTrending(page).then(({page, results}) => renderPagination(page, results))
    
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
    if(window.innerWidth >= 320 && page < 3) {
        var startPageNumber = 1
        var endPageNumber = 5
        
    }  else {

        var startPageNumber = page - 2
        var endPageNumber = page + 2
       
    } 
    return [startPageNumber,endPageNumber]
}

function disabledBtn(page, results) {
    if(page === 1) {
        btnLeft.disabled = true
        btnLeft.classList.add('disabled')
    } else {
        btnLeft.disabled = false
        btnLeft.classList.remove('disabled')
    }
    if(results.length < 20) {
        btnRight.disabled = true
    } else {
        btnRight.disabled = false
    }
}

