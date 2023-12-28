import React from 'react';
import { Carousel,Card } from 'react-bootstrap';
import Navbar from '../../components/Navbar/navbar'
// import Map from '../../components/Map/Map';
// import logo from '../../assets/logo.png'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import './about.css'
import N2 from '../../assets/N2.jpg'
import N1  from '../../assets/N1.jpg'
import A1 from '../../assets/A1.jpg'
import Footer from '../../components/Footer/footer'

const AboutUs = () => {
  return (
    <div>
      <Navbar/> 
      <div className="main">
  <h1 id='headstay'>Exclusive Stays and Offers</h1>
  <ul className="cards">
    <li className="cards_item">
      <div className="cardn">
        <div className="card_image"><img src={N1}/></div>
        <div className="card_content">
          <h2 className="card_title">Nidhi Residency</h2>
          <p className="card_text">Enjoy a wonderful stay at heart of Guruvayur at Nidhi Residency Guruvayur</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="cardn">
        <div className="card_image"><img src={N2}/></div>
        <div className="card_content">
          <h2 className="card_title">Nidhi Resort Chettuva</h2>
          <p className="card_text">Enjoy the beauty of Chettuva Backwaters as you enjoy a wonderful stay at Nidhi Resort Chettuva</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="cardn">
        <div className="card_image"><img src={N2}/></div>
        <div className="card_content">
          <h2 className="card_title">Nakshatra Emerald</h2>
          <p className="card_text">Make your darshan at Guruvayur temple memorable as you stay at heart of Guruvayur</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
   
  </ul>
</div>


      
    <Footer/>
 </div>
  );
};

export default AboutUs;
