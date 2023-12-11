import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/About';
import Services from './pages/Services/service';
import './index.css';




function App() {
  return (
  
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<About />} />
       
      </Routes>
    </Router>
  );
}

export default App;
