import React from "react";
import Umra from "../../assets/Images/Umra.png";
import Hotelbooking from "../../assets/Images/Hotelbooking.jpg";
import visa from "../../assets/Images/visa.jpg";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./services.css";

const Service = () => {
  return (
    <div>
      <Navbar />
      <div className="rectangle-behind"></div>
      <div className="rectangle-box">
        <div className="white-box">
          <div className="wrapper">
            <h1>Our Services</h1>
          </div>
          <div className="content-box">
            <div className="card">
              <h2>Accommodation</h2>
              <p>
                <br />
                Hotel Reservation
                <br />
                Service Apartments
                <br />
                House Boat Stay
                <br />
                Home Stays
                <br />
                <br />
              </p>
            </div>
            {/* first service above */}
            <div className="card">
              <h2>Voyages</h2>
              <p>
                <br />
                Inbound & Outbound Tours
                <br />
                Incentive Tours
                <br />
                Village Tours
                <br />
                Botanica Tours
                <br />
                Cruises Holidays
              </p>
            </div>
            {/* second service above */}
            <div className="card">
              <h2>Other Services</h2>
              <p>
                <br />
                Car/Coach Rentals
                <br />
                Air Tickets
                <br />
                Conferences
                <br />
                Foreign Exchange
                <br />
                <br />
              </p>
            </div>
            {/* third service above */}
          </div>
        </div>
      </div>

      <div className="class-for-packages">
        <h1>
          <b>Exclusive Packages</b>
        </h1>
      </div>

      <div className="outer-package">
        <div className="package pack1">
          <div className="package-content">
            <img src={Umra} alt="Umra Package" />
            <div className="package-description">
              <h2>
                Embark on a Sacred Pilgrimage: Discover Our Hajj and Umrah
                Packages
              </h2>
              <p>
                <br />
                As the call to pilgrimage resonates, We invites you to
                experience the spiritual journey of a lifetime with our
                meticulously crafted Hajj/Umrah package. We are dedicated to
                providing an unparalleled experience that combines faith,
                comfort, and convenience.
              </p>
            </div>
          </div>
        </div>

        <div className="package pack2">
          <div className="package-content">
            <div className="package-description">
              <h2>
                Immerse Yourself in Luxe Living: Unveil Our Enchanting Hotel
                Packages!
              </h2>
              <p>
                <br />
                Prepare for an extraordinary escape with our exclusive hotel
                booking packages. Elevate your journey from ordinary to
                extraordinary as we invite you to discover unparalleled comfort
                and style. Find comfort and convenience tailored to your
                preferences and budget.
              </p>
            </div>
            <img src={Hotelbooking} alt="Hotel Booking" />
          </div>
        </div>

        <div className="package pack3">
          <div className="package-content">
            <img src={visa} alt="Visa Package" />
            <div className="package-description">
              <h2>
                Unlock Your Global Adventure: Visa Packages for Effortless
                Travel!
              </h2>
              <p>
                <br />
                Embark on your journey to far-flung destinations with ease,
                courtesy of our comprehensive Visa Packages. Navigating the
                world is made simple, ensuring your travel dreams become reality
                without the hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Service;
