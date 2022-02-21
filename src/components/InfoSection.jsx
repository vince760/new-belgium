import React from "react";
import pack from "../images/pack.jpg";
import { BsArrowRight } from "react-icons/bs";
import { useSpring, animated } from "react-spring";
const InfoSection = () => {
  const redirectToNB = () => {
    window.open("https://www.newbelgium.com/beer/fruit-smash/", "_blank");
  };
  const infoStyles = useSpring({
    to: { opacity: 1.5 },
    from: { opacity: 0 },
    delay: 1800,
  });
  return (
    <React.Fragment>
      <animated.div style={infoStyles}>
        <div className="col-md-12 row">
          <div className="col-md-6" id="infoDiv">
            <h1 id="infoHeader">
              SUPER HARD <br /> VARIETY PACK
            </h1>{" "}
            <p id="infoParagraph">
              Introducing <b>The New</b> Fruit Smash Super Hard <br /> Seltzer.
              A boozy seltzer made with real juice <br /> for a bolder taste
              that packs a punch
            </p>
            <button
              onClick={redirectToNB}
              className="pull-left"
              id="learnButton"
            >
              LEARN MORE <BsArrowRight />
            </button>
          </div>
          <div className="col-md-6">
            <img src={pack} alt="Pack" />
          </div>
        </div>
      </animated.div>
    </React.Fragment>
  );
};

export default InfoSection;
