import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./StngComCarouselFuncStyle.css";
import img1 from "../../Assets/HomePageImg/StngCom/Seminar.jpg";
import img2 from "../../Assets/HomePageImg/StngCom/Social_networking.jpg";
import img3 from "../../Assets/HomePageImg/StngCom/alumni.jpg";
import img4 from "../../Assets/HomePageImg/StngCom/award_guest.jpg";
import img5 from "../../Assets/HomePageImg/StngCom/bangladesh_liaison.jpg";
import img6 from "../../Assets/HomePageImg/StngCom/budget_finance.jpg";
import img7 from "../../Assets/HomePageImg/StngCom/business_investment.jpg";
import img8 from "../../Assets/HomePageImg/StngCom/const_review.jpg";
import img9 from "../../Assets/HomePageImg/StngCom/convention_liaison.jpg";
import img10 from "../../Assets/HomePageImg/StngCom/convention_review.jpg";
import img11 from "../../Assets/HomePageImg/StngCom/culture.jpg";
import img12 from "../../Assets/HomePageImg/StngCom/executive_logistic.jpg";
import img13 from "../../Assets/HomePageImg/StngCom/fundraising.jpg";
import img14 from "../../Assets/HomePageImg/StngCom/goodwill_promotion.jpg";
import img15 from "../../Assets/HomePageImg/StngCom/health_wellness.jpg";
import img16 from "../../Assets/HomePageImg/StngCom/legal.jpg";
import img17 from "../../Assets/HomePageImg/StngCom/mainstream_liaison.jpg";
import img18 from "../../Assets/HomePageImg/StngCom/media_pub_awareness.jpg";
import img19 from "../../Assets/HomePageImg/StngCom/membership_veri.jpg";
import img20 from "../../Assets/HomePageImg/StngCom/newsletter.jpg";
import img21 from "../../Assets/HomePageImg/StngCom/scholarship.jpg";
import img22 from "../../Assets/HomePageImg/StngCom/unification.jpg";
import img23 from "../../Assets/HomePageImg/StngCom/women_empower.jpg";
import img24 from "../../Assets/HomePageImg/StngCom/youth_foram.jpg";

const StngComCarousel = () => {
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
    { src: img1, title: "TBD" },
    { src: img2, title: "Syed M. Hossain Babu" },
    { src: img3, title: "Mohammad Kabir Kiron" },
    { src: img4, title: "Zakaria Chowdhury" },
    { src: img5, title: "Rahim Nehal" },
    { src: img6, title: "Lotifur Reza Tushar" },
    { src: img7, title: "Mannan Abdul" },
    { src: img8, title: "Atiquer Rahman" },
    { src: img9, title: "Khaled Hossain" },
    { src: img10, title: "Zakir Khan" },
    { src: img11, title: "Quazi Moshhurul Huda" },
    { src: img12, title: "Executive Secretary" },
    { src: img13, title: "Lotifur Reza Tushar" },
    { src: img14, title: "Abul Ibrahim" },
    { src: img15, title: "Dr. Abdul Baset Khan" },
    { src: img16, title: "Zahid Hossain" },
    { src: img17, title: "Dewan Jamir Polash" },
    { src: img18, title: "Executive Secretary" },
    { src: img19, title: "Bedarul Islam Babla" },
    { src: img20, title: "Monirul Islam Moni" },
    { src: img21, title: "Zakaria Chowdhury" },
    { src: img22, title: "Bedarul Islam Babla" },
    { src: img23, title: "Shahida Hai" },
    { src: img24, title: "Aminul Zilani Collins" },
  ];

  return (
    <div className="stng-carousel-container">
      <div>
        <h1 id="stng-com-title">STANDING COMMITTEE</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="stng-carousel-item">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              style={{ width: "95%", height: "auto" }}
            />
            <div className="stng-appt-title">{image.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StngComCarousel;
