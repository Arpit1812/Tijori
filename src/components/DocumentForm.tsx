import React, { useState } from "react";
import "../styles/DocumentForm.css";

function DocumentForm({ id, onDelete }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    setIsSaved(true);
    console.log(selectedFile);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="uploadDocs">
      <div
        className="doc"
        style={{
          backgroundColor: isSaved ? "rgb(129, 177, 169)" : "#333",
        }}
      >
        <form
          id="uploadForm"
          action="/"
          method="POST"
          encType="multipart/form-data"
        >
          <label htmlFor="title"> TITLE </label>
          <input
            type="text"
            name="title"
            id="title"
            className="docTitle"
            style={{
              backgroundColor: isSaved ? "rgb(129, 177, 169)" : "#333",
            }}
          />

          <input type="file" onChange={handleFileChange} required />
          <button onClick={handleUpload} className="submitDoc">
            {" "}
            Save{" "}
          </button>
          <button type="button" onClick={handleDelete} className="deleteDoc">
            {" "}
            Delete{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default DocumentForm;
