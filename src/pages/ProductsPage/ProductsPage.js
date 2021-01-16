import React, { useEffect, useState } from "react";
import FormInput from "../../Components/FormInput/FormInput";
import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import Product from "../../Components/Product/Product";
import "./ProductPage.scss";

function ProductsPage({ products }) {
  // const { loading, setLoading } = useState(false);
  // const { data, setData } = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   setData(products);
  // }, []);

  // if (loading) {
  //   <div>Loading</div>;
  // }

  return (
    <div className="products-page">
      <NavigationComponent link="Products" />
      <input
        className="products-page__input"
        type="text"
        placeholder="Search..."
      />
      <div className="products-page__content">
        {products.map(({ id, ...otherProps }) => {
          return <Product key={id} {...otherProps} />;
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
