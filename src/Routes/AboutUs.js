import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer/Footer";
import About from "../Components/AboutMain/About";
// import AboutFobana from "../Components/AboutFobana/AboutFobana";
// import ExecComAbout from "../Components/AboutExecCom/ExComAbout";
// import ContactUs from "../Components/ContactUs/ContactUs";

function AboutUs() {
  return (
    <>
      <Navbar />
      <About />
      {/* <AboutFobana />
      <ExecComAbout />
      <ContactUs /> */}
      <Footer />
    </>
  );
}

export default AboutUs;
