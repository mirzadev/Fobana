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
          text={
            <>
              <div className="text-line">
                <span className="bold-navy">Host:</span> Midcontinental
                Bangladesh Association & Bangladesh Association of Greater
                Kansas City.
              </div>
              <div className="text-line">
                <span className="bold-navy">Date:</span> Labor Day Weekend,
                August 31 - September 2, 2007.
              </div>
              <div className="text-line">
                <span className="bold-navy">Venue:</span> Century II Convention
                Center, Wichita, KS
              </div>
              <div className="text-line">
                <span className="bold-navy">Convener:</span> Rabiul Karim Belal
                &<span className="bold-navy"> Member Secretary:</span> Rehan
                Reza
              </div>
            </>
          }
          url="/fobana2007"
        />
        <PhotoGalleryData
          image={PhotoGallery2}
          heading="FOBANA-2008"
          text={
            <>
              <div className="text-line">
                <span className="bold-navy">Host:</span> Bangladesh Association
                of North Texas (BANT)
              </div>
              <div className="text-line">
                <span className="bold-navy">Date:</span> 4th of July Weekend -
                July 3rd, July 4th and July 5th, 2008.
              </div>
              <div className="text-line">
                <span className="bold-navy">Venue:</span> Dallas Convention
                Center Theatre Complex, Downtown Dallas, Texas.
              </div>
              <div className="text-line">
                <span className="bold-navy">Convener:</span> Hashmat Mobin &
                <span className="bold-navy"> Member Secretary:</span> Sarwar
                Kamal
              </div>
            </>
          }
          url="/fobana2008"
        />
        <PhotoGalleryData
          image={PhotoGallery3}
          heading="FOBANA-2009"
          text={
            <>
              <div className="text-line">
                <span className="bold-navy">Host:</span> Bangladesh Association,
                Houston.
              </div>
              <div className="text-line">
                <span className="bold-navy">Date:</span> 4th of July Weekend -
                July 2nd, July 3rd and July 4th, 2008.
              </div>
              <div className="text-line">
                <span className="bold-navy">Venue:</span> George R. Brown
                Convention Center, Houston, Texas.
              </div>
              <div className="text-line">
                <span className="bold-navy">Convener:</span> Afzal Ahmed &
                <span className="bold-navy"> Member Secretary:</span> Azadul Haq
              </div>
            </>
          }
          url="/fobana2009"
        />
        <PhotoGalleryData
          image={PhotoGallery4}
          heading="FOBANA-2012"
          text={
            <>
              <div className="text-line">
                <span className="bold-navy">Host:</span> Bangladesh Foundation
                of Florida.
              </div>
              <div className="text-line">
                <span className="bold-navy">Date:</span> August 31 & September
                1, September 2, 2012.
              </div>
              <div className="text-line">
                <span className="bold-navy">Venue:</span> Broward County
                Convention Center, Fort Lauderdale, Florida.
              </div>
              <div className="text-line">
                <span className="bold-navy">Convener:</span> Atiquer Rahman &
                <span className="bold-navy"> Member Secretary:</span> Mujib
                Uddin
              </div>
            </>
          }
          url="/fobana2012"
        />
        <PhotoGalleryData
          image={PhotoGallery5}
          heading="FOBANA-2013"
          text={
            <>
              <div className="text-line">
                <span className="bold-navy">Host:</span> Bangladesh American
                Association of Georgia.
              </div>
              <div className="text-line">
                <span className="bold-navy">Date:</span> August 30, August 31 &
                September 1, 2013.
              </div>
              <div className="text-line">
                <span className="bold-navy">Venue:</span> Cobb Galleria Centre,
                Atlanta, Georgia.
              </div>
              <div className="text-line">
                <span className="bold-navy">Convener:</span> Duke Khan &
                <span className="bold-navy"> Member Secretary:</span> M Mowla
                Dilu
              </div>
            </>
          }
          url="/fobana2013"
        />
        <PhotoGalleryData
          image={PhotoGallery6}
          heading="FOBANA-2017"
          text={
            <>
              <div className="text-line">
                <span className="bold-navy">Host:</span> Bangladesh Association
                of Florida.
              </div>
              <div className="text-line">
                <span className="bold-navy">Date:</span> October 6, October 7 &
                October 8, 2017.
              </div>
              <div className="text-line">
                <span className="bold-navy">Venue:</span> Hyatt Regency Miami,
                Florida.
              </div>
              <div className="text-line">
                <span className="bold-navy">Convener:</span> M. Rahman Zahir &
                <span className="bold-navy"> Member Secretary:</span> Ali Ahmed
                Ashraf.
              </div>
            </>
          }
          url="/fobana2017"
        />

        <PhotoGalleryData
          image={PhotoGallery7}
          heading="FOBANA21"
          text={
            <>
              <div className="text-line">
                <span className="bold-navy">Host:</span> American Bangladesh
                Friendship Society.
              </div>
              <div className="text-line">
                <span className="bold-navy">Date:</span> November 26 & November
                28, 2021.
              </div>
              <div className="text-line">
                <span className="bold-navy">Venue:</span> Gaylord National
                Resort & Convention Center.
              </div>
              <div className="text-line">
                <span className="bold-navy">Convener:</span> ZI Russel &
                <span className="bold-navy"> Member Secretary:</span> Shibbir
                Ahmed.
              </div>
            </>
          }
          url="/fobana2021"
        />
      </div>
    </div>
  );
}

export default PhotoGalleryAll;
