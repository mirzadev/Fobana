import React, { useState } from "react";
import "./PhotoGallery2021Styles.css";
import Footer from "../../Footer/Footer";
import image1 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_001.jpg";
import image2 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_002.jpg";
import image3 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_003.jpg";
import image4 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_004.jpg";
import image5 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_005.jpg";
import image6 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_006.jpg";
import image7 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_007.jpg";
import image8 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_008.jpg";
import image9 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_009.jpg";
import image10 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_010.jpg";
import image11 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_011.jpg";
import image12 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_012.jpg";
import image13 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_013.jpg";
import image14 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_014.jpg";
import image15 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_015.jpg";
import image16 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_016.jpg";
import image17 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_017.jpg";
import image18 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_018.jpg";
import image19 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_019.jpg";
import image20 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_020.jpg";
import image21 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_021.jpg";
import image22 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_022.jpg";
import image23 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_023.jpg";
import image24 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_024.jpg";
import image25 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_025.jpg";
import image26 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_026.jpg";
import image27 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_027.jpg";
import image28 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_028.jpg";

const PhotoGallery2021 = () => {
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
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
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
    <div className="PhotoGallery-container">
      <h1>FOBANA PHOTO GALLERY 2021</h1>
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
      <Footer />
    </div>
  );
};

export default PhotoGallery2021;
