import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MedSponCarouselFuncStyle.css";
import img1 from "../../Assets/HomePageImg/MediaSponsors/Khobor_com.png";
import img2 from "../../Assets/HomePageImg/MediaSponsors/NRB24.png";
import img3 from "../../Assets/HomePageImg/MediaSponsors/WashingtonBangla.png";

const MediaSponCarousel = () => {
  // Settings for react-slick carousel
  const settings = {
    dots: false, // Disable the default dots
    infinite: true, // Infinite looping
    speed: 800, // Transition speed (in ms)
    slidesToShow: 2, // Show 5 slides at a time
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
  const images = [{ src: img1 }, { src: img2 }, { src: img3 }];

  return (
    <div className="medSpon-carousel-container">
      <div>
        <h1 id="medSpon-com-title">MEDIA SPONSORS</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="medSpon-carousel-item">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              style={{ width: "95%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MediaSponCarousel;
