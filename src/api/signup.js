import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const signup = async (username, password, email) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signup`, { username, password, email });
    return response.data;
  } catch (error) {
    if (error.response) {
      return Promise.reject(new Error(error.response.data.message));
    } else if (error.request) {
      return Promise.reject(new Error('Network error'));
    } else {
      return Promise.reject(new Error('Signup failed'));
    }
  }
};