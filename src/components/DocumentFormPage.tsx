import React, { useState } from "react";
import DocumentForm from "./DocumentForm";
import AddIcon from "@mui/icons-material/Add";
import "../styles/DocumentFormPage.css";

function DocumentFormPage() {
  const [file, setNewFile] = useState([{ id: 1 }]);

  const handleAddFile = () => {
    const newFile = { id: file.length + 1 };
    setNewFile([...file, newFile]);
  };

  const handleDelete = (id) => {
    let updatedFile = file.filter((file) => file.id !== id);
    if (updatedFile.length === 0) {
      updatedFile = [{ id: file.length + 1 }];
    }
    setNewFile(updatedFile);
  };

  return (
    <div className="documentForm">
      <div className="heading">
        <h3> Upload Documents </h3>
        </div>
        <div className="addDoc">
        <button type="button" onClick={handleAddFile} className="addDocButton">
          <AddIcon fontSize="large" className="add-button" />
        </button>
      </div>
      <div className="newDoc">
        {file.map((file) => (
          <DocumentForm key={file.id} id={file.id} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default DocumentFormPage;
