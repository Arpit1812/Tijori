import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUpForm.css";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    console.log("handlechange working");
    const { name, value } = event.target;
    setSignUpData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submission starting");
    console.log("sending data to server:", signUpData);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(signUpData),
      headers: {
        "content-type": "application/json",
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
        console.log("no error. data sent and saved");
        setError(null);
      })
      .catch((error) => {
        console.error("Error saving data:", error.message);
        setError(
          "An error occurred while saving data. Please try again later."
        );
      });
  };

  const handleCancleClick = () => {
    console.log("cancel clicked");
    setSignUpData({
      username: "",
      password: "",
      email: "",
    });
  };

  return (
    <div className="sign-up">
      <div className="heading-div">
        <h1 className="sign-up-heading"> SIGN-UP </h1>
      </div>
      <div id="sign-up-section" className="sign-up-section">
        <form id="sign-up-form" method="post" onSubmit={handleSubmit}>
          <div className="flex-container">
            <label>
              {" "}
              Username
              <input
                required
                type="text"
                name="username"
                id="username"
                value={signUpData.username}
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
                id="passowrd"
                name="password"
                value={signUpData.password}
                onChange={handleChange}
              />{" "}
            </label>
          </div>
          <div className="flex-container">
            <label>
              Email Id
              <input
                required
                type="email"
                name="email"
                id="email"
                value={signUpData.email}
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
              onClick={handleCancleClick}
            >
              Cancel
            </button>
          </div>
        </form>
        <div className="redirect">
          {error && <p className="error">{error}</p>}
          <p>
            {" "}
            Already a member? <br />{" "}
            <Link to="/login" className="redirect-link">
              {" "}
              Sign-in{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
