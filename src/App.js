import React from "react";
import "./App.css";
import "react-router-dom";
import Home from "./Routes/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavbarItems/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/weddings" element={<Wedding />} />
        <Route path="/realestate" element={<RealEstate />} /> */}
      </Routes>
    </div>
  );
}

export default App;
