import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MedPatCarouselFuncStyle.css";
import img1 from "../../Assets/HomePageImg/MediaPartners/ATN_Bangla.png";
import img2 from "../../Assets/HomePageImg/MediaPartners/KhaborDotCom.png";
import img3 from "../../Assets/HomePageImg/MediaPartners/Prothon_Alo-1.png";
import img4 from "../../Assets/HomePageImg/MediaPartners/RTV-bangla.png";
import img5 from "../../Assets/HomePageImg/MediaPartners/ATN_News.png";
import img6 from "../../Assets/HomePageImg/MediaPartners/Somoy_TV_logo.png";
import img7 from "../../Assets/HomePageImg/MediaPartners/binodon_bichitra.jpg";
import img8 from "../../Assets/HomePageImg/MediaPartners/Prothon_Alo.png";
import img9 from "../../Assets/HomePageImg/MediaPartners/Sangbad_Protidin.png";
import img10 from "../../Assets/HomePageImg/MediaPartners/amader_somoy.png";
import img11 from "../../Assets/HomePageImg/MediaPartners/bangladesh_protidin.jpg";
import img12 from "../../Assets/HomePageImg/MediaPartners/channel-I.png";
import img13 from "../../Assets/HomePageImg/MediaPartners/myTv_bangla.png";
import img14 from "../../Assets/HomePageImg/MediaPartners/nobo_jug.png";

const MediaPatCarousel = () => {
  // Settings for react-slick carousel
  const settings = {
    dots: false, // Disable the default dots
    infinite: true, // Infinite looping
    speed: 800, // Transition speed (in ms)
    slidesToShow: 5, // Show 5 slides at a time
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
    { src: img7 },
    { src: img8 },
    { src: img9 },
    { src: img10 },
    { src: img11 },
    { src: img12 },
    { src: img13 },
    { src: img14 },
  ];

  return (
    <div className="medPat-carousel-container">
      <div>
        <h1 id="medPat-com-title">MEDIA PARTNERS</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="medPat-carousel-item">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              style={{ width: "95%", height: "auto" }}
            />
            <div className="medPat-appt-title">{image.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MediaPatCarousel;
