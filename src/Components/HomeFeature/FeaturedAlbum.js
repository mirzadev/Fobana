import "./FeaturedAlbumStyle.css";
import FeaturedAlbumData from "./FeaturedAlbumData";
import FeaturedAlbum1 from "../../Assets/HomePageImg/FeaturedAlbum-1.jpg";

function FeaturedAlbum() {
  return (
    <div className="home-event">
      <div className="home-event-cart">
        <FeaturedAlbumData image={FeaturedAlbum1} heading="Feature-1" />
        <FeaturedAlbumData image={FeaturedAlbum1} heading="Feature-2" />
      </div>

      <div className="home-event-cart">
        <FeaturedAlbumData image={FeaturedAlbum1} heading="Feature-3" />
        <FeaturedAlbumData image={FeaturedAlbum1} heading="Feature-4" />
      </div>

      <div className="home-event-cart">
        <FeaturedAlbumData image={FeaturedAlbum1} heading="Feature-5" />
        <FeaturedAlbumData image={FeaturedAlbum1} heading="Feature-6" />
      </div>

      <div className="home-event-cart">
        <FeaturedAlbumData image={FeaturedAlbum1} heading="Feature-7" />
        <FeaturedAlbumData image={FeaturedAlbum1} heading="Feature-8" />
      </div>
    </div>
  );
}

export default FeaturedAlbum;
