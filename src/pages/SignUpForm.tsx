import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUpForm.css";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("localhost/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Received response from server:", data);
      // Store token in localStorage
      localStorage.setItem("token", data.token);
      setError(null);
      navigate("/"); // Redirecting to home page after successful signup
    } catch (error) {
      console.error("Error saving data:", error);
      setError("An error occurred while saving data. Please try again later.");
    }
  };

  const handleCancelClick = () => {
    setSignUpData({
      username: "",
      password: "",
      email: "",
    });
    navigate("/");
  };

  return (
    <div className="sign-up">
      <div className="heading-div">
        <h1 className="sign-up-heading">SIGN-UP</h1>
      </div>
      <div id="sign-up-section" className="sign-up-section">
        <form id="sign-up-form" onSubmit={handleSubmit}>
          <div className="flex-container">
            <label>
              Username
              <input
                required
                type="text"
                name="username"
                value={signUpData.username}
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
                value={signUpData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="flex-container">
            <label>
              Email
              <input
                required
                type="email"
                name="email"
                value={signUpData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="buttons">
            <button type="submit" className="sign-up-button">
              Submit
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </form>
        <div className="redirect">
          {error && <p className="error">{error}</p>}
          <p>
            Already a member? <br />
            <Link to="/login" className="redirect-link">
              Sign-in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
