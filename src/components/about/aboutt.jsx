import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ticket from "../../assets/ticket.svg";
import curve from "../../assets/curve.svg";
import travel from "../../assets/travel.svg";

const Aboutt = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the hover styles for the box
  const hoverBoxStyles = {
    translateX: isHovered ? -90 : 0,
  };

  // Define the hover styles for the travel image
  const hoverTravelStyles = {
    translateX: isHovered ? 90 : 0,
  };

  // Apply the spring animation for the box
  const boxStyles = useSpring(hoverBoxStyles);

  // Apply the spring animation for the travel image
  const travelStyles = useSpring(hoverTravelStyles);

  return (
    <div className="bg-white w-full h-full flex flex-col items-center relative">
      {/* Transparent box with light blue background covering the entire page */}
      <div className="absolute inset-0 bg-blue-100 opacity-80 z-0"></div>

      <div className="flex items-center space-x-4 p-4 z-10 relative">
        <h1 className="text-4xl font-bold tracking-wide z-10">About Us</h1>
        <img src={ticket} className="z-10 relative" alt="Ticket" />
      </div>
      <img
        src={curve}
        className="z-10 relative"
        alt="Curve"
        style={{
          position: "relative", // Ensures that the curve is contained within the transparent box
          zIndex: 10, // Places the curve on top of the transparent box
        }}
      />
      <div
        className="flex items-center justify-between gap-[10rem] z-10 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <animated.div
          className="rounded-md border-2 border-blue-900 p-4 flex flex-col gap-5 items-center z-10 relative"
          style={{
            transform: boxStyles.translateX.interpolate(
              (x) => `translateX(${x}px)`
            ),
          }}
        >
          <p className="text-xl text-center">
            Here we arrive as your trusted companion <br /> in the world of
            exploration, where every second counts <br /> and every connection
            matters. In the dynamic
            <br />
            realm of global commerce, where opportunities <br /> are boundless
            and distances are mere numbers, <br /> we elevate your journey to
            new heights.
          </p>
          <button className="border-2 border-[#005FA8] hover:bg-[#005FA8] hover:text-white w-1/2 p-2 text-[#005FA8] rounded-3xl transition-all">
            Learn More
          </button>
        </animated.div>
        <animated.img
          src={travel}
          className="z-10 relative"
          alt="Travel"
          style={{
            transform: travelStyles.translateX.interpolate(
              (x) => `translateX(${x}px)`
            ),
          }}
        />
      </div>
    </div>
  );
};

export default Aboutt;
