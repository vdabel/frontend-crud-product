import axios from 'axios';

const API = axios.create({
  baseURL: 'https://curd-product-api.onrender.com/api',
});

export default API;