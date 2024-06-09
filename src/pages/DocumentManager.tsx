import React from "react";
import "../styles/DocumentManager.css";
import Categories from "../components/Categories";
import eduPhoto from "../assets/education.jpg";
import identity from "../assets/identity.jpg";
import bankPhoto from "../assets/banking.jpg";

function DocumentManager() {
  return (
    <div className="documents">
      <Categories imageUrl={eduPhoto} name={"Education"} to="/documentForm" />
      <Categories imageUrl={identity} name={"Identity Cards"} to="/documentForm" />
      <Categories imageUrl={bankPhoto} name={"Banking"} to="/documentForm" />
    </div>
  );
}

export default DocumentManager;
