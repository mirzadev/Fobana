import React, { useState } from "react";
import "./PhotoGallery2013Styles.css";
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
import image29 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_029.jpg";
import image30 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_030.jpg";
import image31 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_031.jpg";
import image32 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_032.jpg";
import image33 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_033.jpg";
import image34 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_034.jpg";
import image35 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_035.jpg";
import image36 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_036.jpg";
import image37 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_037.jpg";
import image38 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_038.jpg";
import image39 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_039.jpg";
import image40 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_040.jpg";
import image41 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_041.jpg";
import image42 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_042.jpg";
import image43 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_043.jpg";
import image44 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_044.jpg";
import image45 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_045.jpg";
import image46 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_046.jpg";
import image47 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_047.jpg";
import image48 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_048.jpg";
import image49 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_049.jpg";

const PhotoGallery2013 = () => {
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
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
    image35,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
    image46,
    image47,
    image48,
    image49,
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
      <h1>FOBANA PHOTO GALLERY 2013</h1>
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

export default PhotoGallery2013;
