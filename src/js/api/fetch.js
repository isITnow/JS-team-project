const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=d70849b39c7b399ded2dffef6ee1baa4';

export function fetchTrending(page) {
  return fetch(`${BASE_URL}/trending/movie/day?&${API_KEY}&page=${page}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    })
    .catch(error => console.log(error));
}

export function fetchGenres() {
  return fetch(`${BASE_URL}/genre/movie/list?${API_KEY}&language=en-US`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    })
    .catch(error => console.log(error));
}

export function fetсhByQuery(query, page) {
  return fetch(
    `${BASE_URL}/search/movie?${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
  )
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    })
    .catch(error => console.log(error));
}

// export function fetchByID(id) {
//   return fetch(`${BASE_URL}/movie/${id}?${API_KEY}&language=en-US`)
//     .then(resp => {
//       if (!resp.ok) {
//         throw new Error(resp.status);
//       }
//       return resp.json();
//     })
//     .catch(error => console.log(error));
// }
