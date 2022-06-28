import axios from 'axios';
import { AxiosRequestHeaders } from 'axios';

const $api = axios.create();

const header: AxiosRequestHeaders = {
  'x-rapidapi-host': 'jikan1.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};

$api.interceptors.request.use((config) => {
  config.headers = header;

  return config;
});

export default $api;
