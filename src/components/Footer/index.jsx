import React from "react";
import Mid from "./midFooter";
import Top from "./topFooter";

export default function Footer() {
  return (
    <footer className="footer-area pt-85 pb-90">
      <div className="container">
        <Top />
        <Mid />
        <div className="footer-bottom copyright text-center">
          <p>
            Copyright © 2020 HasThemes |{" "}
            <a href="https://hasthemes.com/">
              Built with <span>Norda</span> by HasThemes
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
