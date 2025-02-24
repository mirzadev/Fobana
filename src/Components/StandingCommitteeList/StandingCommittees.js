import React from "react";
import Fobana_Logo from "../../Assets/Cover/Fobana_Logo.png";
import "./StandingCommitteeStyle.css"; // Importing the CSS file for styles

const committees = [
  "Standing Committees",
  "Bangladesh Liaison Committee",
  "Health and Wellness Committee",
  "Legal Committee",
  "Business & Investment Committee",
  "Unification Committee",
  "Constitution & Procedure Review Committee",
  "Media & Public Awareness Committee",
  "Seminar Committee",
  "Women Empowerment Committee",
  "Cultural Committee",
  "Mainstream Liaison Committee",
  "Membership Review Committee",
  "Social Network Committee",
  "Youth Forum Committee",
  "Goodwill and Promotion Committee",
  "Awards Committee",
  "Convention Liaison Committee",
  "Scholarship Committee",
  "Executive Logistics Committee",
  "Convention Review Committee",
  "Alumni Committee",
  "Fundraising Committee",
  "Budget & Finance Committee",
];

const CommitteesList = () => {
  return (
    <div className="committees-page">
      <div className="Fobana_logo">
        <img id="Fobana-logo" src={Fobana_Logo}></img>
      </div>
      <div className="content-wrapper">
        <h1>STANDING COMMITTEES</h1>
        <ul className="committees-list">
          {committees.map((committee, index) => (
            <li key={index} className="committee-item">
              {committee}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommitteesList;
