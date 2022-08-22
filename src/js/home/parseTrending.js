import { fetchTrending } from '../api/fetch-trending';

let page;
fetchTrending(page).then(console.log);
