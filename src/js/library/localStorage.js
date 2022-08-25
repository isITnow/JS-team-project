// export function addWatchedToLocalStorage(data) {
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

// export function addQueueToLocalStorage(data) {
//   if (!localStorage.getItem('queueMovies')) {
//     const queueArr = [];
//     queueArr.push(data);
//     localStorage.setItem('queueMovies', JSON.stringify(queueArr));
//     return;
//   }
//   const arr = JSON.parse(localStorage.getItem('queueMovies'));
//   arr.push(data);
//   localStorage.setItem('queueMovies', JSON.stringify(arr));
// }

// export function addWatchedToLocalStorage(data, storageKey) {
//   setToLocalStorage(data, storageKey);
// }

// function setToLocalStorage(data, storageKey) {
//   if (!localStorage.getItem(storageKey)) {
//     const arr = [];
//     arr.push(data);
//     localStorage.setItem(storageKey, JSON.stringify('arr'));
//     return;
//   }
//   const arr = JSON.parse(localStorage.getItem(storageKey));
//   localStorage.setItem(storageKey, JSON.stringify(arr.push(data)));
// }
