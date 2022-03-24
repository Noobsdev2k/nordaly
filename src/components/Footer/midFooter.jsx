import React from "react";

export default function Mid() {
  return (
    <div className="footer-middle footer-middle-mrg">
      <div className="row">
        <div className="col-lg-3 col-md-3">
          <div className="social-style-3-wrap xs-center">
            <span>follow us</span>
            <div className="social-style-1">
              <a href="#">
                <i className="icon-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon-social-instagram"></i>
              </a>
              <a href="#">
                <i className="icon-social-youtube"></i>
              </a>
              <a href="#">
                <i className="icon-social-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="contact-info-wrap-2 text-center">
            <div className="footer-logo footer-logo-mrg">
              <a href="#">
                <img src="./assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
            <p>295 Madison Ave Str, Floor 25th, New York, NY 10010 , USA</p>
            <p>(+0024)-877-932-0563</p>
            <p>hello@norda.com</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="language-style-2-wrap language-style-2-right">
            <span>Language</span>
            <div className="language-style-2">
              <a href="#">ENG</a>
              <a href="#">FRA</a>
              <a href="#">GER</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
