import React from "react";
import "./cartIcon.scss";
import { FiShoppingCart } from "react-icons/fi";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <FiShoppingCart className="cart-icon__icon" />
      <span>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
