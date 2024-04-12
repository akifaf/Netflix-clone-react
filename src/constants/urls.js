import { API_key } from "./constants";

// export const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&with_networks=213`

// export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=28`

export const action = `discover/movie?api_key=${API_key}&with_genres=28`;

export const originals = `discover/tv?api_key=${API_key}&with_networks=213`;

export const comedy = `discover/movie?api_key=${API_key}&with_genres=35`;

export const horror = `discover/movie?api_key=${API_key}&with_genres=27`;

export const trending = `trending/all/week?api_key=${API_key}&language=en-US`