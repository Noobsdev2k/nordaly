import React, { useState } from "react";

import { Link } from "react-router-dom";
import { headerConfig } from "./headerConfig";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="header container">
      <div className="header-top">
        <div className="logo">
          <Link to="/">
            <img src="assets/images/logo/logo-2.png" alt="logo" />
          </Link>
        </div>
        <form action="#" className="search">
          <button className="search-button">
            <i className="icon-magnifier"></i>
          </button>
          <input
            className="search-input"
            type="text"
            placeholder="Type anything & Hit enter"
          />
        </form>
        <div className="header-top-right">
          <div className="header-auth">
            <Link to="/login">
              <i className="icon-user"></i> <span>Log In / Register</span>
            </Link>
          </div>
          <div className="header-cart">
            <Link to="/" className="cart-button">
              <i className="icon-basket-loaded"></i>{" "}
              <span className="black">02</span>{" "}
              <span className="cart-total">$264.50</span>
            </Link>
          </div>
          <div className="hamburger-menu">
            <a className="hamburger-menu--btn" onClick={handleMenu}>
              <i className="icon-menu"></i>{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="header-bottom ">
        <nav className={openMenu ? "nav-menu is-show" : "nav-menu "}>
          <ul>
            {headerConfig.map(({ path, title }, index) => (
              <li key={index}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div
        onClick={handleMenu}
        className={openMenu ? "overlay is-show" : "overlay "}
      ></div>
    </header>
  );
}
