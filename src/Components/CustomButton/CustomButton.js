import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, inverted, isGoogleSignIn, ...otherProps }) {
  return (
    <button
      className={`${inverted ? "inverted" : null} ${
        isGoogleSignIn ? "is-google" : "custom-button"
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
