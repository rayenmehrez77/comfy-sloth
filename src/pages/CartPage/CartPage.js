import React from "react";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import "./CartPage.scss";

function CartPage() {
  return (
    <div className="cart-page">
      <NavigationComponent link="Cart" />
      <h1>Cart page</h1>
    </div>
  );
}

export default CartPage;
