import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component.js";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component.js";

const DefaultLayout = (props) => {
  return (
    <div>
      <Navbar />
      <HeroCarousal />
      {props.children}
    </div>
  );
};

export default DefaultLayout;
