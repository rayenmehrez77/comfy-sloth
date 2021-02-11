import React from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

function Product({ item, addItem }) {
  const { name, price, image } = item || {};

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
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </article>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Product);
