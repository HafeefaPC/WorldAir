import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Navbar from '../../components/Navbar/navbar'
// import Map from '../../components/Map/Map';
// import logo from '../../assets/logo.png'

import './about.css'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import N3 from '../../assets/N3.jpg'

import N2 from '../../assets/N2.jpg'
import N1  from '../../assets/N1.jpg'
import A1 from '../../assets/A1.jpg'
import Footer from '../../components/Footer/footer'
import Content from '../../components/Content/Content';


const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p1}
          alt="First slide"
          style={{height:"auto"}}
        />
        <Carousel.Caption id='carouselpara' style={{color:"white"}}>
        <div className="text-center">
            <h1 className="animated-text" id='text1'>Welcome to World Air Travel and Tour</h1>
            <h1 className="animated-text" id='text1'>Discover amazing destinations with us!</h1>
            <h1 className="animated-text">Plan your dream vacation today.</h1>
          </div>
         
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p2}
          alt="Second slide"
        />
        <Carousel.Caption style={{color:"white"}}>
          
        <div className="text-center">
            <h1 className="animated-text">Your Journey, Our Expertise</h1>
            <h1 className="animated-text">Wander Often, Wonder Always.</h1>
            <h1 className="animated-text">Let's Travel Together.</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p3}
          alt="Third slide"
        />
        <Carousel.Caption style={{color:"white"}}>
        <div className="text-center">
            <h1 className="animated-text">Your Passport to Adventure.</h1>
            <h1 className="animated-text">Experience new adventures with us!</h1>
            <h1 className="animated-text">Book your journey now.</h1>
          </div>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Content/>


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
