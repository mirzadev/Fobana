import React from "react";
import { Link } from "react-router-dom"; // Ensure React Router is used for navigation
import "./MembershipHomeStyles.css";
import FobanaLogo from "../../../Assets/Cover/Fobana_Logo.png";
import membershipImage from "../../../Assets/Membership/Membership_Home_003.jpg";
import formImage from "../../../Assets/Membership/Membership_Home_001.jpg";
import nominationImage from "../../../Assets/Membership/Membership_Home_002.jpg";

const MembershipHome = () => {
  return (
    <div className="summary-container">
      <img
        src={FobanaLogo}
        alt="FOBANA Banner"
        className="mem-home-fobana_logo"
      />
      <h1>WELCOME TO FOBANA MEMBERSHIP PORTAL</h1>
      <p className="intro-text">
        Join the largest network of Bangladeshi organizations in North America.
        Explore the benefits of membership, understand the process, and learn
        about executive committee nominations.
      </p>

      {/* Section: Membership Benefits */}
      <div className="summary-section">
        <img
          src={membershipImage}
          alt="Membership Benefits"
          className="summary-image"
        />
        <div className="summary-text">
          <h2>FOBANA Membership Benefits</h2>
          <p>
            Becoming a member of FOBANA offers incredible opportunities for
            leadership, networking, cultural exposure, and national recognition.
            Connect with Bangladeshi professionals, showcase your talent, and
            gain valuable resources.
          </p>
          <Link to="/membersBenefit" className="read-more-btn">
            Learn More
          </Link>
        </div>
      </div>

      {/* Section: Membership Form Details */}
      <div className="summary-section-membership">
        <img src={formImage} alt="Membership Form" className="summary-image" />
        <div className="summary-text">
          <h2>How to Apply for Membership?</h2>
          <p>
            The membership application process is simple! Fill out the required
            details, provide your organization’s information, and submit your
            application to be a part of FOBANA’s vibrant community.
          </p>
          <Link to="/membershipForm" className="read-more-btn">
            View Membership Process
          </Link>
        </div>
      </div>

      {/* Section: Executive Committee Nomination */}
      <div className="summary-section">
        <img
          src={nominationImage}
          alt="Nomination Form"
          className="summary-image"
        />
        <div className="summary-text">
          <h2>Executive Committee Nomination</h2>
          <p>
            Interested in taking a leadership role? Learn about the nomination
            process for the executive committee. Play a key role in shaping
            FOBANA’s future and making a difference in the community.
          </p>
          <Link to="/execmemberForm" className="read-more-btn">
            Learn About Nomination
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipHome;
