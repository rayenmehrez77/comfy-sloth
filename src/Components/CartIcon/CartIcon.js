import React from "react";
import "./cartIcon.scss";
import { FiShoppingCart } from "react-icons/fi";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <FiShoppingCart className="cart-icon__icon" />
      <span>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
