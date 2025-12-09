import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8765/api', // Base URL từ Postman của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: Tự động gắn token vào header nếu có (dùng cho các request sau này)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;