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
      </Routes>
    </div>
  );
}

export default App;
