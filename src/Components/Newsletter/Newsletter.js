import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./Newsletter.scss";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="newsletter__content">
        <h1>Join our newsletter and get 20% off</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint
          unde quaerat ratione soluta veniam provident adipisci cumque eveniet
          tempore?
        </p>
      </div>
      <form className="newsletter__form">
        <input type="email" name="email" placeholder="Enter Email" />
        <CustomButton type="submit">Subscribe</CustomButton>
      </form>
    </div>
  );
}

export default Newsletter;
