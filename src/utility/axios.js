 import axios from 'axios';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  // baseURL: 'http://192.168.10.114:8001/', // Replace with your API base URL/
  baseURL: 'http://192.168.10.108:8000/',
  timeout: 10000, // Request timeout (in milliseconds)
  headers: {
    'Content-Type': 'application/json',
    // You can add other default headers here if needed
  },
});
 
// // Optional: Add request interceptors if needed
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Modify request configuration before sending it
//     // Example: Attach an authentication token
//     const token = localStorage.getItem('authToken'); // Retrieve token from storage
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

// Optional: Add response interceptors if needed
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle the response data
    return response.data;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
