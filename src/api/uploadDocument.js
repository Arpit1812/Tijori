// src/api/upload.js -- CODE 1

// import axios from 'axios';

// const API_URL = 'http://localhost:5000'; // Replace with your backend server URL

// export const uploadDocument = async (formData) => {
//     try {
//       const response = await axios.post(`${API_URL}/api/uploadDocument`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };


// src/api/uploadDocument.js -- CODE SNIPPET 2
// import axios from 'axios';

// const API_URL = 'http://localhost:5000';

// export const uploadDocument = async (formData) => {
//   try {
//     const response = await axios.post(`${API_URL}/api/uploadDocument`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };


// src/api/upload.js -- CODE 3

// import axios from 'axios';

// export const uploadDocument = async (formData) => {
//   const token = localStorage.getItem('token');

//   try {
//     const response = await axios.post('http://localhost:5000/api/documents/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error uploading document:', error);
//     throw error;
//   }
// };


// // src/api/upload.js -- CODE 3
// import axios from 'axios';

// const API_URL = 'http://localhost:5000';

// export const uploadDocument = async (formData) => {
//   try {
//     const token = localStorage.getItem('token');
//     const response = await axios.post(`${API_URL}/api/documents/upload`, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };


// src/api/uploadDocument.js -- CODE SNIPPET 4
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const uploadDocument = async (formData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/api/documents/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
