import Navbar from "../Components/NavbarItems/Navbar";
import HomeItems from "../Components/HomePage/HomeItems";
// import FeaturedAlbum from "../Component/HomeFeature/FeaturedAlbum";
// import Footer from "../Component/Footer/Footer";
import Carousel from "../Components/Carousel/CarouselFunc";
import ExecComCarousel from "../Components/ExComCarousel/ExComCarouselFunc";
import StngComCarousel from "../Components/StngComCarousel/StngComCarouselFunc";
import Footer from "../Components/Footer/Footer";
import Advertisement from "../Components/AnnualAdvertisement/Advertisement";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <HomeItems />
      <ExecComCarousel />
      <StngComCarousel />
      <Advertisement />
      <Footer />
      {/* <FeaturedAlbum />
      <Footer /> */}
    </>
  );
}

export default Home;
