import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

function Product({ price, image, name }) {
  return (
    <article className="product">
      <Link to="/products/" className="product__searchbox">
        <BiSearch className="product__search-icon" />
      </Link>
      <img src={image} alt={name} className="product__img" />
      <div className="product__footer">
        <h4 className="product__title">{name}</h4>
        <span className="product__price">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(price)}
        </span>
      </div>
      <button className="btn">Add to Cart</button>
    </article>
  );
}

export default withRouter(Product);
