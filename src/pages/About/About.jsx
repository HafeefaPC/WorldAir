import React from 'react';

import Navbar from '../../components/Navbar/navbar'
// import Map from '../../components/Map/Map';
// import logo from '../../assets/logo.png'

import './about.css'
import N3 from '../../assets/N3.jpg'

import N2 from '../../assets/N2.jpg'
import N1  from '../../assets/N1.jpg'
import A1 from '../../assets/A1.jpg'
import Footer from '../../components/Footer/footer'
import MyCarousel from '../../components/Carousel/Carousel';

const AboutUs = () => {
  return (
    <div>
      <Navbar/> 
      <MyCarousel/>


      <div class="main">
  <h1 id='headstay'>Exclusive Stays and Offers</h1>
  <ul class="cards">
    <li class="cards_item">
      <div class="cardn">
        <div class="card_image"><img src={N1}/></div>
        <div class="card_content">
          <h2 class="card_title">Nidhi Residency</h2>
          <p class="card_text">Enjoy a wonderful stay at heart of Guruvayur at Nidhi Residency Guruvayur</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="cardn">
        <div class="card_image"><img src={N2}/></div>
        <div class="card_content">
          <h2 class="card_title">Nidhi Resort Chettuva</h2>
          <p class="card_text">Enjoy the beauty of Chettuva Backwaters as you enjoy a wonderful stay at Nidhi Resort Chettuva</p>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="cardn">
        <div class="card_image"><img src={N3}/></div>
        <div class="card_content">
          <h2 class="card_title">Nakshatra Emerald</h2>
          <p class="card_text">Make your darshan at Guruvayur temple memorable as you stay at heart of Guruvayur</p>
          <button class="btn card_btn">Read More</button>
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
