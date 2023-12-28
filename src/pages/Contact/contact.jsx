import React from "react";
import "./Contact.css";
import contact from "../../assets/Images/contact.jpg";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer"

const Contact = () => (
  <>
    <Navbar />
    <div className="background-container">
      <div className="transparent-rectangle">
        <img src={contact} alt="Contact Background" />
        <h1>We're here for you</h1>
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span></span>
            <span>example@example.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span></span>
            <span>+91 99466 8466</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span></span>
            <span>
              Arafa Complex
              <br />
              Near Bus Stand
              <br />
              Kunnamkulam
            </span>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
);

export default Contact;
