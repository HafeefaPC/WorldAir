import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import ticket from "../../assets/ticket.svg";
import curve from "../../assets/curve.svg";
import { Link } from "react-router-dom";
import "./ab.css";

const Aboutt = () => {
  const [isHovered, setIsHovered] = useState(false);

  const liquidAnimation = useSpring({
    background: isHovered
      ? "linear-gradient(to right, #005FA8, transparent)"
      : "linear-gradient(to right, transparent , #0073C6)",
    config: { tension: 160, friction: 20 },
  });

  return (
    <div className="bg-white w-full h-full flex flex-col items-center relative">
      {/* Transparent box with light blue background covering the entire page */}
      <div className="absolute inset-0 bg-blue-100 opacity-80 z-0"></div>

      <div className="flex items-center space-x-4 p-4 z-10 relative">
        <h1 className="text-4xl font-bold tracking-wide z-10">About Us</h1>
        <img src={ticket} className="z-10 relative" alt="Ticket" />
      </div>

      <div
        className="rounded-md border-2 border-blue-900 p-4 flex flex-col gap-5 items-center z-10 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <animated.div
          className="liquid-mask"
          style={{
            height: "100%", // Adjust to the desired height
            width: "100%",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 1,
            ...liquidAnimation,
          }}
        ></animated.div>
        <animated.div
          className="liquid"
          style={{
            background: "#005FA8",
            height: liquidAnimation.height,
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        ></animated.div>
        <p className="text-xl  z-10 relative">
          Here we arrive as your trusted companion <br /> in the world of
          exploration, where every second counts <br /> and every connection
          matters. In the dynamic
          <br />
          realm of global commerce, where opportunities <br /> are boundless and
          distances are mere numbers, <br /> we elevate your journey to new
          heights.
        </p>
        <Link to="/about">
          <button className="border-2 border-[#005FA8] hover:bg-[#005FA8] hover:text-white w-48  p-2 text-[#005FA8] rounded-3xl transition-all z-10 relative">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Aboutt;
