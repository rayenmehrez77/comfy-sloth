import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SignInPage from "./pages/SignInPage/SignInPage";
import CartPage from "./pages/CartPage/CartPage";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { SHOP_DATA } from "./data/ShopData";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: SHOP_DATA,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // fetch("https://course-api.com/react-store-products/")
    //   .then((response) => response.json())
    //   .then((data) => this.setState({ products: data }));

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  // Unsubcribe from the current account
  componentWillUnmount() {
    this.unsubscribeFromAuth();
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
          <Route
            exact
            path="/products"
            component={() => <ProductsPage products={products} />}
          />
          <Route exact path="/cart" component={CartPage} />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/products" />
              ) : (
                <SignUpPage />
              )
            }
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/products" />
              ) : (
                <SignInPage />
              )
            }
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
