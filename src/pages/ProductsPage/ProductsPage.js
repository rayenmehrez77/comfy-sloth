import NavigationComponent from "../../Components/NavigationComponent/NavigationComponent";
import Product from "../../Components/Product/Product";
import "./ProductPage.scss";
import { connect } from "react-redux";
import { useState } from "react";

const ProductsPage = ({ products, currentUser }) => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="products-page">
      <NavigationComponent link="Products" />
      {currentUser ? (
        <h1 className="products-page__title">
          Welcome back, {currentUser.displayName}
        </h1>
      ) : null}
      <input
        className="products-page__input"
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="products-page__content">
        {filteredProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(ProductsPage);
