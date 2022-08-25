import { renderGalleryMarkup } from '../home/renderGalleryMarkup';
import { renderMovieMarkup } from '../renderModal';

const btnsLib = document.querySelector('.buttons-list')
btnsLib.addEventListener('click', onLibBtnClick)


export function libraryMovieCreator(){
    if(!localStorage.getItem('library')){
return;
// заглушка
}
const parsedLib = JSON.parse(localStorage.getItem('library'))
renderGalleryMarkup(parsedLib, 'data-library')

}


function onLibBtnClick(e){
if(e.target.classList.contains('js-watchedBtn')){
    const parsedWatched = JSON.parse(localStorage.getItem('watchedMovies'))
    renderGalleryMarkup(parsedWatched, 'data-watched')
}
if(e.target.classList.contains('js-queueBtn')){
    const parsedQueue = JSON.parse(localStorage.getItem('queueMovies'))
    renderGalleryMarkup(parsedQueue, 'data-queue')
}
}