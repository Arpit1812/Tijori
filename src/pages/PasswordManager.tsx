import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import PasswordForm from "../components/PasswordForm";
import "../styles/PasswordManager.css";

function PasswordManager() {
  const [forms, setForms] = useState([{ id: 1 }]);

  const handleAddForm = () => {
    console.log("form length", forms.length);
    const newForm = {
      id: forms.length + 1,
    };
    setForms([...forms, newForm]);
  };

  const handleDeleteForm = (id) => {
    let updatedForms = forms.filter((form) => form.id !== id);
    console.log("id of deleted form", id);
    if (updatedForms.length === 0) {
      // If all forms are deleted, add a new form
      updatedForms = [{ id: forms.length + 1 }];
    }
    setForms(updatedForms);
  };

  return (
    <div>
      <div className="container" id="container">
        <h3> Password Manager </h3>
      </div>
      <div className="newFormButton">
        <button type="button" onClick={handleAddForm}>
          <AddIcon fontSize="large" className="add-button" />
        </button>
      </div>
      <div className="newForm">
        {forms.map((form) => (
          <PasswordForm
            key={form.id}
            id={form.id}
            onDelete={handleDeleteForm}
          />
        ))}
      </div>
    </div>
  );
}

export default PasswordManager;
