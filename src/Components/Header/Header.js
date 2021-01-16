import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { FaUserPlus } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

function Header({ currentUser }) {
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
          <FiShoppingCart className="header__icon" />
          <div className="header__basket">
            <span>0</span>
          </div>
        </Link>
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
      </div>
    </div>
  );
}

export default Header;
