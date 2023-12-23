import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Carousel } from "react-bootstrap";
import home from "../../assets/home.jpg";
import img2 from "../../assets/img2.png";
import curve from "../../assets/curve.svg";
import ticket from "../../assets/ticket.svg";
import travel from "../../assets/travel.svg";
import Servicecard from "../../components/Sevice/serviccarde";
import Package from "../../components/package/package";
import Aboutt from "../../components/about/aboutt";
import Hero from "../../components/hero/hero"
import img1 from "../../assets/img1.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import hajj from "../../assets/hajj.png";
import hotel from "../../assets/hotel.png";
import visa from "../../assets/visa.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Aboutt/>
      <div className="bg-white w-full h-screen flex flex-col items-center ">
        <h1 className="text-4xl font-bold tracking-wide p-4 ">Services</h1>
        <div className="grid grid-cols-8 grid-rows-2 gap-4">
          <div className=" col-start-2 col-span-2">
            <Servicecard
              style="flex justify-between gap-1/2 items-center rounded-3xl bg-[#004E89] h-60 w-[100%]"
              name="Accommodation"
              img={img1}
              imgstyle="absolute lg:ml-[14.9rem] mt-[8.4rem] sm:mr-[22rem] rounded-3xl"
              para="Hotel Reservations Service ApartmentsHouseboat accommodationHome Stays"
            />
          </div>
          <div className="col-span-3">
            <Servicecard
              style="flex justify-between gap-1/2 items-center rounded-3xl bg-[#5885AF] h-60"
              name="Tours"
              img={img2}
              imgstyle="absolute lg:ml-[19rem] mt-[2rem] sm:mr-[22rem] rounded-3xl"
              para="Inbound & Outbound ToursIncentive ToursVillage ToursSpices & Tea Plantation Tours"
            />
          </div>
          <div className="col-start-2 col-span-3 row-start-2">
            <Servicecard
              style="flex justify-between gap-1/2 items-center rounded-3xl bg-[#60A3D9] h-60 "
              name="Accommodation"
              img={img3}
              imgstyle="absolute lg:ml-[19rem] mt-[2rem] sm:mr-[22rem] rounded-3xl"
              para="Hotel Reservations Service ApartmentsHouseboat accommodationHome Stays"
            />
          </div>
          <div className="col-start-5 col-span-">
            <Servicecard
              style="flex justify-between gap-1/2 items-center  w-[210%] rounded-3xl bg-[#125D95] h-60 "
              name="Tours"
              img={img4}
              imgstyle="absolute lg:ml-[12.5rem] mt-[9.4rem] sm:mr-[22rem] rounded-3xl"
              para="Inbound & Outbound ToursIncentive ToursVillage ToursSpices & Tea Plantation Tours"
            />
          </div>
        </div>
      </div>
      <div className="bg-white h-screen flex items-center overflow-x-auto p-4 space-x-4">
        <div className="flex flex-col p-3 gap-2">
          <h1 className="text-4xl font-bold tracking-wide flex-grow">
            Packages
          </h1>

          <a href="#" className="text-blue-500 hover:underline">
            View More
          </a>
        </div>
        <Package
          name="Hajj/Umrah"
          para="Embark on a sacred journey with our Hajj and Umra packages. Experience spirituality with carefully curated itineraries."
          img={hajj}
        />
        <Package
          name="Hotel Booking"
          para="Book your ideal stay effortlessly with our hotel booking services. Find comfort and convenience tailored to your preferences and budget."
          img={hotel}
        />
        <Package
          name="Visa"
          para="Simplify your travel plans with our visa services. We assist in obtaining visas for a seamless, stress-free experience on your tourist adventures."
          img={visa}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
