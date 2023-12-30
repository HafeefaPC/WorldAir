import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Carousel } from "react-bootstrap";
import home from "../../assets/home.jpg";
import img2 from "../../assets/trr.png";

import Servicecard from "../../components/Sevice/serviccarde";
import Package from "../../components/package/package";
import Aboutt from "../../components/about/aboutt";
import Hero from "../../components/hero/hero";
import img1 from "../../assets/Acco.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/serrrr.png";
import hajj from "../../assets/hajj.png";
import hotel from "../../assets/hotel.png";
import visa from "../../assets/visa.png";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-white h-1"></div>
      <Hero />
      <div className="bg-white h-5"></div>
      <Aboutt />
      <div className="bg-white h-2"></div>
      <div className="bg-white w-full h-screen flex flex-col relative overflow-hidden  ">
        <h1 className="text-4xl font-bold tracking-wide p-4 ">Services</h1>
        <div className="bg-white h-9"></div>
        <div className="grid grid-cols-4 sm:grid-rows-4 md:grid-cols-4 lg:grid-cols-5  md:grid-rows-4 lg:grid-rows-2 gap-4">
          <div className=" relative col-start-2 lg:col-start-2 lg:col-span-1 col-span-2 ">
            <Servicecard
              style=" flex justify-between gap-1/2 items-center rounded-3xl bg-[#004E89] h-60 "
              name="Accommodation"
              img={img1}
              imgstyle="absolute left-[50%] top-[49%] w-32 hidden  lg:block  rounded-3xl"
              para="Hotel Reservations Service ApartmentsHouseboat accommodationHome Stays"
            />
          </div>
          <div className="md:col-span-2  lg:col-span-2 md:col-start-2 col-start-2 col-span-2 ">
            <Servicecard
              style="relative flex justify-between gap-1/2 items-center rounded-3xl bg-[#5885AF] h-60"
              name="Tours"
              img={img2}
              imgstyle="absolute left-[55%] hidden w-48 lg:block   rounded-3xl"
              para="Inbound & Outbound ToursIncentive ToursVillage ToursSpices & Tea Plantation Tours"
            />
          </div>
          <div className="relative col-start-2  sm:col-start-2 md:col-start-2 lg:col-start-2 col-span-2 md:col-span-2 lg:col-span-2 lg:row-start-2 ">
            <Servicecard
              style=" flex justify-between gap-1/2 items-center rounded-3xl bg-[#60A3D9] h-60 "
              name="Transportation Essentials"
              img={img3}
              imgstyle="absolute left-[65%] w-1/4 hidden lg:block  rounded-3xl"
              para="Car/Coach RentalsAir TicketsTrain Ticketing"
            />
          </div>
          <div className="relative lg:col-start-4 lg:col-span-1 md:col-span-2 sm:col-start-2 md:col-start-2 md:row-start-4 row-start-4 col-start-2 col-span-1 lg:row-start-2 ">
            <Servicecard
              style=" flex justify-between gap-1/2  items-center  rounded-3xl bg-[#125D95] h-60 "
              name="Other  Services"
              img={img4}
              imgstyle="absolute left-[47%] top-[40%] w-36 hidden lg:block   rounded-3xl"
              para="ConferencesE - Ticketing  "
            />
          </div>
        </div>
      </div>

      <div className="bg-white lg:hidden h-screen mt-[6rem] lg:mt-[0rem] ">
        <h1 className="text-4xl font-bold block items-center flex-grow">
          Packages
        </h1>
        <a
          href="/contact"
          className="flex justify-center text-blue-500 hover:underline"
        >
          View More
        </a>
      </div>

      <div className="bg-white  h-full flex flex-col lg:flex-row  items-center mt-[-45rem] lg:mt-[0rem] p-4 space-x-4 ">
        <div className="hidden lg:flex lg:flex-col first-letter p-3 gap-2">
          <h1 className="text-4xl font-bold tracking-wide flex-grow">
            Packages
          </h1>
          <a href="/com" className="text-blue-500 hover:underline">
            View More
          </a>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-1  grid-cols-1  lg:mb-0  gap-3">
          <Package
            name="Hajj/Umrah"
            para="Embark on a sacred and transformative journey with our Hajj and Umra packages. Experience profound spirituality with carefully curated itineraries."
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
      </div>
      <Footer className="sm:absolute sm:bottom-0 sm:w-full" />
    </div>
  );
};

export default Home;
