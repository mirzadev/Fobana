import "./FooterStyles.css";
import FaceBook from "../../Assets/footerItem/Facebook.png";
import Twiter from "../../Assets/footerItem/Twiter.png";
import YouTube from "../../Assets/footerItem/YouTube.png";
import Location from "../../Assets/footerItem/Location_Symbol.png";
import Telephone from "../../Assets/footerItem/Telephone_Logo.png";
import Email from "../../Assets/footerItem/Email_Logo.png";
import pspTechLogo from "../../Assets/footerItem/pspTech-logo.png";
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
              <Link to="/about">About Us</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/work">Work</Link>
            </div>
            <div className="link-menu-2">
              <Link to="/commercial">Commercial</Link>
              <Link to="/wedding">Wedding</Link>
              <Link to="/boishakh">Real Estate</Link>
            </div>
            <div className="link-menu-3">
              <Link to="/ekCupCha">Product</Link>
              <Link to="/kpCulture">Food</Link>
              <Link to="/book">Book Us</Link>
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
              >
                <img src={Location} alt="location" height="40" width="40" />
              </Link>
              <Link
                to="https://www.google.com/maps/place/512+Shady+Pine+Way,+Greenacres,+FL+33415/@26.6398988,-80.1460499,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9262ad0671287:0xde974d1673268148!8m2!3d26.639894!4d-80.143475!16s%2Fg%2F11cscj25n8?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                <div className="loc_address_cont">
                  <p className="location-address">512 Shady Pine Way, #B1</p>
                  <p className="location-address1">Greenacres, FL-33415</p>
                </div>
              </Link>
            </div>
            <div className="Tel_email">
              <div className="telephone">
                <Link to="/">
                  <img src={Telephone} alt="telephone" height="30" width="30" />
                </Link>
                <a>
                  <p className="telephone-number">1(561) 418 9672 (Cell)</p>
                </a>
              </div>
              <div className="email">
                <Link
                  to="mailto:qazirabbani@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Email} alt="email" height="30" width="30" />
                </Link>
                <Link
                  to="mailto:qazirabbani@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="email-address">qazirabbani@gmail.com</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="copyright-note">
        <p>Copyright @</p>
        <Link to="https://psptech.net/" target="_blank" rel="noreferrer">
          <img src={pspTechLogo} alt="psptech" height="35" width="35" />
        </Link>
        <Link to="https://psptech.net/" target="_blank" rel="noreferrer">
          <p>PSP Technology Inc</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
