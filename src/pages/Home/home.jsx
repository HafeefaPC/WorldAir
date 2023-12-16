import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Carousel } from "react-bootstrap";
import home from "../../assets/home.jpg";

// import p2 from "../../assets/p2.jpg";
import curve from "../../assets/curve.svg";
import ticket from "../../assets/ticket.svg";
import travel from "../../assets/travel.svg";
import card from "../../components/card/card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel fade>
  <Carousel.Item>
    <img className="d-block w-100 h-auto" src={home} alt="First slide" />
    <Carousel.Caption className="text-animation">
      <div className="text-center">
        <h1 className="animated-text"> World Air Tours and Travels </h1>
        <h1 className="animated-text">"Where Adventure Takes Flight!"</h1>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100 h-auto" src={home} alt="second slide" />
    <Carousel.Caption className="text-animation">
      <div className="text-center">
        <h1 className="animated-text">Explore the World</h1>
        <h1 className="animated-text">
          Experience new adventures with us!
        </h1>
        <h1 className="animated-text">Book your journey now.</h1>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div>
  
</div>

      <Footer/>
    </div>
  );
};

export default Home;
