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
        {/* <Route path="/commercial" element={<Commercial />} />
        <Route path="/weddings" element={<Wedding />} />
        <Route path="/realestate" element={<RealEstate />} /> */}
      </Routes>
    </div>
  );
}

export default App;
