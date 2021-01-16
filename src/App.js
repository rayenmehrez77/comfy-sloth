import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SignInPage from "./pages/SignInPage/SignInPage";
import CartPage from "./pages/CartPage/CartPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("https://course-api.com/react-store-products/")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage products={products} />}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
