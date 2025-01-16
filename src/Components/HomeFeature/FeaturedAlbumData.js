import "./FeaturedAlbumStyle.css";

function FeaturedAlbumData(props) {
  return (
    <div className="FeaturedAlbumDataCart">
      <div className="FeaturedAlbumDataCart-image">
        <img src={props.image} alt="image" />
      </div>
      <h2>{props.heading}</h2>
    </div>
  );
}

export default FeaturedAlbumData;
