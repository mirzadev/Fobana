/*
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ExComCarouselFuncStyle.css";
import img1 from "../../Assets/HomePageImg/ExecCom/Aminul-Zillany-Collins-General-Secretary-150x150.jpg";
import img2 from "../../Assets/HomePageImg/ExecCom/Atiq-150x150.jpg";
import img3 from "../../Assets/HomePageImg/ExecCom/Bedarul-Islam-Babla-150x150.jpg";
import img4 from "../../Assets/HomePageImg/ExecCom/Dewan-Moniruzzaman--150x150.jpg";
import img5 from "../../Assets/HomePageImg/ExecCom/Hafizur-Rahman-Montreal-150x150.jpg";
import img6 from "../../Assets/HomePageImg/ExecCom/M_Hossain_Babu_BALA-150x150.jpeg";
import img7 from "../../Assets/HomePageImg/ExecCom/Rahim-Nehal-outstanding-150x150.jpg";
import img8 from "../../Assets/HomePageImg/ExecCom/Shafiqul-Alam-Borkat-150x150.jpg";
import img9 from "../../Assets/HomePageImg/ExecCom/Shahida-Shikdar-Hai2-150x150.jpg";
import img10 from "../../Assets/HomePageImg/ExecCom/Shibbir-Ahmed-150x150.jpg";
import img11 from "../../Assets/HomePageImg/ExecCom/Zahid_Hossain_CA-150x150.jpeg";
import img12 from "../../Assets/HomePageImg/ExecCom/abu-liaquat_atlanta-150x150.jpg";
import img13 from "../../Assets/HomePageImg/ExecCom/abul-Ibrahim-150x150.jpg";
import img14 from "../../Assets/HomePageImg/ExecCom/anisur-rahman-150x150.jpg";
import img15 from "../../Assets/HomePageImg/ExecCom/atlanta_cultural-150x150.jpg";
import img16 from "../../Assets/HomePageImg/ExecCom/huda-150x150.jpg";
import img17 from "../../Assets/HomePageImg/ExecCom/khaled-hussain-150x150.jpg";
import img18 from "../../Assets/HomePageImg/ExecCom/mannan-abdul-150x150.jpg";
import img19 from "../../Assets/HomePageImg/ExecCom/mohammed_ali-khan-150x150.jpg";
import img20 from "../../Assets/HomePageImg/ExecCom/sadek_khan-150x150.jpeg";
import img21 from "../../Assets/HomePageImg/ExecCom/selim-Zuberi-150x150.jpg";
import img22 from "../../Assets/HomePageImg/ExecCom/shah-bahauddin-shishir-150x150.jpg";
import img23 from "../../Assets/HomePageImg/ExecCom/yeahia-ahmed-150x150.jpg";
import img24 from "../../Assets/HomePageImg/ExecCom/zak-150x150.jpg";
import img25 from "../../Assets/HomePageImg/ExecCom/ziaul-haque-zia-150x150.jpg";

// installed --  npm install react-slick slick-carousel

const ExecComCarousel = () => {
  // Settings for react-slick carousel
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 800, // Transition speed (in ms)
    slidesToShow: 5, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Auto-slide every 3 seconds
    pauseOnHover: true, // Pause autoplay when the user hovers over the carousel
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img
            src={img1}
            alt="Image 1"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img2}
            alt="Image 2"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img3}
            alt="Image 3"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img4}
            alt="Image 4"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img5}
            alt="Image 5"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img6}
            alt="Image 6"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img7}
            alt="Image 7"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img8}
            alt="Image 8"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img9}
            alt="Image 9"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img10}
            alt="Image 10"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img11}
            alt="Image 11"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img12}
            alt="Image 12"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img13}
            alt="Image 13"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img14}
            alt="Image 14"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img15}
            alt="Image 15"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img16}
            alt="Image 16"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img17}
            alt="Image 17"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img18}
            alt="Image 18"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img19}
            alt="Image 19"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img20}
            alt="Image 20"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img21}
            alt="Image 21"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img22}
            alt="Image 22"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img23}
            alt="Image 23"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img24}
            alt="Image 24"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src={img25}
            alt="Image 25"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
};


*/
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ExComCarouselFuncStyle.css";
import img1 from "../../Assets/HomePageImg/ExecCom/Aminul-Zillany-Collins-General-Secretary-150x150.jpg";
import img2 from "../../Assets/HomePageImg/ExecCom/Atiq-150x150.jpg";
import img3 from "../../Assets/HomePageImg/ExecCom/Bedarul-Islam-Babla-150x150.jpg";
import img4 from "../../Assets/HomePageImg/ExecCom/Dewan-Moniruzzaman--150x150.jpg";
import img5 from "../../Assets/HomePageImg/ExecCom/Hafizur-Rahman-Montreal-150x150.jpg";
import img6 from "../../Assets/HomePageImg/ExecCom/M_Hossain_Babu_BALA-150x150.jpeg";
import img7 from "../../Assets/HomePageImg/ExecCom/Rahim-Nehal-outstanding-150x150.jpg";
import img8 from "../../Assets/HomePageImg/ExecCom/Shafiqul-Alam-Borkat-150x150.jpg";
import img9 from "../../Assets/HomePageImg/ExecCom/Shahida-Shikdar-Hai2-150x150.jpg";
import img10 from "../../Assets/HomePageImg/ExecCom/Shibbir-Ahmed-150x150.jpg";
import img11 from "../../Assets/HomePageImg/ExecCom/Zahid_Hossain_CA-150x150.jpeg";
import img12 from "../../Assets/HomePageImg/ExecCom/abu-liaquat_atlanta-150x150.jpg";
import img13 from "../../Assets/HomePageImg/ExecCom/abul-Ibrahim-150x150.jpg";
import img14 from "../../Assets/HomePageImg/ExecCom/anisur-rahman-150x150.jpg";
import img15 from "../../Assets/HomePageImg/ExecCom/atlanta_cultural-150x150.jpg";
import img16 from "../../Assets/HomePageImg/ExecCom/huda-150x150.jpg";
import img17 from "../../Assets/HomePageImg/ExecCom/khaled-hussain-150x150.jpg";
import img18 from "../../Assets/HomePageImg/ExecCom/mannan-abdul-150x150.jpg";
import img19 from "../../Assets/HomePageImg/ExecCom/mohammed_ali-khan-150x150.jpg";
import img20 from "../../Assets/HomePageImg/ExecCom/sadek_khan-150x150.jpeg";
import img21 from "../../Assets/HomePageImg/ExecCom/selim-Zuberi-150x150.jpg";
import img22 from "../../Assets/HomePageImg/ExecCom/shah-bahauddin-shishir-150x150.jpg";
import img23 from "../../Assets/HomePageImg/ExecCom/yeahia-ahmed-150x150.jpg";
import img24 from "../../Assets/HomePageImg/ExecCom/zak-150x150.jpg";
import img25 from "../../Assets/HomePageImg/ExecCom/ziaul-haque-zia-150x150.jpg";

const ExecComCarousel = () => {
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
      <div className="slick-arrow slick-prev">
        {/* <div>&lt;</div> Left arrow symbol */}
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow slick-next">
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
    { src: img1, title: "Aminul Zillany: NRB Association USA" },
    { src: img2, title: "Atiquer Rahman: Chairperson" },
    { src: img3, title: "Bedarul Islam Babla: Outstanding Member" },
    { src: img4, title: "Dewan Moniruzzaman: Outstanding Member" },
    {
      src: img5,
      title:
        "Hafizur Rahman: BD Association of Montreal, Exec. Member Organization",
    },
    { src: img6, title: "Syed Hossain Babu: Outstanding Member" },
    { src: img7, title: "Rahim Nehal: Outstanding Member" },
    {
      src: img8,
      title:
        "Shafiqul Alam Borkat: BD Association of San Antonio, Exec. Member Organization",
    },
    {
      src: img9,
      title:
        "Shahida Shikdar Hai: Bangladesh League of America, Exec. Member Organization",
    },
    { src: img10, title: "Shibbir Ahmed: Outstanding Member" },
    { src: img11, title: "Zahid Hossain: Vice Chairperson" },
    { src: img12, title: "Abu Liaquat: Outstanding Member" },
    { src: img13, title: "Abul Ibrahim: Outstanding Member" },
    { src: img14, title: "Mohammed Anisur Rahman: Outstanding Member" },
    {
      src: img15,
      title: "Shek Jamal Uddin: Atlanta Social and Cultural Organization",
    },
    {
      src: img16,
      title:
        "Quazi Moshhoorul Huda: Writers' Association of Bangladesh, Exec. Member Organization",
    },
    {
      src: img17,
      title:
        "Khaled Hussain: BD Association of Michigan, Exec. Member Organization",
    },
    {
      src: img18,
      title:
        "Mannan Abdul: BD Association of Greater Chicago, Exec. Member Organization",
    },
    {
      src: img19,
      title:
        "Mohammed Ali Khan: Ananda Mela Los Angeles, Exec. Member Organization",
    },
    {
      src: img20,
      title: "Sadek M. Khan: American Bangladesh Business Association",
    },
    { src: img21, title: "Selim Zuberi: BD Association of Quebec" },
    {
      src: img22,
      title:
        "Shah Bahauddin: Bangladesh Canada Association of Ottawa Valley (BACAOV)",
    },
    { src: img23, title: "Yeahia Ahmed: Tymunnesa Foundation" },
    { src: img24, title: "Zakaria Chowdhury: Outstanding Member" },
    { src: img25, title: "Ziaul Haque Zia: Canada-Bangladesh Solidarity" },
  ];

  return (
    <div className="exec-carousel-container">
      <div>
        <h1 id="exec-com-title">EXECUTIVE COMMITTEE</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              style={{ width: "95%", height: "auto" }}
            />
            <div className="image-title">{image.title}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExecComCarousel;
