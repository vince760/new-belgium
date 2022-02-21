import React from "react";
import { useSpring, animated } from "react-spring";
import heroImage from "../images/hero.jpg";
import cans from "../images/cans.png";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  const heroStyles = useSpring({
    to: { opacity: 1.5 },
    from: { opacity: 0 },
    delay: 600,
  });

  const canStyles = useSpring({
    to: { opacity: 1.5 },
    from: { opacity: 0 },
    delay: 1600,
  });

  const redirect = () => {
    window.open("https://www.newbelgium.com/beer/fruit-smash/", "_blank");
  };

  return (
    <div>
      <div>
        <animated.div style={heroStyles}>
          <div id="heroContent">
            <h1 id="header">SAY BYE</h1>
            <br />
            <span id="subHeader">TO BASIC SELTZERING</span>
            <br />
            <button onClick={redirect} id="learnButton">
              FIND NEAR YOU <BsArrowRight />
            </button>
          </div>
          <img id="heroImage" src={heroImage} alt="Hero" />
        </animated.div>
      </div>

      <div>
        {" "}
        <animated.div style={canStyles}>
          <img id="cans" src={cans} alt="Cans" />
        </animated.div>
      </div>
    </div>
  );
};

export default Hero;
