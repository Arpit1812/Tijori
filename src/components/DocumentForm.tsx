// import React, { useState } from "react";
// import "../styles/DocumentForm.css";

// function DocumentForm({ id, onDelete }) {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = (event) => {
//     event.preventDefault(); // Prevent form submission
//     setIsSaved(true);
//     console.log(selectedFile);
//   };

//   const handleDelete = () => {
//     onDelete(id);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const inputElement = document.querySelector('.docTitle');
//     const inputConst = inputElement.value;
//     console.log('User input saved in constant:', inputConst);
//     alert(`User input: ${inputConst}`);
//     setIsSaved(true);
//   }

//   return (
//     <div className="uploadDocs">
//       <div
//         className="doc"
//         style={{
//           backgroundColor: isSaved ? "rgb(129, 177, 169)" : "#333",
//         }}
//       >
//         <form
//           id="uploadForm"
//           action="/"
//           method="POST"
//           encType="multipart/form-data"
//           onSubmit={handleSubmit} // Handle form submission here
//         >
//           <label htmlFor="title"> TITLE </label>
//           <input
//             type="text"
//             name="title"
//             id="title"
//             className="docTitle"
//             style={{
//               backgroundColor: isSaved ? "rgb(129, 177, 169)" : "#333",
//             }}
//           />

//           <input type="file" onChange={handleFileChange} />
//           <button type="submit" className="submitDoc"> 
//             Save
//           </button>
//           <button type="button" onClick={handleDelete} className="deleteDoc">
//             Delete
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default DocumentForm;


// src/components/DocumentFormPage.tsx
import React, { useState } from 'react';
import '../styles/DocumentForm.css';
import { uploadDocument } from '../api/documents';

interface DocumentFormProps {
  id: string;
  onDelete: (id: string) => void;
}

const DocumentForm: React.FC<DocumentFormProps> = ({ id, onDelete }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleUpload = () => {
    setIsSaved(true);
    console.log(selectedFile);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputElement = document.querySelector('.docTitle');
    const inputConst = inputElement.value;
    console.log('User input saved in constant:', inputConst);
    alert(User input: ${inputConst});
    setIsSaved(true);
  }



  return (
    <div className="uploadDocs">
      <div
        className="doc"
        style={{
          backgroundColor: isSaved ? 'rgb(129, 177, 169)' : '#333',
        }}
      >
        <form
          id="uploadForm"
          onSubmit={handleUpload}
          encType="multipart/form-data"
          onSubmit={handleSubmit} // Handle form submission here
        >
          <label htmlFor="title"> TITLE </label>
          <input
            type="text"
            name="title"
            id="title"
            className="docTitle"
            value={title}
            onChange={handleTitleChange}
            style={{
              backgroundColor: isSaved ? 'rgb(129, 177, 169)' : '#333',
            }}
          />

          <input type="file" onChange={handleFileChange} required />
          <button onClick={handleUpload} className="submitDoc">
            {" "}
            Save{" "}
          </button>
          <button type="button" onClick={handleDelete} className="deleteDoc">
            Delete
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default DocumentForm;
