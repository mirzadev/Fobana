import React from "react";
import "./AboutUsStyles.css";
import ekCupChaIntro from "../../Assets/About/ekCupCha-1.jpg";
import MapComponent from "./MapLocation";

// import President_AD from "../../Assets/About/AnamikaChowdhury.jpg";
// import VP_AD from "../../Assets/About/AnamikaChowdhury.jpg";

import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="about-container">
      <h1>ABOUT AALOK DRISHYA</h1>
      <p className="members-heading-subTitle">Devoted to Serve You the Best</p>
      <p className="aboutUs-description">
        Team Aalok Drishya is a group of passionate and talented individuals who
        come together to create stunning images and capture beautiful moments on
        your special day. Each team member brings their unique skill set and
        perspective to the table, ensuring that every aspect of your event
        photography is covered. Every team member plays a critical role in
        bringing your vision to life. The team also includes skilled editors who
        work behind the scenes to enhance the images, create a cohesive story,
        and produce a final product that exceeds your expectations. With our
        wedding photography team by your side, you can rest assured that every
        moment of your special day will be captured flawlessly.
      </p>
      <div>
        <h1>OUR TEAM</h1>
        <h2>FOUNDING MEMBERS</h2>
      </div>
      <div className="kp-members-cart">
        <div className="kp-members-area1">
          {/* <div className="kp-members-area-image">
            <img src={President_AD} alt="member1" />
          </div> */}
          <h3>Quazi Rabbani</h3>
          <p>Co-Founder & Core Photographer</p>
          <div className="social-media">
            <Link
              to="https://www.facebook.com/anamika.ch22"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fa-brands fa-facebook"></span>
            </Link>
            <Link
              to="https://instagram.com/home"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="fa-brands fa-instagram"
                id="social-instagram"
              ></span>
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noreferrer">
              <span className="fa-brands fa-twitter" id="social-twiter"></span>
            </Link>
            <Link to="https://mail.google.com" target="_blank" rel="noreferrer">
              <span className="fa solid alt fa-envelope"></span>
            </Link>
          </div>
        </div>
        <div className="kp-members-area2">
          {/* <div className="kp-members-area-image">
            <img src={VP_AD} alt="member2" />
          </div> */}
          <h3>Anamika Chowdhury </h3>
          <p>Co-Founder & Core Photographer</p>
          <div className="social-media">
            <Link
              to="https://www.facebook.com/anamika.ch22"
              target="_blank"
              rel="noreferrer"
            >
              <span className="fa-brands fa-facebook"></span>
            </Link>
            <Link
              to="https://instagram.com/home"
              target="_blank"
              rel="noreferrer"
            >
              <span
                className="fa-brands fa-instagram"
                id="social-instagram"
              ></span>
            </Link>
            <Link to="https://www.twitter.com" target="_blank" rel="noreferrer">
              <span className="fa-brands fa-twitter" id="social-twiter"></span>
            </Link>
            <Link to="https://mail.google.com" target="_blank" rel="noreferrer">
              <span className="fa solid alt fa-envelope"></span>
            </Link>
          </div>
        </div>
      </div>
      <div className="life_at_AD">
        <h1>LIFE AT AALOK DRISHYA</h1>
      </div>
      <div className="ekCupCha-intro-image">
        <a href="https://www.youtube.com/watch?v=FI9_ft95mgA" target="_blank">
          <img id="ekCupCha-image" alt="image-vdo" src={ekCupChaIntro} />
        </a>
      </div>
      <div className="Official_Contact">
        <div className="life_at_AD">
          <h1>CONTACT US</h1>
        </div>
        <div className="ContactInfo">
          <div className="office-loc">
            <div
              className="fa-solid fa-thumbtack"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Our Office</h2>
            <Link
              to="https://www.google.com/maps/place/512+Shady+Pine+Way,+Greenacres,+FL+33415/@26.6398988,-80.1460499,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9262ad0671287:0xde974d1673268148!8m2!3d26.639894!4d-80.143475!16s%2Fg%2F11cscj25n8?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              <div>512 Shady Pine Way,</div>
              <div>Greenacres, FL-33415</div>
            </Link>
          </div>
          <div className="tel-contact">
            <div
              className="fa-solid fa-phone"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Phone</h2>
            <div className="phoneNumber">1(561) 999 9999 (Cell)</div>
            <div className="phoneNumber">1(561) 999 9999 (Office)</div>
          </div>
          <div className="email-contact">
            <div
              className="fa-solid fa-envelope"
              style={{ fontSize: "30px" }}
            ></div>
            <h2>Email</h2>
            <Link
              to="mailto:qazirabbani@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p className="email-address">qazirabbani@gmail.com</p>
            </Link>
          </div>
        </div>
        <div className="life_at_AD">
          <h1>ON YOUR MAP</h1>
        </div>
        <div className="map-location">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
