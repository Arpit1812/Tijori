import React, { useState } from "react";
import Logo from "../assets/contact.png";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/Contact.css";

function Contact() {
  const [feedback, setFeedback] = useState("");

  //used to tell the user if the feedback was successfully submitted or not
  const [confirmation, setConfirmation] = useState<string | null>(null);

  //to endure the feedback box isn't empty
  const [empty, setEmpty] = useState("");

  //handling change in the feedback option
  const handleFeedbackChange = (event) => {
    console.log("handling feedback");
    setFeedback(event.target.value);
  };

  //submitting feedback to backend
  const handleFeedbackSubmit = (event) => {
    event.preventDefault();

    if (!feedback.trim()) {
      setEmpty("Please enter feedback!");
      return;
    }
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
        setConfirmation("Thank you for your feedback!");
        setEmpty("");
        setFeedback("");
      })
      .catch((error) => {
        console.error("Error saving data:", error.message);
        setConfirmation("Failed to submit. Please try again");
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
          {empty && <p className="empty-message">{empty}</p>}
          <button type="submit" onClick={handleFeedbackSubmit}>
            {" "}
            Submit{" "}
          </button>
        </div>
        <div className="confirmation">
          {confirmation && (
            <p className="confirmation-message">{confirmation}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
