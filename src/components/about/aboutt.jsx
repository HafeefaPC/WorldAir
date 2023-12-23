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
    <div className="bg-white w-full flex flex-col items-center">
      <div className="flex space-x-4 p-4">
        <h1 className="text-4xl font-bold tracking-wide">About Us</h1>
        <img src={ticket} className="" alt="Ticket" />
      </div>
      <img src={curve} className="" alt="Curve" />
      <div
        className="flex items-center justify-between gap-[10rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <animated.div
          className="rounded-md border-2 border-blue-900 p-4 flex flex-col gap-5 items-center"
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
          className=""
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
