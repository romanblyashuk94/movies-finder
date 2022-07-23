import axios from 'axios';

const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

const API_KEY = '9eaa0de4edff59e756e1f2cf3f96cfd3';

export const fetchTrending = (page = 1) => {
  return moviesAPI
    .get(`trending/all/week?api_key=${API_KEY}&page=${page}`)
    .then(resp => resp.data);
};

export const fetchMovieDetails = movieID => {
  return moviesAPI
    .get(`/movie/${movieID}?api_key=${API_KEY}`)
    .then(resp => resp.data);
};

export const fetchMovieCast = movieID => {
  return moviesAPI
    .get(`/movie/${movieID}/credits?api_key=${API_KEY}`)
    .then(resp => resp.data);
};

export const fetchMovieReviews = movieID => {
  return moviesAPI
    .get(`/movie/${movieID}/reviews?api_key=${API_KEY}`)
    .then(resp => resp.data);
};

export const fetchMovieBySearchQuery = (query, page = 1) => {
  return moviesAPI
    .get(`/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(resp => resp.data);
};
