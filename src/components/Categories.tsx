import React from "react";
import "../styles/Categories.css";
import { Link } from "react-router-dom";

function Categories({ imageUrl, name, to }) {
  return (
    <Link to={to} className="link">
      <div>
        <div className="document-types">
          <figure>
            <img src={imageUrl} alt={name} />
            <figcaption>{name}</figcaption>
          </figure>
        </div>
      </div>
    </Link>
  );
}

export default Categories;
