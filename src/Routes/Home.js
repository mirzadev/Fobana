import Navbar from "../Components/NavbarItems/Navbar";
import HomeItems from "../Components/HomePage/HomeItems";
// import FeaturedAlbum from "../Component/HomeFeature/FeaturedAlbum";
// import Footer from "../Component/Footer/Footer";
import Carousel from "../Components/Carousel/CarouselFunc";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <HomeItems />
      {/* <FeaturedAlbum />
      <Footer /> */}
    </>
  );
}

export default Home;
