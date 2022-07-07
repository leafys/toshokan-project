import axios from 'axios';

const $api = axios.create();

$api.interceptors.request.use((config) => {
  config.baseURL = process.env.REACT_APP_JIKAN_BASEURL;

  return config;
});

export default $api;
