import React from 'react';
import { Carousel } from 'react-bootstrap';
import Navbar from '../../components/Navbar/navbar'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import './about.css'

import { Container, Row, Col, Image } from 'react-bootstrap';

import { FaPlane, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div>
      <Navbar/> 
      <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={p1} alt="First slide" />
        <Carousel.Caption className="text-animation">
          <div className="text-center">
            <h1 className="animated-text">Welcome to TravelSite</h1>
            <h1 className="animated-text">Discover amazing destinations with us!</h1>
            <h1 className="animated-text">Plan your dream vacation today.</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={p2} alt="Second slide" />
        <Carousel.Caption className="text-animation">
          <div className="text-center">
            <h1 className="animated-text">Explore the World</h1>
            <h1 className="animated-text">Experience new adventures with us!</h1>
            <h1 className="animated-text">Book your journey now.</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
    </Carousel>

    </div>
  );
};

export default AboutUs;
