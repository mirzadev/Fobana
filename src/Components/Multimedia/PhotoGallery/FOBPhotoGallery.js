import React, { useState } from "react";
import "./FOBPhotoGalleryStyles.css";
import image1 from "../../../Assets/Multimedia/PhotoGallery/fobana8.jpg";
import image2 from "../../../Assets/Multimedia/PhotoGallery/fobana1.jpg";
import image3 from "../../../Assets/Multimedia/PhotoGallery/fobana2.jpg";
import image4 from "../../../Assets/Multimedia/PhotoGallery/fobana3.jpg";
import image5 from "../../../Assets/Multimedia/PhotoGallery/fobana6.jpg";
import image6 from "../../../Assets/Multimedia/PhotoGallery/fobana7.jpg";
import image7 from "../../../Assets/Multimedia/PhotoGallery/all_musicians.jpg";
import image8 from "../../../Assets/Multimedia/PhotoGallery/Fobana-florida-1.jpg";
import image9 from "../../../Assets/Multimedia/PhotoGallery/tajul-imam2.jpg";
import image10 from "../../../Assets/Multimedia/PhotoGallery/fobana_kid1.jpg";
import image11 from "../../../Assets/Multimedia/PhotoGallery/fobana_kid2.jpg";
import image12 from "../../../Assets/Multimedia/PhotoGallery/fobana_kid_3.jpg";
import image13 from "../../../Assets/Multimedia/PhotoGallery/fobana_kid_4.jpg";
import image14 from "../../../Assets/Multimedia/PhotoGallery/hoimanti.jpg";
import image15 from "../../../Assets/Multimedia/PhotoGallery/hoimonti2.jpg";
import image16 from "../../../Assets/Multimedia/PhotoGallery/mollika1.jpg";
import image17 from "../../../Assets/Multimedia/PhotoGallery/press_con_dhaka.jpg";
import image18 from "../../../Assets/Multimedia/PhotoGallery/rafiq_mollika_khan.jpg";
import image19 from "../../../Assets/Multimedia/PhotoGallery/rafiqkhan4.jpg";
import image20 from "../../../Assets/Multimedia/PhotoGallery/singers1.jpg";
import image21 from "../../../Assets/Multimedia/PhotoGallery/singers_la.jpg";
import image22 from "../../../Assets/Multimedia/PhotoGallery/situtul3.jpg";
import image23 from "../../../Assets/Multimedia/PhotoGallery/situutul6.jpg";

const FOBPhotoGallery = () => {
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
      <h1>FOBANA PHOTO GALLERY</h1>
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

export default FOBPhotoGallery;
