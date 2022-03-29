import React from "react";
import { Link } from "react-router-dom";

export default function HomeBanner(props) {
  const { background, title, description } = props;

  return (
    <div
      className="hero-slider"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-slider-content">
        <h1 className="hero-slider-content--title">
          <span>{title.text}</span> {title.text2} <br />
          {title.text3}
        </h1>
        <p className="hero-slider-content--description">{description}</p>
        <div className="hero-slider-content--btn">
          <Link to="/shop" className="btn-shop">
            explore now <i className="icon-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
