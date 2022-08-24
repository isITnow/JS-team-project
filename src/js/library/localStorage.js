// const addToWatchedBtn = document.querySelector('.card-modal__button-add');
// const watchedArr = [];

// // console.log('TEST');

// addToWatchedBtn.addEventListener('click', onAddToWatchedClick);
// function onAddToWatchedClick(evt) {
//   //   if (localStorage.getItem('watchedMovies')) {
//   //     return;
//   //     }
//   console.log(evt);
// }

// localStorage.setItem('watchedMovies', JSON.stringify('watchedArr'));

function addWatchedToLocalStorage(data) {
  if (localStorage.getItem('watchedMovies')) {
    return;
  }
  const watchedArr = [];
  watchedArr.push(data);
  localStorage.setItem('watchedMovies', JSON.stringify('watchedArr'));
}
