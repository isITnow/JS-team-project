// import { addWatchedToLocalStorage } from '../library/localStorage';
// import { addQueueToLocalStorage } from '../library/localStorage';

export function onAddToWatched(data, storageKey) {
  setToLocalStorage(data, storageKey);
  //   console.log('WATCHED', evt);
  //   if (evt.target.textContent === 'ADD TO WATCHED') {
  //     evt.target.textContent = 'REMOVE FROM WATCHED';
  //   }
}

export function onAddToQueue(data, storageKey) {
  setToLocalStorage(data, storageKey);
  // console.log('QUEUE', evt);
  // if (evt.target.textContent === 'ADD TO QUEUE') {
  //   evt.target.textContent = 'REMOVE FROM QUEUE';
  // }
}

export function setToLibrary(data, storageKey) {
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

export function modalBtnsStatusCheck(currentMovie) {
  const watchedArr = JSON.parse(localStorage.getItem('watchedMovies'));
  const queueArr = JSON.parse(localStorage.getItem('queueMovies'));
  if (localStorage.getItem('watchedMovies')) {
    if (watchedArr.some(item => item.id === currentMovie.id)) {
      const watchedBtn = document.querySelector('.js-addToWatched');
      watchedBtn.textContent = 'REMOVE FROM WATCHED';
    }
  }

  if (localStorage.getItem('queueMovies')) {
    if (queueArr.some(item => item.id === currentMovie.id)) {
      const queueBtn = document.querySelector('.js-addToQueue');
      queueBtn.textContent = 'REMOVE FROM QUEUE';
    }
  }
}

// export function onAddToWatched(data) {
//   console.log('Click');

//   console.log(data);
//   if (!localStorage.getItem('watchedMovies')) {
//     const watchedArr = [];
//     watchedArr.push(data);
//     console.log(watchedArr);
//     localStorage.setItem('watchedMovies', JSON.stringify(watchedArr));
//     return;
//   }
//   const arr = JSON.parse(localStorage.getItem('watchedMovies'));
//   console.log(arr);
//   arr.push(data);
//   localStorage.setItem('watchedMovies', JSON.stringify(arr));
// }

// export function onAddToQueue(data) {
//   console.log('Click');

//   console.log(data);
//   if (!localStorage.getItem('queueMovies')) {
//     const queueArr = [];
//     queueArr.push(data);
//     console.log(queueArr);
//     localStorage.setItem('queueMovies', JSON.stringify(queueArr));
//     return;
//   }
//   const arr = JSON.parse(localStorage.getItem('queueMovies'));
//   console.log(arr);
//   arr.push(data);
//   localStorage.setItem('queueMovies', JSON.stringify(arr));
// }
