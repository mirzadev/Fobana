import React, { useState } from "react";
import "./YouthStyles.css";
import YouthClubLogo from "../../Assets/HomePageImg/YouthClub/FYC_logo-300x181.jpg";
import image1 from "../../Assets/HomePageImg/YouthClub/Img-1-FOBANA2015_Cover.jpg";
import image2 from "../../Assets/HomePageImg/YouthClub/Img-2-FOBANA2014_Cover.jpg";
import image3 from "../../Assets/HomePageImg/YouthClub/Img-3.jpg";
import image4 from "../../Assets/HomePageImg/YouthClub/Img-4.jpeg";
import image5 from "../../Assets/HomePageImg/YouthClub/Img-5-FOBANA1991_Cover.jpg";
import image6 from "../../Assets/HomePageImg/YouthClub/Img-6-FOBANA1990_Cover.jpg";
import image7 from "../../Assets/HomePageImg/YouthClub/Img-7-FOBANA1994_Cover.jpg";
import image8 from "../../Assets/HomePageImg/YouthClub/Img-8-FOBANA1993_Cover.jpg";
import image9 from "../../Assets/HomePageImg/YouthClub/Img-9.jpg";
import image10 from "../../Assets/HomePageImg/YouthClub/Img-10.jpeg";
import image11 from "../../Assets/HomePageImg/YouthClub/Img-11-FOBANA1989_Cover.jpg";
import image12 from "../../Assets/HomePageImg/YouthClub/Img-12-FOBANA1988_Cover.jpg";
import image13 from "../../Assets/HomePageImg/YouthClub/Img-13.jpeg";
import image14 from "../../Assets/HomePageImg/YouthClub/Img-14.jpeg";
import image15 from "../../Assets/HomePageImg/YouthClub/Img-15-FOBANA1987_Cover.jpg";
import image16 from "../../Assets/HomePageImg/YouthClub/Img-16-FOBANA2009_Cover.jpg";

const YouthGallery = () => {
  // Array to hold image file paths
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal open/close
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index for current image in modal

  // Open modal and set the selected image
  const openModal = (index) => {
    setIsModalOpen(true);
    setCurrentImageIndex(index);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="App">
      <h1>FOBANA YOUTH CLUB</h1>
      <div className="YouthClubLogo">
        <img src={YouthClubLogo} alt="youthLogo" height="200" width="400" />
      </div>
      {/* Display the image thumbnails in a grid */}
      <div className="gallery">
        {images.map((image, index) => (
          <div
            className="thumbnail"
            key={index}
            onClick={() => openModal(index)}
          >
            <img src={image} alt={`thumbnail-${index}`} />
          </div>
        ))}
      </div>

      {/* Modal for image enlargement */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Back Arrow */}
            <button className="arrow-button prev" onClick={prevImage}>
              &lt;
            </button>

            <img
              src={images[currentImageIndex]}
              alt={`modal-img-${currentImageIndex}`}
              className="modal-image"
            />

            {/* Next Arrow */}
            <button className="arrow-button next" onClick={nextImage}>
              &gt;
            </button>

            <button className="close" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouthGallery;
