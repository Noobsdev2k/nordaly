import React from "react";

export default function Top() {
  return (
    <div className="header-top header-top-ptb-1 border-bottom-1">
      <div className="row align-items-center">
        <div className="col-xl-4 col-lg-5">
          <div className="search-wrap-2">
            <form action="#">
              <input placeholder="Type anything & Hit enter" type="text" />
              <button className="button-search">
                <i className="icon-magnifier"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="col-xl-4 col-lg-2">
          <div className="logo text-center">
            <a href="index.html">
              <img src="assets/images/logo/logo-2.png" alt="logo" />
            </a>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="header-top-right">
            <div className="header-login-regi">
              <a href="login-register.html">
                <i className="icon-user"></i> Log In / Register
              </a>
            </div>
            <div className="header-cart-2">
              <a className="cart-active" href="#">
                <i className="icon-basket-loaded"></i>{" "}
                <span className="black">02</span> $264.50
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
