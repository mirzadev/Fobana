import "./PhotoGalleryStyles.css";
import PhotoGalleryData from "./PhotoGalleryData";
import PhotoGallery1 from "../../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2007/FOBANA2007_018.jpg";
import PhotoGallery2 from "../../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2008/FOBANA_2008_026.jpg";
import PhotoGallery3 from "../../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2009/FOBANA_2009_053.jpg";
import PhotoGallery4 from "../../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2012/FOBANA_2012_002.jpg";
import PhotoGallery5 from "../../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2013/FOBANA_2013_037.jpg";
import PhotoGallery6 from "../../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2017/FOBANA_2017_001.jpg";
import PhotoGallery7 from "../../../../Assets/Multimedia/PhotoGallery/PhotoGallery_2021/FOBANA_2021_001.jpg";

function PhotoGalleryAll() {
  return (
    <div className="page-container">
      <h1>YEARLY PHOTO GALLERY</h1>
      <p>Select Your Galery To View</p>
      <div className="page-overview-cart">
        <PhotoGalleryData
          image={PhotoGallery1}
          heading="FOBANA-2007"
          text="FOBANA-2007 was organized in Florida under to leadership of Bangladesh Association of Florida"
          url="/fobana2007"
        />

        <PhotoGalleryData
          image={PhotoGallery2}
          heading="FOBANA-2008"
          text="FOBANA-2008 was organized in Florida under to leadership of Bangladesh Association of Florida"
          url="/fobana2008"
        />
        <PhotoGalleryData
          image={PhotoGallery3}
          heading="FOBANA-2009"
          text="FOBANA-2009 was organized in Florida under to leadership of Bangladesh Association of Florida"
          url="/fobana2009"
        />

        <PhotoGalleryData
          image={PhotoGallery4}
          heading="FOBANA-2012"
          text="FOBANA-2012 was organized in Florida under to leadership of Bangladesh Association of Florida"
          url="/fobana2012"
        />
        <PhotoGalleryData
          image={PhotoGallery5}
          heading="FOBANA-2013"
          text="FOBANA-2013 was organized in Atlanta, GA under to leadership of Bangladesh Association of Georgia"
          url="/fobana2013"
        />
        <PhotoGalleryData
          image={PhotoGallery6}
          heading="FOBANA-2017"
          text="FOBANA-2017 was organized in Florida under to leadership of Bangladesh Association of Florida"
          url="/fobana2017"
        />

        <PhotoGalleryData
          image={PhotoGallery7}
          heading="FOBANA21"
          text="FOBANA-2021 was organized in Florida under to leadership of Bangladesh Association of Florida"
          url="/fobana2021"
        />
      </div>
    </div>
  );
}

export default PhotoGalleryAll;
