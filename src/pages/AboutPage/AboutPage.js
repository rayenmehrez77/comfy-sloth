import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import Story from "../../Components/Story/Story";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <div className="about-page">
      <NavigationComponent link="About" />
      <Story />
    </div>
  );
}

export default AboutPage;
