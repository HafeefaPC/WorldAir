import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="background-container">
    {/* Your content goes here */}
    <div className="transparent-rectangle">
      {/* Your content goes here */}
      <img src="C:/Users/91812/OneDrive/Desktop/WorldAir/Images/contact.jpg" alt="Contact Background" />
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
            Arafa Complex<br />
            Near Bus Stand<br />
            Kunnamkulam
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
