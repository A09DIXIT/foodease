import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full mt-5 p-10 max-h-[500px] overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src="/ice-cream.png" alt="Banner 1" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="/juices.png" alt="Banner 2" className="w-full h-auto object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroBanner;
