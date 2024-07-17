import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LogInForm.css";

//improved login form

const LogInForm = ({ setToken }) => {
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("submit process started");
      console.log("Sending data to server:", logInData);

      const response = await fetch("localhost/login", {
        method: "POST",
        body: JSON.stringify(logInData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        const token = data.token; // Ensure your server returns a token
        setToken(token);
        localStorage.setItem("token", token);
        console.log("Received response from server:", data);
        console.log("Data saved successfully:", data);
        navigate("/");
      } else {
        throw new Error("Network response not ok: " + response.status);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogInData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancelClick = () => {
    console.log("cancel clicked");
    setLogInData({
      username: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="log-in">
      <div className="heading-div">
        <h1 className="log-in-heading">LOG IN</h1>
      </div>
      <div id="log-in-section" className="log-in-section">
        <form id="log-in-form" method="post" onSubmit={handleSubmit}>
          <div className="flex-container">
            <label>
              Username
              <input
                required
                type="text"
                name="username"
                id="username"
                value={logInData.username}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex-container">
            <label>
              Password
              <input
                required
                type="password"
                name="password"
                id="password"
                value={logInData.password}
                onChange={handleChange}
              />
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
            Not a member? <br />
            <Link to="/signup" className="redirect-link">
              SIGN UP
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
