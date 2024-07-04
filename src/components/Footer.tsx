import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconButton
          color="inherit"
          component={Link}
          to="https://www.instagram.com/"
          target="_blank" // Open in a new tab
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          to="https://x.com/?lang=en"
          target="_blank" // Open in a new tab
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          to="https://www.facebook.com/"
          target="_blank" // Open in a new tab
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          component={Link}
          to="https://www.linkedin.com/"
          target="_blank" // Open in a new tab
        >
          <LinkedInIcon />
        </IconButton>
      </div>
      <p> &copy; 2024 tijori</p>
    </div>
  );
}

export default Footer;
