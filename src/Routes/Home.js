import Navbar from "../Components/NavbarItems/Navbar";
import HomeItems from "../Components/HomePage/HomeItems";
import YouthGallery from "../Components/Youth-Forum/YouthPage";
import Carousel from "../Components/Carousel/CarouselFunc";
import ExecComCarousel from "../Components/ExComCarousel/ExComCarouselFunc";
import StngComCarousel from "../Components/StngComCarousel/StngComCarouselFunc";
import Footer from "../Components/Footer/Footer";
import Advertisement from "../Components/AnnualAdvertisement/Advertisement";
import MediaPatCarousel from "../Components/MediaPartners/MedPatCarouselFunc";
import SponsorsCarousel from "../Components/Sponsors/SponsorsCarouselFunc";
import MediaFriendsCarousel from "../Components/MediaFriends/MedFrdCarouselFunc";
function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <HomeItems />
      <ExecComCarousel />
      <StngComCarousel />
      <Advertisement />
      <YouthGallery />
      <MediaPatCarousel />
      <SponsorsCarousel />
      <MediaFriendsCarousel />
      <Footer />
    </>
  );
}

export default Home;
