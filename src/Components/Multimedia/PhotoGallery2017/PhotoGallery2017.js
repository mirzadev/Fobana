import React, { useState } from "react";
import "./PhotoGallery2017Styles.css";
import image1 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2017/FOBANA_2017_001.jpg";
import image2 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2017/FOBANA_2017_002.jpg";
import image3 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2017/FOBANA_2017_003.jpg";
import image4 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2017/FOBANA_2017_004.jpg";

const PhotoGallery2017 = () => {
  // Array to hold image file paths
  const images = [image1, image2, image3, image4];

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
    <div className="PhotoGallery-container">
      <h1>FOBANA PHOTO GALLERY 2017</h1>
      {/* Display the image thumbnails in a grid */}
      <div className="photo_gallery">
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

export default PhotoGallery2017;
