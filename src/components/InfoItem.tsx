import React from "react";
import "../styles/InfoItem.css";

function InfoItem({ image, name, caption }) {
  return (
    <div className="website-info-section">
      <div className="info-div">
        <div className="info">
          <figure>
            <img src={image} alt={name} />
            <figcaption>{name}</figcaption>
            <p>{caption}</p>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
