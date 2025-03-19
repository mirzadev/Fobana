import React from "react";
import Fobana_Logo from "../../../Assets/Cover/Fobana_Logo.png";
import Press_Conference from "../../../Assets/Cover/Media-Conference.png";
import "./NewsLinkPageStyles.css";
const NewsLinkPage = () => {
  const newsLink =
    "https://www.ajkerpatrika.com/entertainment/cinema/ajpiivdeqjzfy";

  return (
    <div className="news-container">
      <h1>FOBANA NEWS</h1>
      <div className="Fobana_logo">
        <img id="Fobanalogo" src={Fobana_Logo}></img>
      </div>
      <div className="media-container">
        <a href={newsLink} target="_blank" rel="noopener noreferrer">
          <img
            id="media_thumbnails"
            src={Press_Conference}
            alt="News Thumbnail"
          />
        </a>
        <a href={newsLink} target="_blank" rel="noopener noreferrer">
          <button className="news-button">Click to Read</button>
        </a>
      </div>
    </div>
  );
};

export default NewsLinkPage;
