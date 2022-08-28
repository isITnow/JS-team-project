export { onAddToWatched, onAddToQueue, modalBtnsStatusCheck };

function onAddToWatched(data, storageKey) {
  setToLocalStorage(data, storageKey);
}

function onAddToQueue(data, storageKey) {
  setToLocalStorage(data, storageKey);
}

function setToLocalStorage(data, storageKey) {
  if (!localStorage.getItem(storageKey)) {
    const arr = [];
    arr.push(data);
    localStorage.setItem(storageKey, JSON.stringify(arr));
    return;
  }
  const arr = JSON.parse(localStorage.getItem(storageKey));
  if (!arr.some(item => item.id === data.id)) {
    arr.push(data);
    localStorage.setItem(storageKey, JSON.stringify(arr));
  }
}

function modalBtnsStatusCheck(currentMovie) {
  const watchedArr = JSON.parse(localStorage.getItem('watchedMovies'));
  const queueArr = JSON.parse(localStorage.getItem('queueMovies'));
  if (localStorage.getItem('watchedMovies')) {
    if (watchedArr.some(item => item.id === currentMovie.id)) {
      const watchedBtn = document.querySelector('.js-addToWatched');
      watchedBtn.textContent = 'REMOVE FROM WATCHED';
      watchedBtn.classList.add('js-activeBtn');
    }
  }

  if (localStorage.getItem('queueMovies')) {
    if (queueArr.some(item => item.id === currentMovie.id)) {
      const queueBtn = document.querySelector('.js-addToQueue');
      queueBtn.textContent = 'REMOVE FROM QUEUE';
      queueBtn.classList.add('js-activeBtn');
    }
  }
}
