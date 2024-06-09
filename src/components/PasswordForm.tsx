import React, { useState } from "react";
import "../styles/PasswordForm.css";

function PasswordForm({ id, onDelete }) {
  const [formData, setFormData] = useState({
    title: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("handlechange working");
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    console.log("handle submit start");

    event.preventDefault();

    console.log("Sending data to server:", formData);

    //send data to server
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("network response not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received response from server:", data);
        console.log("Data saved successfully:", data);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  const [isSaved, setIsSaved] = useState(false);
  const [isEdit, setIsEdit] = useState(true);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleSave = () => {
    console.log("save start");
    setIsSaved(true);
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
    setIsSaved(false);
  };

  return (
    <div>
      <div className="container" id="container">
        <div
          className="box"
          id="box"
          style={{ backgroundColor: isSaved ? "rgb(129, 177, 169)" : "#333" }}
        >
          <form className="form2" id="form2" onSubmit={handleSubmit}>
            <label htmlFor="title" className="info">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="info"
              autoComplete="off"
              style={{
                backgroundColor: isSaved ? "rgb(129, 177, 169)" : "#333",
              }}
              readOnly={!isEdit || isSaved}
            />
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="info"
              autoComplete="off"
              style={{
                backgroundColor: isSaved ? "rgb(129, 177, 169)" : "#333",
              }}
              readOnly={!isEdit || isSaved}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="off"
              className="info"
              style={{
                backgroundColor: isSaved ? "rgb(129, 177, 169)" : "#333",
              }}
              readOnly={!isEdit || isSaved}
            />
            {isSaved ? (
              <div>
                <button className="button2" type="button" onClick={handleEdit}>
                  Edit
                </button>
                <button
                  className="button3"
                  type="button"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            ) : (
              <button className="button1" type="submit" onClick={handleSave}>
                Save
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordForm;
