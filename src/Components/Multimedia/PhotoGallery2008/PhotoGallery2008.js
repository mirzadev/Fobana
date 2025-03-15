import React, { useState } from "react";
import "./PhotoGallery2008Styles.css";
import image1 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_001.jpg";
import image2 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_002.jpg";
import image3 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_003.jpg";
import image4 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_004.jpg";
import image5 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_005.jpg";
import image6 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_006.jpg";
import image7 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_007.jpg";
import image8 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_008.jpg";
import image9 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_009.jpg";
import image10 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_010.jpg";
import image11 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_011.jpg";
import image12 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_012.jpg";
import image13 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_013.jpg";
import image14 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_014.jpg";
import image15 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_015.jpg";
import image16 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_016.jpg";
import image17 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_017.jpg";
import image18 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_018.jpg";
import image19 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_019.jpg";
import image20 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_020.jpg";
import image21 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_021.jpg";
import image22 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_022.jpg";
import image23 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_023.jpg";
import image24 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_024.jpg";
import image25 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_025.jpg";
import image26 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_026.jpg";
import image27 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_027.jpg";
import image28 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_028.jpg";
import image29 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_029.jpg";
import image30 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_030.jpg";
import image31 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_031.jpg";
import image32 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_032.jpg";
import image33 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_033.jpg";
import image34 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_034.jpg";
import image35 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_035.jpg";
import image36 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_036.jpg";
import image37 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_037.jpg";
import image38 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_038.jpg";
import image39 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_039.jpg";
import image40 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_040.jpg";
import image41 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_041.jpg";
import image42 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_042.jpg";
import image43 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_043.jpg";
import image44 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_044.jpg";
import image45 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_045.jpg";
import image46 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_046.jpg";
import image47 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_047.jpg";
import image48 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_048.jpg";
import image49 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_049.jpg";
import image50 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_050.jpg";
import image51 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_051.jpg";
import image52 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_052.jpg";
import image53 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_053.jpg";
import image54 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_054.jpg";
import image55 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_055.jpg";
import image56 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_056.jpg";
import image57 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_057.jpg";
import image58 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_058.jpg";
import image59 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_059.jpg";
import image60 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_060.jpg";
import image61 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_061.jpg";
import image62 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_062.jpg";
import image63 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_063.jpg";
import image64 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_064.jpg";
import image65 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_065.jpg";
import image66 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_066.jpg";
import image67 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_067.jpg";
import image68 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_068.jpg";
import image69 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_069.jpg";
import image70 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_070.jpg";
import image71 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_071.jpg";
import image72 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_072.jpg";

const PhotoGallery2008 = () => {
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
    image50,
    image51,
    image52,
    image53,
    image54,
    image55,
    image56,
    image57,
    image58,
    image59,
    image60,
    image61,
    image62,
    image63,
    image64,
    image65,
    image66,
    image67,
    image68,
    image69,
    image70,
    image71,
    image72,
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
      <h1>FOBANA PHOTO GALLERY 2008</h1>
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

export default PhotoGallery2008;
