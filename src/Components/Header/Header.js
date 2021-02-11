import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartDropdown from "../CartDropdown/CartDropdown";
import CartIcon from "../CartIcon/CartIcon";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link to="/" className="header__logo-container">
        <Logo className="header__logo" />
      </Link>
      <nav className="header__navbar">
        <ul>
          <li>
            <Link to="/" className="header__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="header__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="header__link">
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__right">
        <Link to="/cart" className="header__cart">
          <div>Cart</div>
        </Link>
        <CartIcon />
        {currentUser ? (
          <Link
            to="/signup"
            className="header__signup"
            onClick={() => auth.signOut()}
          >
            <div>Sign out</div>
            <FaUserPlus className="header__icon" />
          </Link>
        ) : (
          <Link to="/signup" className="header__signup">
            <div>Sign in</div>
            <FaUserPlus className="header__icon" />
          </Link>
        )}
      </div>{" "}
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
