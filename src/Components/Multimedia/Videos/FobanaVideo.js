import "./FobanaVideoStyles.css";
import React from "react";
import YouTube from "react-youtube";
//install :   npm install react-youtube

const FobanaVideo = () => {
  const videoIds = [
    { id: "oh8vgivjFCE", startTime: 0 },
    { id: "C5aAnNpODP8", startTime: 0 },
    { id: "SSztYU4pW6o", startTime: 0 },
  ];

  const handleVideoClick = (videoId) => {
    // Open the video in YouTube directly
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <div className="FobanaVideo">
      <h1>FOBANA VIDEOS</h1>
      <div className="video-container">
        {videoIds.map((video, index) => (
          <div key={index} className="video">
            <div className="video-embed">
              <YouTube
                videoId={video.id}
                opts={{
                  playerVars: {
                    autoplay: 0,
                    start: video.startTime,
                  },
                }}
              />
            </div>
            <button
              className="youtube-link"
              onClick={() => handleVideoClick(video.id)}
            >
              Watch on YouTube
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FobanaVideo;
