// 对axios请求进行封装
import axios from 'axios';

const request = axios.create({
  baseURL: ''
});

// 请求拦截
request.interceptors.request.use(
  config => {
    // config.params
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 请求响应
request.interceptors.response.use(
  response => {
    console.log('请求响应', response);
    if (response.data.code === 200) return response.data;
    else return Promise.reject(response.data.msg);
  },
  err => {
    return Promise.reject(err);
  }
);

export default request;
