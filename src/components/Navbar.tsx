import React, { useState } from "react";
import Logo from "../assets/websitelogo1.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo}></img>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/documentManager"> Document Manager </Link>
          <Link to="/passwordManager"> Password Manager </Link>
          <Link to="/contact"> Contact Us </Link>
          <button onClick={toggleNavbar}>
          <ReorderIcon />
          </button>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/documentManager"> Document Manager </Link>
        <Link to="/passwordManager"> Password Manager </Link>
        <Link to="/contact"> Contact Us </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
