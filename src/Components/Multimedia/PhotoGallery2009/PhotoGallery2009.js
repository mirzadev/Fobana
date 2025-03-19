import React, { useState } from "react";
import "./PhotoGallery2009Styles.css";
import Footer from "../../Footer/Footer";
import image1 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_001.jpg";
import image2 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_002.jpg";
import image3 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_003.jpg";
import image4 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_004.jpg";
import image5 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_005.jpg";
import image6 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_006.jpg";
import image7 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_007.jpg";
import image8 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_008.jpg";
import image9 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_009.jpg";
import image10 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_010.jpg";
import image11 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_011.jpg";
import image12 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_012.jpg";
import image13 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_013.jpg";
import image14 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_014.jpg";
import image15 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_015.jpg";
import image16 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_016.jpg";
import image17 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_017.jpg";
import image18 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_018.jpg";
import image19 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_019.jpg";
import image20 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_020.jpg";
import image21 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_021.jpg";
import image22 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_022.jpg";
import image23 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_023.jpg";
import image24 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_024.jpg";
import image25 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_025.jpg";
import image26 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_026.jpg";
import image27 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_027.jpg";
import image28 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_028.jpg";
import image29 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_029.jpg";
import image30 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_030.jpg";
import image31 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_031.jpg";
import image32 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_032.jpg";
import image33 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_033.jpg";
import image34 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_034.jpg";
import image35 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_035.jpg";
import image36 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_036.jpg";
import image37 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_037.jpg";
import image38 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_038.jpg";
import image39 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_039.jpg";
import image40 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_040.jpg";
import image41 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_041.jpg";
import image42 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_042.jpg";
import image43 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_043.jpg";
import image44 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_044.jpg";
import image45 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_045.jpg";
import image46 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_046.jpg";
import image47 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_047.jpg";
import image48 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_048.jpg";
import image49 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_049.jpg";
import image50 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_050.jpg";
import image51 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_051.jpg";
import image52 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_052.jpg";
import image53 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_053.jpg";
import image54 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_054.jpg";
import image55 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_055.jpg";
import image56 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_056.jpg";
import image57 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_057.jpg";
import image58 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_058.jpg";
import image59 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_059.jpg";
import image60 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_060.jpg";
import image61 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_061.jpg";
import image62 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_062.jpg";
import image63 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_063.jpg";
import image64 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_064.jpg";
import image65 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_065.jpg";
import image66 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_066.jpg";
import image67 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_067.jpg";
import image68 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_068.jpg";
import image69 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_069.jpg";
import image70 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_070.jpg";
import image71 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_071.jpg";
import image72 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_072.jpg";
import image73 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_073.jpg";
import image74 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_074.jpg";
import image75 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_075.jpg";
import image76 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_076.jpg";
import image77 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_077.jpg";
import image78 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_078.jpg";
import image79 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_079.jpg";
import image80 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_080.jpg";
import image81 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_081.jpg";
import image82 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_082.jpg";
import image83 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_083.jpg";
import image84 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_084.jpg";
import image85 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_085.jpg";
import image86 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_086.jpg";
import image87 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_087.jpg";

const PhotoGallery2009 = () => {
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
    image73,
    image74,
    image75,
    image76,
    image77,
    image78,
    image79,
    image80,
    image81,
    image82,
    image83,
    image84,
    image85,
    image86,
    image87,
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
      <h1>FOBANA PHOTO GALLERY 2009</h1>
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

export default PhotoGallery2009;
