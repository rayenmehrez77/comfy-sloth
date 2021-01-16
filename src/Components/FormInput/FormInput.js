import React from "react";
import "./FormInput.scss";

function FormInput({ label, handleChange, ...otherProps }) {
  return (
    <div className="form-input">
      <label>{label}</label> <br />
      <input {...otherProps} onChange={handleChange} />
    </div>
  );
}

export default FormInput;
