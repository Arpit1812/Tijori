import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LogInForm.css";

const LogInForm = () => {
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("handlechange working");
    const { name, value } = event.target;
    setLogInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit process started");
    alert(`${logInData.username} ${logInData.password}`);
    console.log("Sending data to server:", logInData);

    //send data to server
    fetch("", {
      method: "POST",
      body: JSON.stringify(logInData),
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

  const handleCancelClick = () => {
    console.log("cancel clicked");
    // Hide the form or perform any other desired action
    setLogInData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="log-in">
      <div className="heading-div">
        <h1 className="log-in-heading"> LOG IN </h1>
      </div>
      <div id="log-in-section" className="log-in-section">
        <form id="log-in-form" method="post" onSubmit={handleSubmit}>
          <div className="flex-container">
            <label>
              {" "}
              Username
              <input
                required
                type="text"
                name="username"
                id="username"
                value={logInData.username}
                onChange={handleChange}
              />{" "}
            </label>
          </div>
          <div className="flex-container">
            <label>
              {" "}
              Password
              <input
                required
                type="password"
                name="password"
                id="password"
                value={logInData.password}
                onChange={handleChange}
              />{" "}
            </label>
          </div>
          <div className="buttons">
            <button
              type="submit"
              className="sign-up-button"
              id="sign-up-button"
            >
              Submit
            </button>
            <button
              type="button"
              className="cancel-button"
              id="cancel-button"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </form>
        <div className="redirect">
          <p>
            {" "}
            Not a member? <br />{" "}
            <Link to="/signup" className="redirect-link">
              {" "}
              SIGN UP{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
