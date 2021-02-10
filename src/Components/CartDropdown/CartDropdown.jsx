import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <CustomButton> GO TO CHECKOUT </CustomButton>
    </div>
  );
};

export default CartDropdown;
