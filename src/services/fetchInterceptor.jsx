import axios from 'axios';
import configEnv from '../utils/config';
import { getSession, storage } from '../utils';

const service = axios.create({
  baseURL: configEnv.API_BASE_URL,
  timeout: 60000,
});

// Configuring the api header and authorization

const TOKEN_PAYLOAD_KEY = 'authorization';
const PUBLIC_REQUEST_KEY = 'public-request';

// API Request Interceptor
service.interceptors.request.use(
  (config) => {
    const token = storage.getToken();
  
//since there is no token provision for this api, the i can negate if conditon here.
    if (!token) {
      (config).headers[TOKEN_PAYLOAD_KEY] = `bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// API respone interceptor
service.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default service;
