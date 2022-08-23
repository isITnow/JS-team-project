const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=d70849b39c7b399ded2dffef6ee1baa4';

// // export function fetchMovies(name){
// //     const search = new URLSearchParams({
// //         fields: 'name,backdrop_path,genres,release_date,vote_average,poster_path',
// //     });

// //     return fetch(`${BASE_URL}/movie/${id}?${API_KEY}&append_to_response=videos${search}`).then(response => {
// //           if(!response.ok){
// //             throw new Error(response.status);
// //           }
// //             return response.json();
// //         });
// //       }
//       export function fetchByKey(search){
//         const search = keyword_id
//       return fetch(`${BASE_URL}/3/keyword/${search}?api_key=${API_KEY}`).then(response => {
//         if(!response.ok){
//           throw new Error(response.status);
//         }
//           return response.json();
//       });
//     }
//   // поиск по слову

//     export function fetchPopular(search){
//       return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(response => {
//         if(!response.ok){
//           throw new Error(response.status);
//         }
//           return response.json();
//       });
//     }
// // отдаст массив фильмов в порядке убьівания по рейтингу

export const fetchTrending = function (page = 1) {
  return fetch(`${BASE_URL}/trending/movie/week?&${API_KEY}&page=${page}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.status);
      }
      return resp.json();
    }
  );
};
