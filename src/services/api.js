import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tesis-backend-xro2.onrender.com/api',
  withCredentials: true,
});

export default api;
