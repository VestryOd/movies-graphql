
// import fetch from 'node-fetch';
import { API_URL } from '../constants';
import axios from 'axios';

export const getMovies = (limit = 20, rating) => {
  return axios.get(API_URL)
    .then(res => {
      console.log("--data", res.data);
      return res.data.movies;
    })
};
