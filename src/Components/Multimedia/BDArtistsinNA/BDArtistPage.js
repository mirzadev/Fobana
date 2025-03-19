import React from "react";
import "./BDArtistPageStyle.css";
import Fobana_Logo from "../../../Assets/Cover/Fobana_Logo.png";

function BDArtistPage() {
  return (
    <div className="artist-container">
      <h1 id="featured_Album">BANGLADESHI ARTISTS IN NORTH AMERICA</h1>
      <div className="Fobana_logo">
        <img id="Fobana-logo" src={Fobana_Logo}></img>
      </div>
      <div>
        <h1>COMMING SOON</h1>
      </div>
    </div>
  );
}

export default BDArtistPage;
