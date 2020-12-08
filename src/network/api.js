// axios を require してインスタンスを生成する
const axiosBase = require('axios');

const axios = axiosBase.create({
  baseURL: 'http://jsonplaceholder.typicode.com', // バックエンドB のURL:port を指定する
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
});

export const api = {
  fetchUser: () => axios.get('/users'),
};
