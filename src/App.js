import React from "react";
import "./App.css";
import "react-router-dom";
import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavbarItems/Navbar";
import Contact from "./Routes/ContactUs";
import FobanaAbout from "./Routes/FobanaAbout";
import AboutExecCom from "./Routes/AboutExecCom";
import ConstBylaws from "./Routes/ConstBylaws";
import FobanaDocuments from "./Routes/FobanaDocuments";
import StdCommittees from "./Routes/StdCommittee";
import AnnualReportPage from "./Routes/AnnualReportPage";
import Convention from "./Routes/Convention";
import Sponsors from "./Routes/SponsorsMain";
import FAQ from "./Routes/FreqAskedQues";
import PhotoGallery from "./Routes/FOBANAPhotoGalley";
import FobanaVDO from "./Routes/FobanaVDO";
import Publications from "./Routes/Publications";
import MultimediaGallery from "./Routes/MultimediaGallery";
import PhotoGallery2007 from "./Components/Multimedia/PhotoGallery2007/PhotoGallery2007";
import PhotoGallery2008 from "./Components/Multimedia/PhotoGallery2008/PhotoGallery2008";
import PhotoGallery2009 from "./Components/Multimedia/PhotoGallery2009/PhotoGallery2009";
import PhotoGallery2012 from "./Components/Multimedia/PhotoGallery2012/PhotoGallery2012";
import PhotoGallery2013 from "./Components/Multimedia/PhotoGallery2013/PhotoGallery2013";
import PhotoGallery2017 from "./Components/Multimedia/PhotoGallery2017/PhotoGallery2017";
import PhotoGallery2021 from "./Components/Multimedia/PhotoGallery2021/PhotoGallery2021";
import NewsLink from "./Routes/NewsLink";
import BDArtist from "./Routes/BDArtists";
import BDScholars from "./Routes/BDScholars";
import MembershipForm from "./Routes/MembershipForm";
import ExecMembershipFormDetails from "./Components/Membership/Exec-Com-Nomi/ExecComNomiFormDetails";
import MembershipBenefits from "./Routes/MembershipBenefits";
import Membership from "./Routes/Membership";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/aboutFobana" element={<FobanaAbout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/execCommMem" element={<AboutExecCom />} />
        <Route path="/constitution" element={<ConstBylaws />} />
        <Route path="/documents" element={<FobanaDocuments />} />
        <Route path="/standingCommittee" element={<StdCommittees />} />
        <Route path="/annualReport" element={<AnnualReportPage />} />
        <Route path="/convention" element={<Convention />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/photoGallery" element={<PhotoGallery />} />
        <Route path="/videos" element={<FobanaVDO />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/multimedia" element={<MultimediaGallery />} />
        <Route path="/fobana2007" element={<PhotoGallery2007 />} />
        <Route path="/fobana2008" element={<PhotoGallery2008 />} />
        <Route path="/fobana2009" element={<PhotoGallery2009 />} />
        <Route path="/fobana2012" element={<PhotoGallery2012 />} />
        <Route path="/fobana2013" element={<PhotoGallery2013 />} />
        <Route path="/fobana2017" element={<PhotoGallery2017 />} />
        <Route path="/fobana2021" element={<PhotoGallery2021 />} />
        <Route path="/newsLinks" element={<NewsLink />} />
        <Route path="/bdArtist" element={<BDArtist />} />
        <Route path="/bdScholars" element={<BDScholars />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/membershipForm" element={<MembershipForm />} />
        <Route path="/execmemberForm" element={<ExecMembershipFormDetails />} />
        <Route path="/membersBenefit" element={<MembershipBenefits />} />
      </Routes>
    </div>
  );
}

export default App;
