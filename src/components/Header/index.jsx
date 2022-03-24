import React from "react";
import Bottom from "./bottomHeader";
import Top from "./topHeader";

export default function Header() {
  return (
    <header className="header-area">
      <div className="container">
        <div className="header-large-device">
          <Top />
          <Bottom />
        </div>
        <div className="header-small-device small-device-ptb-1">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="mobile-logo">
                <a href="index.html">
                  <img alt="" src="assets/images/logo/logo.png" />
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="header-action header-action-flex">
                <div className="same-style-2">
                  <a href="login-register.html">
                    <i className="icon-user"></i>
                  </a>
                </div>
                <div className="same-style-2 header-cart">
                  <a className="cart-active" href="#">
                    <i className="icon-basket-loaded"></i>
                    <span className="pro-count black">02</span>
                  </a>
                </div>
                <div className="same-style-2 main-menu-icon">
                  <a className="mobile-header-button-active" href="#">
                    <i className="icon-menu"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
