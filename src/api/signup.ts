import axios from 'axios';

// Define the API URL
const API_URL = 'http://localhost:5000';

// Define the response type from the API
interface SignupResponse {
  message: string;
  token?: string;
}

// Define the error type for better error handling
interface SignupError {
  response?: {
    data: {
      message: string;
    };
  };
  request?: any;
  message?: string;
}

// Define the signup function with TypeScript types
export const signup = async (
  username: string,
  email: string,
  password: string
): Promise<SignupResponse> => {
  try {
    // Send a POST request to the signup endpoint
    const response = await axios.post<SignupResponse>(`${API_URL}/api/auth/signup`, {
      username,
      email,
      password,
    });

    // Return the response data
    return response.data;
  } catch (error) {
    // Handle different types of errors and reject with appropriate messages
    const err = error as SignupError;

    if (err.response) {
      // Return error message from backend
      return Promise.reject(new Error(err.response.data.message));
    } else if (err.request) {
      // Handle network errors
      return Promise.reject(new Error('Network error'));
    } else {
      // Handle generic signup failures
      return Promise.reject(new Error('Signup failed'));
    }
  }
};