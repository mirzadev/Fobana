import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MedFrdCarouselFuncStyle.css";
import img1 from "../../Assets/HomePageImg/MediaFriends/awaz_BD.png";
import img2 from "../../Assets/HomePageImg/MediaFriends/gonomanusher_awaz.png";
import img3 from "../../Assets/HomePageImg/MediaFriends/sotodol.png";

const MediaFriendsCarousel = () => {
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
      <div className="medFrd-slick-arrow medFrd-slick-prev">
        {/* <div>&lt;</div> Left arrow symbol */}
      </div>
    ),
    nextArrow: (
      <div className="medFrd-slick-arrow medFrd-slick-next">
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
    <div className="medFrd-carousel-container">
      <div>
        <h1 id="medFrd-com-title">MEDIA FRIENDS</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="medFrd-carousel-item">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              style={{ width: "95%", height: "auto" }}
            />
            <div className="medFrd-appt-title">{image.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MediaFriendsCarousel;
