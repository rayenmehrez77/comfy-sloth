import React from "react";
import "./CartItem.scss";

const CartItem = ({ item: { name, image, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item__img" />
      <div className="cart-item__content">
        <span className="name">{name.toUpperCase()}</span>
        <span className="price">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(price)}{" "}
          x {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
