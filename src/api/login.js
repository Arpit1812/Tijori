// // login.js (improved error handling)
// export const login = async (username, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, { username, password });
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       // Handle status code errors (e.g., 400, 500)
//       return Promise.reject(new Error(error.response.data.message));
//     } else if (error.request) {
//       // Handle network errors
//       return Promise.reject(new Error('Network error'));
//     } else {
//       // Handle other errors
//       return Promise.reject(new Error('Login failed'));
//     }
//   }
// };


// // src/api/login.js
// import axios from 'axios';

// const API_URL = 'http://localhost:5000';

// export const login = async (username, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/api/auth/login`, { username, password });
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       return Promise.reject(new Error(error.response.data.message));
//     } else if (error.request) {
//       return Promise.reject(new Error('Network error'));
//     } else {
//       return Promise.reject(new Error('Login failed'));
//     }
//   }
// };

import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(new Error(error.response.data.message));
    } else if (error.request) {
      return Promise.reject(new Error('Network error'));
    } else {
      return Promise.reject(new Error('Login failed'));
    }
  }
};
