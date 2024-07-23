import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "../Components/Typed";
import Tilt from 'react-parallax-tilt';
import Basketball from '../images/basketball.png';
import { MdSportsBasketball } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1 style={{ paddingBottom: 15 }}>Hi There! <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span></h1>
          <h1>I'M <b>SATHISHKUMAR RANGANATHAN</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />
      </div>
      <div className='AboutPage'>
        <div className="AboutText">
          <h1 className="AboutTextHeading">Let Me <b>Introduce</b> Myself</h1>
          <p>
            I love the process of turning a raw idea into a website or product that impacts lives.
            I strive to do work that challenges me as a developer and work that I can be proud of.<br /><br />
            I am fluent in <b>C#, PHP, and Flutter</b> and am working on a few projects in the <b>React</b>.<br /><br />
            I plan to learn <b>Three.js</b> and <b>Python</b> in the near future. <br /><br />
            Also, I love <b>sports</b> <MdSportsBasketball style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Basketball} alt="" />
        </Tilt>

      </div>
    </div>
  )
}

export default Home
