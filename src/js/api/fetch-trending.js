export const fetchTrending = async function (page = 1) {
  const API_KEY = 'd70849b39c7b399ded2dffef6ee1baa4';
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?&api_key=${API_KEY}&page=${page}`
  );
  const data = await response.json();
  return data;
};
