import React, { useState } from "react";
import "../styles/Home.css";
import Intro from "../components/Intro";
import About from "../components/About";
import Services from "../components/Services";

function Home() {
  return (
    <div className="homePage">
      <Intro />
      <About />
      <Services />
    </div>
  );
}

export default Home;
