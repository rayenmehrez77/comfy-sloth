import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import "./Features.scss";

function Features({ products }) {
  return (
    <div className="features">
      <h1>Featured Products</h1>
      <div className="features__underline"></div>
      <div className="features__products">
        {products
          .filter((item, idx) => idx < 3)
          .map(({ id, ...otherProps }) => (
            <Product key={id} {...otherProps} />
          ))}
      </div>
      <Link to="/products">
        <CustomButton centered>All Products</CustomButton>
      </Link>
    </div>
  );
}

export default Features;