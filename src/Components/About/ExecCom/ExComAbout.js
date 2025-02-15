import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ExComAboutStyle.css";
import img1 from "../../../Assets/About/ExecComAbout/Atiq-150x150.jpg";
import img2 from "../../../Assets/About/ExecComAbout/Zahid_Hossain_CA-150x150.jpeg";
import img3 from "../../../Assets/About/ExecComAbout/Dr.-Rafiq-I.-Khan-150x150.jpg";
import img4 from "../../../Assets/About/ExecComAbout/MohammedKibriaKiran150x150.jpeg";
import img5 from "../../../Assets/About/ExecComAbout/SM-Lotiful-Reza-Tushar-150x150.jpg";
import img6 from "../../../Assets/About/ExecComAbout/Zakaria-150x150.jpg";
import img7 from "../../../Assets/About/ExecComAbout/Mahmud-Musharraf-Hussain-150x150.jpg";
import img8 from "../../../Assets/About/ExecComAbout/Bedarul-Islam-Babla-150x150.jpg";
import img9 from "../../../Assets/About/ExecComAbout/sadek_khan-150x150.jpeg";
import img10 from "../../../Assets/About/ExecComAbout/Dewan-Moniruzzaman--150x150.jpg";
import img11 from "../../../Assets/About/ExecComAbout/zi-russell-outstanding-150x150.jpg";
import img12 from "../../../Assets/About/ExecComAbout/Shibbir-Ahmed-150x150.jpg";
import img13 from "../../../Assets/About/ExecComAbout/Arif-Ahmed-Ashraf-150x150.jpg";
import img14 from "../../../Assets/About/ExecComAbout/Rahim-Nehal-outstanding-150x150.jpg";
import img15 from "../../../Assets/About/ExecComAbout/Syed_Hossain_Babu_BALA-150x150.jpeg";
import img16 from "../../../Assets/About/ExecComAbout/abul-Ibrahim-150x150.jpg";
import img17 from "../../../Assets/About/ExecComAbout/akter-hossain-150x150.png";
import img18 from "../../../Assets/About/ExecComAbout/Arghya-sarathi-sikder-150x150.jpg";
import img19 from "../../../Assets/About/ExecComAbout/emdadul-haq-bd-sur-chanda-150x150.jpg";
import img20 from "../../../Assets/About/ExecComAbout/chitra_sultana-150x150.jpg";
import img21 from "../../../Assets/About/ExecComAbout/Md MuzibUddin-150x150.jpg";
import img22 from "../../../Assets/About/ExecComAbout/Zahirul Islam Bhuiyan-150x150.jpg";
import img23 from "../../../Assets/About/ExecComAbout/Hafizur-Rahman-Montreal-150x150.jpg";
import img24 from "../../../Assets/About/ExecComAbout/Shafiqul-Alam-Borkat-150x150.jpg";
import img25 from "../../../Assets/About/ExecComAbout/Aminul-Zillany-Collins-General-Secretary-150x150.jpg";
import img26 from "../../../Assets/About/ExecComAbout/Mahmood-Rahman-148x150.jpg";
import img27 from "../../../Assets/About/ExecComAbout/sisir_datta-150x150.jpg";
import img28 from "../../../Assets/About/ExecComAbout/shatadal_logo-150x144.png";

const ExecComAbout = () => {
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
    { src: img1, title: "Atiquer Rahman: Chairperson" },
    { src: img2, title: "Zahid Hossain: Vice Chairperson" },
    { src: img3, title: "Dr Rafiq Khan: Executive Secretary" },
    { src: img4, title: "Mohamed Kabir Kiran: Ececutive Joint Secretary" },
    { src: img5, title: "SM Lotifur Reza Tushar: Treasurer" },
    { src: img6, title: "Zakaria Chowdhury: Outstanding Member" },
    { src: img7, title: "Mahmud Musharraf Hussain: Outstanding Member" },
    {
      src: img8,
      title: "Badrul Islam Babla: Outstanding Member",
    },
    {
      src: img9,
      title: "Sadek M. Khan: American Bangladesh Business Association",
    },
    { src: img10, title: "Dewan Moniruzzaman: Outstanding Member" },
    {
      src: img11,
      title:
        "Zi Russell: Bangladesh American Friendship Society, Exec. Member Organization",
    },
    { src: img12, title: "Shibbir Ahmed: Outstanding Member" },
    { src: img13, title: "Arif Ahmed Ashraf: Outstanding Member" },
    { src: img14, title: "Rahim Nehal: Outstanding Member" },
    {
      src: img15,
      title: "Syed Hossain Babu: Outstanding Member",
    },
    {
      src: img16,
      title: "Abul Rahim: Outstanding Member ",
    },
    {
      src: img17,
      title: "Akter Hossain: Friends and Family DMV, Exec. Member",
    },
    {
      src: img18,
      title: "Arghya Sikder: Anandadhwani USA, Exec. Member",
    },
    {
      src: img19,
      title: "Emdadul Huq: BD Sur Chondo, Exec. Member Organization",
    },
    {
      src: img20,
      title: "Chitra Sultana: Exec. Member Prganization",
    },
    {
      src: img21,
      title: "MD. Mujib Uddin: US BD Foundation of Florida, Exec. Member",
    },
    {
      src: img22,
      title:
        "Zahirul Islam Bhuiyan: Bangladesh American Friendship Foundation, Exec Member",
    },
    {
      src: img23,
      title:
        "Hafizur Rahman: BD Association of Montreal, Exec. Member Organization",
    },
    {
      src: img24,
      title:
        "Shafiqul Alam Borkat: BD Association of San Antonio, Exec Member Organization",
    },
    {
      src: img25,
      title: "Aminul Zillani: NRB Association, Exec. Member Organization",
    },
    {
      src: img26,
      title:
        "Mahmood Rahman: Georgia Asian Business Network, Exec. Member Organization",
    },
    {
      src: img27,
      title: "Sisir Datta: Banga Foundation, Exec Member Organization",
    },
    {
      src: img28,
      title: "Shatadal: Exec. Member",
    },
  ];

  return (
    <div className="execCom-About-container">
      <div>
        <h1 id="exec-com-title">ADHOC COMMITTEE 2022</h1>
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

export default ExecComAbout;
