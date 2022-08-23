// export const fetchTrending = function (page = 1) {
//   const API_KEY = 'd70849b39c7b399ded2dffef6ee1baa4';
//   return fetch(
//     `https://api.themoviedb.org/3/trending/movie/week?&api_key=${API_KEY}&page=${page}`
//   ).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.status);
//     }
//     return resp.json();
//   });
// };
