// const addToWatchedBtn = document.querySelector('.card-modal__button-add');
// const watchedArr = [];

function addWatchedToLocalStorage(data) {
  if (!localStorage.getItem('watchedMovies')) {
    const watchedArr = [];
    watchedArr.push(data);
    localStorage.setItem('watchedMovies', JSON.stringify('watchedArr'));
    return;
  }
  const arr = JSON.parse(localStorage.getItem('watchedMovies'));
  // arr.push(data);
  localStorage.setItem('watchedMovies', JSON.stringify(arr.push(data)));
}
