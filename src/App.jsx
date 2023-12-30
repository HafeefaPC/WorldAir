import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Services from "./pages/Services/service";
import Contact from "./pages/Contact/contact";
import Help from "./pages/Help/help";
import Gallery from "./pages/Gallery/gallery";
import "./index.css";
import AboutUs from "./pages/About/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/helpcenter" element={<Help />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
