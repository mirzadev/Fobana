import React from "react";
import "./AboutStyles.css";
import AboutFobana from "../AboutFobana/AboutFobana";
import ExecComAbout from "../AboutExecCom/ExComAbout";
import MapComponent from "../ContactUs/MapLocation";
// import { Link } from "react-router-dom";
function About() {
  return (
    <div className="aboutUs-container">
      <div className="About-Fobana">
        <AboutFobana />
      </div>
      <div className="Exec-Com">
        <ExecComAbout />
      </div>
      <div className="Official_Contact">
        <div className="map_header">
          <h1>ON YOUR MAP</h1>
        </div>
        <div className="map-location">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default About;
