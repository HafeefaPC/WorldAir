import React from 'react';
import { Carousel,Card } from 'react-bootstrap';
import Navbar from '../../components/Navbar/navbar'
// import Map from '../../components/Map/Map';
// import logo from '../../assets/logo.png'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import './about.css'
import A1 from '../../assets/A1.jpg'

import { Container, Row, Col, Image } from 'react-bootstrap';

import { FaPlane, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ExclusiveStays from '../../components/ECard/ECard';

const AboutUs = () => {
  return (
    <div>
      <Navbar/> 
      <Carousel fade>
      <Carousel.Item style={{height:'500px'}}>
        <img className="d-block w-100" src={p1} alt="First slide" />
        
        <Carousel.Caption className="text-animation">
      
          <div className="text-center">
            <h1 className="animated-text">World Air Travel and Tour</h1>
            <h1 className="animated-text">Discover amazing destinations with us!</h1>
            <h1 className="animated-text">Plan your dream vacation today.</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'500px'}}>
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
    <section className="about-section py-5">
      <div className="bg-light">
        <Container>
          <Row className="align-items-center">
         
            <Col md={6}>
              <div className="pl-md-5">
                <h2 className="mb-4 text-primary">About World Air Travel and Tour</h2>
                <p id='para'>
                  World Air Travel and Tour is dedicated to providing exceptional travel experiences
                  to our customers. We specialize in crafting unforgettable journeys that cater to
                  every aspect of your travel needs.
                </p>
                <p id='para'>
                  Our team consists of passionate travel experts who are committed to ensuring your
                  journey is seamless and filled with delightful moments.
                </p>
                <p id='para'>
                  Whether it's a thrilling adventure, a relaxing getaway, or a cultural exploration,
                  we are here to make your travel dreams a reality.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <Image id='a1' src={A1} fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    <ExclusiveStays/>
    <Footer />
    
    
 </div>
  );
};

export default AboutUs;
