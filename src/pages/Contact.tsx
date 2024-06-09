import React from "react";
import Logo from "../assets/contact.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <div className="email">
          <EmailIcon />
          <p> tijorisupport@gmail.com </p>
        </div>
        <div className="phone">
          <PhoneIcon></PhoneIcon>
          <p> +9155558886 </p>
        </div>
        <div className="feedback">
          <h5> Feedback </h5>
          <textarea
            rows={4}
            cols={40}
            id="feedbackArea"
            placeholder="Feel free to share your opinions..."
          ></textarea>
          <button> Submit </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
