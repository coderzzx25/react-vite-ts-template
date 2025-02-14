import { BASE_URL, TIME_OUT } from './config';
import Request from './request';

// 统一的请求对象
const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config;
    },
    requestFailureFn: (error) => {
      return Promise.reject(error);
    },
    responseSuccessFn: (response) => {
      return response.data;
    },
    responseFailureFn: (error) => {
      return Promise.reject(error.message || error.response?.data);
    }
  }
});

export default request;
