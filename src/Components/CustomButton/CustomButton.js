import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, isGoogleSignIn }) {
  return (
    <button className={`${isGoogleSignIn ? "is-google" : "custom-button"}`}>
      {children}
    </button>
  );
}

export default CustomButton;
