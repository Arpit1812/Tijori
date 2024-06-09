import React from "react";
import { InfoList } from "../helpers/InfoList";
import InfoItem from "../components/InfoItem";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <h1> ABOUT US 
        
      </h1>
      <div className="about-div">
        {InfoList.map((item, key) => {
          return (
            <InfoItem
              key={key}
              image={item.image}
              name={item.name}
              caption={item.caption}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;
