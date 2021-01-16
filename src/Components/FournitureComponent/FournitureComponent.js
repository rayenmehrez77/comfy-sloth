import React from "react";
import "./FournitureComponent.scss";

function FournitureComponent({ Icon, title, desc }) {
  return (
    <div className="fourniture-component">
      <Icon className="fourniture-component__icon" />
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default FournitureComponent;
