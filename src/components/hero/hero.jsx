import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Carousel } from "react-bootstrap"; // assuming you're using react-bootstrap for Carousel
import Home from "../../assets/home.jpg"

const AnimatedCarousel = () => {
  const [index, setIndex] = useState(0);

  // Define the spring animation styles
  const springStyles = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  // Handle slide change
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <animated.img
          className="d-block w-100 h-auto"
          src={Home}
          alt="First slide"
          style={springStyles}
        />
        <Carousel.Caption className="text-animation">
          <div className="text-center">
            <animated.h1 className="animated-text" style={springStyles}>
              World Air Tours and Travels
            </animated.h1>
            <animated.h1 className="animated-text" style={springStyles}>
              "Where Adventure Takes Flight!"
            </animated.h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <animated.img
          className="d-block w-100 h-auto"
          src={Home}
          alt="Second slide"
          style={springStyles}
        />
        <Carousel.Caption className="text-animation">
          <div className="text-center">
            <animated.h1 className="animated-text" style={springStyles}>
              Explore the World
            </animated.h1>
            <animated.h1 className="animated-text" style={springStyles}>
              Experience new adventures with us!
            </animated.h1>
            <animated.h1 className="animated-text" style={springStyles}>
              Book your journey now.
            </animated.h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AnimatedCarousel;
