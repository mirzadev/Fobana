import React, { useState } from "react";
import "./PublicationCoversStyles.css";
import image1 from "../../../Assets/Multimedia/Publications/Fobana-1987.jpg";
import image2 from "../../../Assets/Multimedia/Publications/Fobana-1988.jpg";
import image3 from "../../../Assets/Multimedia/Publications/Fobana-1989.jpg";
import image4 from "../../../Assets/Multimedia/Publications/Fobana-1990.jpg";
import image5 from "../../../Assets/Multimedia/Publications/Fobana-1991.jpg";
import image6 from "../../../Assets/Multimedia/Publications/Fobana-1993.jpg";
import image7 from "../../../Assets/Multimedia/Publications/Fobana-1994.jpg";
import image8 from "../../../Assets/Multimedia/Publications/Fobana-1996.jpg";
import image9 from "../../../Assets/Multimedia/Publications/Fobana-2003.jpg";
import image10 from "../../../Assets/Multimedia/Publications/Fobana-2008.jpg";
import image11 from "../../../Assets/Multimedia/Publications/Fobana-2009.jpg";
import image12 from "../../../Assets/Multimedia/Publications/Fobana-2010.jpg";
import image13 from "../../../Assets/Multimedia/Publications/Fobana-2011.jpg";
import image14 from "../../../Assets/Multimedia/Publications/Fobana-2012.jpg";
import image15 from "../../../Assets/Multimedia/Publications/Fobana-2013.jpg";
import image16 from "../../../Assets/Multimedia/Publications/Fobana-2014.jpg";
import image17 from "../../../Assets/Multimedia/Publications/Fobana-2015.jpg";
import image18 from "../../../Assets/Multimedia/Publications/Fobana-2020.png";
import image19 from "../../../Assets/Multimedia/Publications/Fobana-2021.jpg";

const PublicationCovers = () => {
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
    image17,
    image18,
    image19,
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
    <div className="Publication-container">
      <h1>FOBANA PUBLICATIONS</h1>

      {/* Display the image thumbnails in a grid */}
      <div className="publication-gallery">
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

export default PublicationCovers;
