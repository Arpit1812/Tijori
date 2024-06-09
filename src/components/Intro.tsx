import React from "react";
import { Link } from "react-router-dom";
import "../styles/Intro.css";

function Intro() {
  return (
    <div className="headerContainer">
      <div className="header">
      <h1>TIJORI</h1>
      <h2>Your digital locker</h2>
      <Link to="/signup">
        <button> GET STARTED! </button>
      </Link>
      <Link to="/login">
        <button> LOG-IN </button>
      </Link>
      </div>
    </div>
  );
}

export default Intro;
