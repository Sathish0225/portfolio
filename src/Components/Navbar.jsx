import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsPerson } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { FaBloggerB } from "react-icons/fa";

const Navbar = () => {
  const [navbarblur, setNavbarblur] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavbarblur(true);
    } else {
      setNavbarblur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  }

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>

      <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>SR</h1>

      <div className='Hamburger' onClick={showMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <ul className='NavbarLinks'>
        <li onClick={hideMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
        <li onClick={hideMenu}><Link to="/About"><BsPerson /> About</Link></li>
        <li onClick={hideMenu}><Link to="/Project"><AiOutlineFundProjectionScreen /> Project</Link></li>
        <li onClick={hideMenu}><Link to="/Blog"><FaBloggerB /> Blog</Link></li>
        <li onClick={hideMenu}><Link to="/Resume"><CgFileDocument /> Resume</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar
