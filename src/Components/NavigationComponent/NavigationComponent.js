import React from "react";
import { Link } from "react-router-dom";
import "./NavigationComponent.scss";

function NavigationComponent({ link }) {
  return (
    <div className="navigation-component">
      <Link to="/" className="navigation-component__link">
        Home{" "}
      </Link>
      <div>/</div>
      <Link to={`/${link}`} className="navigation-component__link active">
        {link}
      </Link>
    </div>
  );
}

export default NavigationComponent;
