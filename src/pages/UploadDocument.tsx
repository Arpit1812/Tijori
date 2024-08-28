import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; // Assuming you have an AuthContext for managing user state

const UploadDocument: React.FC = () => {
  const { user } = useAuth(); // Get user object from AuthContext, which contains the token
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) {
      setMessage('Please provide both a file and a title.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      // Get the token from localStorage (or however you're storing the JWT token)
      const token = localStorage.getItem('token'); 

      await axios.post('http://localhost:5000/api/documents/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,  // Include the JWT token in the request headers
          'Content-Type': 'multipart/form-data', // Indicate the type of data being sent
        },
      });
      setMessage('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading document:', error);
      setMessage('Failed to upload file');
    }
  };

  return (
    <div>
      <h2>Upload Document</h2>
      <form onSubmit={handleUpload}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default UploadDocument;
