import React, { useEffect } from "react";
import "./hero.css"; // Assuming your styles are in a file named style.css

const Hero = () => {
  useEffect(() => {
    const mountainRight = document.querySelector("#mountain_right");
    const cloud1 = document.querySelector("#clouds_1");
    const cloud2 = document.querySelector("#clouds_2");
    const text = document.querySelector("#text");
    const man = document.querySelector("#man");

    const handleScroll = () => {
      let value = window.scrollY;
      mountainRight.style.left = `${value / 0.7}px`;
      cloud1.style.left = `${value * 2}px`;
      cloud2.style.left = `-${value * 2}px`;
      text.style.bottom = `-${value}px`;
      man.style.height = `${window.innerHeight - value}px`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white w-full h-screen flex flex-col items-center ">
      <section id="top">
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/bg.jpg"
          id="bg"
          alt="Background"
        />
        <h2 id="text">WolrdAir</h2>
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/man.png"
          id="man"
          alt="Man"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png"
          id="clouds_1"
          alt="Clouds 1"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png"
          id="clouds_2"
          alt="Clouds 2"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png"
          id="mountain_left"
          alt="Mountain Left"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png"
          id="mountain_right"
          alt="Mountain Right"
        />
      </section>
      <section id="sec">
        <h2>Welcome to the WorldAir</h2>
        <p>World Air Tours and Travels Where Adventure Takes Flight!</p>
      </section>
    </div>
  );
};

export default Hero;
