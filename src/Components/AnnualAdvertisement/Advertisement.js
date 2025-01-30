import React from "react";
import "./AdvertisementStyle.css";
import AnnualFobana from "../../Assets/HomePageImg/FobanaFlyer.jpg";
import SNSHomeLoan from "../../Assets/HomePageImg/SNS-home-loan.jpg";
function Advertisement() {
  return (
    <div className="elementor-widget-container">
      <div>
        <img src={AnnualFobana} alt="flyer" />
      </div>
      <div className="SnsHomeLogo">
        <img src={SNSHomeLoan} alt="snsLogo" height="300" width="600" />
      </div>
    </div>
  );
}

export default Advertisement;
