import React, { useState } from "react";
import Logo from "../assets/contact.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/Contact.css";

function Contact() {
  const [feedback, setFeedback] = useState("");

  //handling chnage in the feedback option
  const handleFeedbackChange = (event) => {
    console.log("handling feedback");
    setFeedback(event.target.value);
  };

  //submitting feedback to backend
  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    console.log("submission starting");
    console.log("sending data to server:", feedback);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ feedback }),
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
        alert("feedback submitted successfully!");
        setFeedback("");
      })
      .catch((error) => {
        console.error("Error saving data:", error.message);
        alert("Failed to submit feedback. Please try again.");
      });
  };

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
            value={feedback}
            onChange={handleFeedbackChange}
          ></textarea>
          <button type="submit" onClick={handleFeedbackSubmit}>
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
