import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'content-type': 'application/json',

  },
  paramsSerializer: params => queryString.stringify(params) 
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

const handleSuccess = (res) => {
  if (res && res.data) {
    return res.data;
  }
  return res;
}

const handleError = (err) => {
  return Promise.reject(err);
}

axiosClient.interceptors.response.use(handleSuccess, handleError);

export default axiosClient;