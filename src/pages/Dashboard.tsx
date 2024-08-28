import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/documents/my-documents', {
          headers: { Authorization: `Bearer ${user}` },
        });
        setDocuments(response.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    if (user) {
      fetchDocuments();
    } else {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <h2>Your Documents</h2>
      {documents.length > 0 ? (
        <ul>
          {documents.map((doc: any) => (
            <li key={doc._id}>{doc.filename}</li>
          ))}
        </ul>
      ) : (
        <p>No documents found</p>
      )}
    </div>
  );
};

export default Dashboard;
