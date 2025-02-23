import "./FooterStyles.css";
import FaceBook from "../../Assets/footerItem/Facebook.png";
import Twiter from "../../Assets/footerItem/Twiter.png";
import YouTube from "../../Assets/footerItem/YouTube.png";
import Location from "../../Assets/footerItem/Location_Symbol.png";
import Telephone from "../../Assets/footerItem/Telephone_Logo.png";
import Email from "../../Assets/footerItem/Email_Logo.png";
import pspTechLogo from "../../Assets/footerItem/pspTech-logo.png";
import FobanaFooterLogo from "../../Assets/footerItem/Fobana_Footer_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom">
        <div className="social-media-div">
          <h4>Social Media</h4>
          <div className="social-media">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={FaceBook} alt="facebook" height="40" width="40" />
            </Link>
            <Link to="/" target="_blank" rel="noreferrer">
              <img
                className="twiter"
                src={Twiter}
                alt="twiter"
                height="40"
                width="40"
              />
            </Link>
            <Link
              to="https://www.youtube.com/@pspmusic-florida1643"
              target="_blank"
              rel="noreferrer"
            >
              <img src={YouTube} alt="youtube" height="40" width="50" />
            </Link>
          </div>
        </div>
        <div className="useful-links">
          <h4>Useful Links</h4>
          <div className="link-menues">
            <div className="link-menu-1">
              <Link to="https://fobanami2024.com/">FOBANA 2024</Link>
              <Link to="/about">About Us</Link>
              <Link to="/membership">Membership</Link>
            </div>
            <div className="link-menu-2">
              <Link to="/talent">Talent Hunt</Link>
              <Link to="/convention">Convention</Link>
              <Link to="/scholarship">Scholarship</Link>
            </div>
            <div className="link-menu-3">
              <Link to="/multimedia">Multimedia</Link>
              <Link to="/payment">Online Payment</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="footer-contact-us">
          <h4>Contact Us</h4>
          <div className="contact-footer_items">
            <div className="location-address">
              <Link
                to="https://www.google.com/maps/place/512+Shady+Pine+Way,+Greenacres,+FL+33415/@26.6398988,-80.1460499,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9262ad0671287:0xde974d1673268148!8m2!3d26.639894!4d-80.143475!16s%2Fg%2F11cscj25n8?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="location-link"
              >
                <div className="loc_address_cont">
                  <img
                    src={Location}
                    alt="location"
                    className="location-image"
                  />
                  <p className="location-address">
                    4299 West Hillsboro Blvd, Coconut Creek, FL - 33073
                  </p>
                </div>
              </Link>
              <div className="telephone">
                <img
                  src={Telephone}
                  alt="telephone"
                  className="telephone-image"
                />
                <p className="telephone-number">1(954) 818 2970 (Cell)</p>
              </div>
              <Link
                to="mailto:fobanac@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="email">
                  <img src={Email} alt="email" className="email-image" />
                  <p className="email-address">fobanac@gmail.com</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <div>
          <img src={FobanaFooterLogo} alt="psptech" height="100" width="200" />
        </div>
        <div>
          <p>Copyright @ 2025 FOBANA Central</p>
        </div>
        <div className="copyright-note">
          <Link to="https://psptech.net/" target="_blank" rel="noreferrer">
            <p>Tech Support:</p>
            <img src={pspTechLogo} alt="psptech" height="35" width="35" />
            <p>PSP Technology Inc</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
