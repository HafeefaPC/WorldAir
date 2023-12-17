import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Carousel } from "react-bootstrap";
import home from "../../assets/home.jpg";
import img2 from "../../assets/img2.png";
import curve from "../../assets/curve.svg";
import ticket from "../../assets/ticket.svg";
import travel from "../../assets/travel.svg";
import card from "../../components/card/card";
import Servicecard from "../../components/Sevice/serviccarde";
import img1 from "../../assets/img1.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

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
      <div className="bg-white w-full h-screen flex flex-col  items-center">
        <div className="flex space-x-4 p-4">
          <h1 className="text-4xl font-bold tracking-wide">About Us</h1>
          <img src={ticket} className="" alt="Ticket" />
        </div>
        <img src={curve} className=" " alt="Curve" />
        <div className="flex  items-center justify-between gap-1/2">
          <p className="text-xl text-center">
            Here we arrive as your trusted companion <br /> in the world of
            exploration, where every second counts <br /> and every connection
            matters. In the dynamic
            <br />
            realm of global commerce, where opportunities <br /> are boundless
            and distances are mere numbers, <br /> we elevate your journey to
            new heights.
          </p>
          {/* <button>Learn More </button> */}
          <img src={travel} className="" alt="Travel" />
        </div>
      </div>
      <div className="bg-white w-full h-screen flex flex-col items-center">
        <h1>Services</h1>

        <div>
          <div className="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-7 gap-5 ">
            <Servicecard
              style="flex justify-between gap-1/2 items-center rounded-3xl bg-[#004E89] h-60 w-[100%]"
              name="Accommodation"
              img={img1}
              imgstyle="absolute lg:ml-[11.9rem] mt-[8.4rem] sm:mr-[22rem] rounded-3xl"
              para="Hotel Reservations Service ApartmentsHouseboat accommodationHome Stays"
            />
            <Servicecard
              style="flex justify-between gap-1/2 items-center w-[180%] rounded-3xl bg-[#5885AF] h-60"
              name="Tours"
              img={img2}
              imgstyle="absolute lg:ml-[19rem] mt-[2rem] sm:mr-[22rem] rounded-3xl"
              para="Inbound & Outbound ToursIncentive ToursVillage ToursSpices & Tea Plantation Tours"
            />
          </div>
          <div className="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-7 ">
            <Servicecard
              style="flex justify-between gap-1/2 items-center w-[180%] rounded-3xl bg-[#60A3D9] h-60"
              name="Transportation Essentials"
              img={img3}
              imgstyle="absolute lg:ml-[19rem] mt-[2rem] sm:mr-[22rem] rounded-3xl"
              para="Car/Coach RentalsAir TicketsTrain Ticketing"
            />
            <Servicecard
              style="flex justify-between gap-1/2 items-center  rounded-3xl bg-[#125D95] h-60 w-[100%]"
              name="Other Services"
              img={img4}
              imgstyle="absolute lg:ml-[9.8rem] mt-[9.4rem] sm:mr-[22rem] rounded-3xl"
              para="ConferencesE - Ticketing"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
