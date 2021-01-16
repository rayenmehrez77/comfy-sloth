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
import { auth } from "./firebase/firebase.utils";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
    fetch("https://course-api.com/react-store-products/")
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  }

  // Unsubcribe from the current account
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { products, currentUser } = this.state;
    return (
      <>
        <Header currentUser={currentUser} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage products={products} />}
          />
          <Route exact path="/about" component={AboutPage} />
          <Route
            exact
            path="/products"
            component={() => <ProductsPage products={products} />}
          />
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
