import axios from 'axios';

export const login = async (username: string, password: string) => {
  const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
  return response.data.token; // return JWT token
};
