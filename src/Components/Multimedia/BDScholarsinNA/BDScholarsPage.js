import React from "react";
import "./BDScholarsPageStyle.css";
import Fobana_Logo from "../../../Assets/Cover/Fobana_Logo.png";

function BDScholarsPage() {
  return (
    <div className="scholars-container">
      <h1 id="featured_Album">BANGLADESHI SCHOLARS IN NORTH AMERICA</h1>
      <div className="Fobana_logo">
        <img id="Fobana-logo" src={Fobana_Logo}></img>
      </div>
      <div>
        <h1>COMMING SOON</h1>
      </div>
    </div>
  );
}

export default BDScholarsPage;
