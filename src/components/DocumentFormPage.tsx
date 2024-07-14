//src/components/DocumentFormPage.tsx == CODE SNIPPET 2

// import React, { useState } from "react";
// import DocumentForm from "./DocumentForm";
// import AddIcon from "@mui/icons-material/Add";
// import "../styles/DocumentFormPage.css";

// function DocumentFormPage() {
//   const [file, setNewFile] = useState([{ id: 1 }]);

//   const handleAddFile = () => {
//     const newFile = { id: file.length + 1 };
//     setNewFile([...file, newFile]);
//   };

//   const handleDelete = (id) => {
//     let updatedFile = file.filter((file) => file.id !== id);
//     if (updatedFile.length === 0) {
//       updatedFile = [{ id: file.length + 1 }];
//     }
//     setNewFile(updatedFile);
//   };

//   return (
//     <div className="documentForm">
//       <div className="heading">
//         <h3> Upload Documents </h3>
//         </div>
//         <div className="addDoc">
//         <button type="button" onClick={handleAddFile} className="addDocButton">
//           <AddIcon fontSize="large" className="add-button" />
//         </button>
//       </div>
//       <div className="newDoc">
//         {file.map((file) => (
//           <DocumentForm key={file.id} id={file.id} onDelete={handleDelete} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DocumentFormPage;




// src/components/DocumentFormPage.tsx == CODE SNIPPET 2

// import React, { useState } from 'react';
// import { uploadDocument } from '../api/uploadDocument';
// import AddIcon from "@mui/icons-material/Add";
// import "../styles/DocumentFormPage.css";

// const DocumentFormPage: React.FC<{ id: number; onDelete: (id: number) => void }> = ({ id, onDelete }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [title, setTitle] = useState('');

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (selectedFile && title) {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('file', selectedFile);

//       try {
//         await uploadDocument(formData);
//         alert('Document uploaded successfully!');
//       } catch (error) {
//         console.error('Upload failed:', error);
//         alert('Failed to upload document.');
//       }
//     }
//   };

//   return (
//     <div className="documentForm">
//       <form onSubmit={handleUpload}>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <input type="file" onChange={handleFileChange} required />
//         <button type="submit">Save</button>
//         <button type="button" onClick={() => onDelete(id)}>Delete</button>
//       </form>
//     </div>
//   );
// };

// export default DocumentFormPage;



// src/components/DocumentFormPage.tsx == CODE SNIPPET 2

// import React, { useState } from 'react';
// import { uploadDocument } from '../api/uploadDocument';

// const DocumentFormPage: React.FC<{ id: number; onDelete: (id: number) => void }> = ({ id, onDelete }) => {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [title, setTitle] = useState('');

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setSelectedFile(event.target.files[0]);
//     }
//   };

//   const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (selectedFile && title) {
//       const formData = new FormData();
//       formData.append('title', title);
//       formData.append('file', selectedFile);

//       try {
//         await uploadDocument(formData);
//         alert('Document uploaded successfully!');
//       } catch (error) {
//         console.error('Upload failed:', error);
//         alert('Failed to upload document.');
//       }
//     }
//   };

//   return (
//     <div className="uploadDocs">
//       <form onSubmit={handleUpload}>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <input type="file" onChange={handleFileChange} required />
//         <button type="submit">Save</button>
//         <button type="button" onClick={() => onDelete(id)}>Delete</button>
//       </form>
//     </div>
//   );
// };

// export default DocumentFormPage;


import React, { useState } from 'react';
import axios from 'axios';

const DocumentFormPage: React.FC<{ id: number; onDelete: (id: number) => void }> = ({ id, onDelete }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedFile && title) {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/documents/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Document uploaded successfully!');
      } catch (error) {
        console.error('Upload failed:', error);
        alert('Failed to upload document.');
      }
    }
  };

  return (
    <div className="uploadDocs">
      <form onSubmit={handleUpload}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Save</button>
        <button type="button" onClick={() => onDelete(id)}>Delete</button>
      </form>
    </div>
  );
};

export default DocumentFormPage;
