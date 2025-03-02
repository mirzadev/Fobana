import React from "react";
import "./SponsorsCarouselFuncStyle.css";
import SponsorsCarousel from "./SponsorsCarouselFunc";
import MediaSponCarousel from "./MedSponCarouselFunc";

function SponsorsPage() {
  return (
    <div className="sponsors-container">
      <div className="sponsors-Fobana">
        <SponsorsCarousel />
      </div>
      <div className="Media-Spon">
        <MediaSponCarousel />
      </div>
      {/*<div className="Official_Contact">
        <div className="map_header">
          <h1>ON YOUR MAP</h1>
        </div>
        <div className="map-location">
          <MapComponent />
        </div>
      </div> */}
    </div>
  );
}

export default SponsorsPage;
