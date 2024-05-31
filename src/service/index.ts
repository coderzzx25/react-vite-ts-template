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
      return error;
    },
    responseSuccessFn: (response) => {
      return response.data;
    },
    responseFailureFn: (error) => {
      console.log(error.response?.data as string)
    }
  }
});

export default request;
