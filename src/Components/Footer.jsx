import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Designed by Sathishkumar Ranganathan</h4>
      <h4>Copyright &copy; {year} SR</h4>
      <div className='footerLinks'>
        <Link to="https://github.com/Sathish0225" target='_blank'><FaGithub /></Link>
        <Link to="https://www.linkedin.com/in/sathishkumar-ranganathan-a96626105" target='_blank'><FaLinkedin /></Link>
        <Link to='mailTo:rssathishkumar@icloud.com' target='_blank'><GrMail /></Link>
      </div>
    </footer>
  )
}

export default Footer