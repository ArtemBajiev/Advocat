import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://api.sudural.ru/api',
});

axiosClient.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Bearer ${localStorage.getItem('userAccesKey')}`;
  return config;
});

export default axiosClient;
