import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogle }) {
  return (
    <button className={`${isGoogle ? "is-google" : "custom-button"}`}>
      {children}
    </button>
  );
}

export default CustomButton;
