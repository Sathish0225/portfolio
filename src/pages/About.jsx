import React from 'react';
import Skills from '../Components/Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import { ImPointRight } from "react-icons/im";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">Let Me <b>Introduce</b> Myself!</h1>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am Sathishkumar Ranganathan from <b>Tamil Nadu, India.</b><br />
            I am currently employed as a software developer at Pedro.<br />
            I have completed a BE/B.Tech in Computer Science and Engineering at Panimalar Engineering College (Chennai, Tamil Nadu).
            <br /><br />
            I am a quick learner and a hard worker. I am also a team player.<br /><br />
            Apart from coding, some other activities that I love to do!<br />
          </p>
          <ul className="AboutActivityList">
            <li className='AboutActivity'>
              <ImPointRight /> Playing Sports like <b>Basketball, Table Tennis & Cricket</b>.
            </li>
            <li className='AboutActivity'>
              <ImPointRight /> Writing blogs.
            </li>
            <li className='AboutActivity'>
              <ImPointRight /> Travelling.
            </li>
            <li className='AboutActivity'>
              <ImPointRight /> Ridding Bikes & Cars.
            </li>
          </ul>
        </div>
        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>



      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='Php' />
        <Skills skill='Flutter' />
        <Skills skill='MongoDb' />
        <Skills skill='MySql' />
        <Skills skill='SqlServer' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C#' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
      </div>

    </>
  )
}

export default About
