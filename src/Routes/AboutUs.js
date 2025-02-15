import Navbar from "../Components/NavbarItems/Navbar";
import AboutUs from "../Components/About/AboutUs";
import Footer from "../Components/Footer/Footer";
import ExecComAbout from "../Components/About/ExecCom/ExComAbout";

function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <ExecComAbout />
      <Footer />
      {/* <FeaturedAlbum />
      <Footer /> */}
    </>
  );
}

export default About;
