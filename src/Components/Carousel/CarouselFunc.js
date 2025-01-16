import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselFuncStyle.css";
import img1 from "../../Assets/HomePageImg/scroll-1.jpg";
import img2 from "../../Assets/HomePageImg/scroll-2.jpg";
import img3 from "../../Assets/HomePageImg/scroll-3.jpg";
import img4 from "../../Assets/HomePageImg/scroll-4.jpg";
// installed --  npm install react-slick slick-carousel

const Carousel = () => {
  // Settings for react-slick carousel
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed (in ms)
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Auto-slide every 3 seconds
    pauseOnHover: true, // Pause autoplay when the user hovers over the carousel
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="Image 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Image 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Image 3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Image 4"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        {/* <div>
          <img
            src={img5}
            alt="Image 5"
            style={{ width: "100%", height: "auto" }}
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default Carousel;
