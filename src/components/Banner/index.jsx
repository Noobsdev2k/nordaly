import React from "react";
import Slider from "react-slick";
import BannerData from "./bannerData";
import HomeBanner from "./HomeBanner";

export default function Banner() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <span className="slider-prev" {...props}>
      <i className="icon-arrow-left"></i>
    </span>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <span className="slider-next" {...props}>
      <i className="icon-arrow-right"></i>
    </span>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="container">
      <div className="slider-area">
        <Slider {...settings}>
          {BannerData.map((dt, index) => (
            <HomeBanner key={index} {...dt}></HomeBanner>
          ))}
        </Slider>
      </div>
    </div>
  );
}
