import axios from 'axios';

const API = axios.create({
  baseURL: 'http://curd-product-api.onrender.com/api',
});

export default API;