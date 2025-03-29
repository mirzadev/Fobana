import React from "react";
import "./FobanaMembershipBenefitsStyles.css";
import FobanaLogo from "../../../Assets/Cover/Fobana_Logo.png";
import networkingImage from "../../../Assets/Membership/FOBANA_2017_001.jpg";
import talentShowImage from "../../../Assets/Membership/FOBANA_2021_002.jpg";
import leadershipImage from "../../../Assets/Membership/FOBANA_2013_035.jpg";

const FobanaMembershipBenefits = () => {
  return (
    <div className="FOB-membership-container">
      <img src={FobanaLogo} alt="FOBANA Banner" className="fobana_logo" />
      <h1>FOBANA MEMBERSHIP BENEFITS </h1>
      <p className="benefit-para">
        The Federation of Bangladeshi Associations in North America (FOBANA)
        serves as a central hub for Bangladeshi organizations throughout the
        continent. Becoming a member provides valuable advantages such as
        opportunities for leadership, professional guidance, enhanced
        visibility, and recognition on a national level.
      </p>
      <h2>Why Become a FOBANA Member ?</h2>

      {/* Networking & National Recognition */}
      <div className="benefit-section">
        <img src={networkingImage} alt="Networking" className="benefit-image" />
        <div className="benefit-text">
          <h2>Networking & National Recognition</h2>
          <ul className="benefit-list">
            <li>
              Connect with the largest Non-Resident Bangladeshi (NRB) network.
            </li>
            <li>
              Collaborate with professionals and organizations across North
              America.
            </li>
            <li>
              Gain national exposure for your community-driven initiatives.
            </li>
          </ul>
        </div>
      </div>
      {/* Leadership Development & Growth */}
      <div className="leadership-section">
        <div className="leadership-text">
          <h2>Leadership Development & Growth</h2>
          <ul className="leadership-list">
            <li>
              Take an active role in a FOBANA Subcommittee and enhance your
              leadership skills.
            </li>
            <li>
              Gain insights from experienced professionals on managing a
              successful non-profit.
            </li>
            <li>
              Earn the opportunity to host the prestigious FOBANA Convention
              after two years of active membership.
            </li>
          </ul>
        </div>
        <img
          src={leadershipImage}
          alt="Leadership"
          className="leadership-image"
        />
      </div>
      {/* Talent Development & Cultural Exposure */}
      <div className="talent-section">
        <img
          src={talentShowImage}
          alt="Talent Showcase"
          className="talent-image"
        />
        <div className="talent-text">
          <h2>Talent Development & Cultural Exposure</h2>
          <ul className="talent-list">
            <li>
              Participate in national talent showcases, including cultural
              programs, seminars, and competitions.
            </li>
            <li>
              Showcase your artistic, musical, and creative talents to a wider
              audience.
            </li>
            <li>
              Collaborate with other FOBANA member organizations to promote and
              exchange cultural talents.
            </li>
          </ul>
        </div>
      </div>

      <h2>Membership Fee</h2>
      <p>
        Annual membership fee: <strong>$50.00 per year</strong> (Convention to
        convention cycle).
      </p>
      <p>
        Submit your application and pay online via the{" "}
        <a
          href="http://www.fobana.info"
          target="_blank"
          rel="noopener noreferrer"
        >
          FOBANA website
        </a>
        .
      </p>
      <h2>Join the Largest Bangladeshi Network in North America!</h2>
      <p>
        FOBANA is more than an annual event; it is an ongoing platform that
        fosters collaboration and growth for Bangladeshi organizations.
        Strengthen your network, amplify your reach, and leave a lasting impact
        on the community.
      </p>
    </div>
  );
};

export default FobanaMembershipBenefits;
