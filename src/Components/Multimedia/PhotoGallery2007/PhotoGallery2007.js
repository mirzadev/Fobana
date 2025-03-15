import React, { useState } from "react";
import "./PhotoGallery2007Styles.css";
import image1 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_001.jpg";
import image2 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_002.jpg";
import image3 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_003.jpg";
import image4 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_004.jpg";
import image5 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_005.jpg";
import image6 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_006.jpg";
import image7 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_007.jpg";
import image8 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_008.jpg";
import image9 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_009.jpg";
import image10 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_010.jpg";
import image11 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_011.jpg";
import image12 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_012.jpg";
import image13 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_013.jpg";
import image14 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_014.jpg";
import image15 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_015.jpg";
import image16 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_016.jpg";
import image17 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_017.jpg";
import image18 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_018.jpg";
import image19 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_019.jpg";
import image20 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_020.jpg";
import image21 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_021.jpg";
import image22 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_022.jpg";
import image23 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_023.jpg";
import image24 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_024.jpg";
import image25 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_025.jpg";
import image26 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_026.jpg";
import image27 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_027.jpg";
import image28 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_028.jpg";
import image29 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_029.jpg";
import image30 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_030.jpg";
import image31 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_031.jpg";
import image32 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_032.jpg";
import image33 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_033.jpg";
import image34 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_034.jpg";
import image35 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_035.jpg";
import image36 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_036.jpg";
import image37 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_037.jpg";
import image38 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_038.jpg";
import image39 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_039.jpg";
import image40 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_040.jpg";
import image41 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_041.jpg";
import image42 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_042.jpg";
import image43 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_043.jpg";
import image44 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_044.jpg";
import image45 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_045.jpg";
import image46 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_046.jpg";
import image47 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_047.jpg";
import image48 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_048.jpg";
import image49 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_049.jpg";
import image50 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_050.jpg";
import image51 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_051.jpg";
import image52 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_052.jpg";
import image53 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_053.jpg";
import image54 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_054.jpg";
import image55 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_055.jpg";
import image56 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_056.jpg";
import image57 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_057.jpg";
import image58 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_058.jpg";
import image59 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_059.jpg";
import image60 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_060.jpg";
import image61 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_061.jpg";
import image62 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_062.jpg";
import image63 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_063.jpg";
import image64 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_064.jpg";
import image65 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_065.jpg";
import image66 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_066.jpg";
import image67 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_067.jpg";
import image68 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_068.jpg";
import image69 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_069.jpg";
import image70 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_070.jpg";
import image71 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_071.jpg";
import image72 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_072.jpg";
import image73 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_073.jpg";
import image74 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_074.jpg";
import image75 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_075.jpg";
import image76 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_076.jpg";
import image77 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_077.jpg";
import image78 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_078.jpg";
import image79 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_079.jpg";
import image80 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_080.jpg";
import image81 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_081.jpg";
import image82 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_082.jpg";
import image83 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_083.jpg";
import image84 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_084.jpg";
import image85 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_085.jpg";
import image86 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_086.jpg";
import image87 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_087.jpg";
import image88 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_088.jpg";
import image89 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_089.jpg";
import image90 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_090.jpg";
import image91 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_091.jpg";
import image92 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_092.jpg";
import image93 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_093.jpg";
import image94 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_094.jpg";
import image95 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_095.jpg";
import image96 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_096.jpg";
import image97 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_097.jpg";
import image98 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_098.jpg";
import image99 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_099.jpg";
import image100 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_100.jpg";
import image101 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_101.jpg";
import image102 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_102.jpg";
import image103 from "../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_103.jpg";

const PhotoGallery2007 = () => {
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
    image88,
    image89,
    image90,
    image91,
    image92,
    image93,
    image94,
    image95,
    image96,
    image97,
    image98,
    image99,
    image100,
    image101,
    image102,
    image103,
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
    <div className="PhotoGallery2007-container">
      <h1>FOBANA PHOTO GALLERY 2007</h1>
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

export default PhotoGallery2007;
