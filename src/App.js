import React from "react";
import "./App.css";
import "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/AboutUs";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavbarItems/Navbar";
import AboutUs from "./Components/About/AboutUs";
import ExecComAbout from "./Components/About/ExecCom/ExComAbout";
import Contact from "./Routes/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aboutFobana" element={<AboutUs />} />
        <Route path="/execCommMem" element={<ExecComAbout />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/commercial" element={<Commercial />} />
        <Route path="/weddings" element={<Wedding />} />
        <Route path="/realestate" element={<RealEstate />} /> */}
      </Routes>
    </div>
  );
}

export default App;
