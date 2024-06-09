import React from "react";
import "../styles/Services.css";
import { ServiceList } from "../helpers/ServiceList";
import ServiceItem from "./ServiceItem";

function Services() {
  return (
    <div className="services">
      <h1> SERVICES </h1>
      {ServiceList.map((item, key) => {
        return (
          <ServiceItem
            key={key}
            name={item.name}
            image={item.image}
            to={item.to}
          />
        );
      })}
    </div>
  );
}

export default Services;
