// LogoutButton.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogoutButton.css";

const LogoutButton = () => {
 
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="logoutButton">
      Logout
    </button>
  );
};

export default LogoutButton;
