import React from "react";
import "./CartDropdown.scss";
import CustomButton from "../CustomButton/CustomButton";
import { RiArrowUpSFill } from "react-icons/ri";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      {cartItems.map((item) => {
        return <CartItem id={item.id} item={item} />;
      })}
      <CustomButton> GO TO CHECKOUT </CustomButton>
      <RiArrowUpSFill className="arrow" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
