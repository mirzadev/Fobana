import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SponsorsCarouselFuncStyle.css";
import img1 from "../../Assets/HomePageImg/sponsors/A1_Tours_Travel.png";
import img2 from "../../Assets/HomePageImg/sponsors/Design_Consulting.png";
import img3 from "../../Assets/HomePageImg/sponsors/Mexam_Rest_Eqpt.png";
import img4 from "../../Assets/HomePageImg/sponsors/AI_Tours.png";
import img5 from "../../Assets/HomePageImg/sponsors/Ruma_law.png";
import img6 from "../../Assets/HomePageImg/sponsors/Taptap_Send.png";

const SponsorsCarousel = () => {
  // Settings for react-slick carousel
  const settings = {
    dots: false, // Disable the default dots
    infinite: true, // Infinite looping
    speed: 800, // Transition speed (in ms)
    slidesToShow: 3, // Show 5 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Auto-slide every 5 seconds
    pauseOnHover: true, // Pause autoplay when the user hovers over the carousel
    prevArrow: (
      <div className="stng-slick-arrow stng-slick-prev">
        {/* <div>&lt;</div> Left arrow symbol */}
      </div>
    ),
    nextArrow: (
      <div className="stng-slick-arrow stng-slick-next">
        {/* <span>&gt;</span> Right arrow symbol */}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // iPhone screens
        settings: {
          slidesToShow: 1, // Show only 1 slide at a time on smaller screens
          autoplaySpeed: 3000, // Speed up autoplay for better experience on mobile
        },
      },
    ],
  };

  // List of images and titles
  const images = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
  ];

  return (
    <div className="sponsors-carousel-container">
      <div>
        <h1 id="sponsors-com-title">SPONSORS</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="sponsors-carousel-item">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              style={{ width: "95%", height: "auto" }}
            />
            <div className="sponsors-appt-title">{image.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SponsorsCarousel;
