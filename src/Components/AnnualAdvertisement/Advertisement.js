import React from "react";
import "./AdvertisementStyle.css";
import AnnualFobana from "../../Assets/HomePageImg/FobanaFlyer.jpg";
import SNSHomeLoan from "../../Assets/HomePageImg/SNS-home-loan.jpg";
function Advertisement() {
  return (
    <div>
      <div className="elementor-widget-container">
        <img src={AnnualFobana} alt="flyer" />
      </div>
      <div className="SnsHomeLogo-container">
        <img src={SNSHomeLoan} alt="snsLogo" width="300" height="600" />
      </div>
    </div>
  );
}

export default Advertisement;
