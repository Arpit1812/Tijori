import React from "react";
import "../styles/ServiceItem.css";
import { Link } from "react-router-dom";

function ServiceItem({ name, image, to }) {
  return (
    <Link to={to} className="link">
      <div className="service">
        <figure>
          <img src={image} />
          <figcaption>{name}</figcaption>
        </figure>
      </div>
    </Link>
  );
}

export default ServiceItem;
