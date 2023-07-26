import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import Logo from "./Images/Logo.png";
import Download from "./Images/Download.png";

function Navbar() {
  return (
    <div className='nav'>
       <div className='nav-con'>
        <div className='logo'>
          <Link className='nav-link' to="/"> <img src={Logo} className="logo" alt="" /> </Link>
        </div>
        
        <div className='nav-links'>
          <div className='nav-item'>
            <Link className='nav-link' to="/">Home </Link>
          </div>

          <div className='nav-item'>
            <Link className='nav-link' to="/About">About </Link>
          </div>

          <div className='nav-item'>
            <Link className='nav-link' to="/project">Works </Link>
          </div>
        </div>

        <div className='CV'>
          <span>Download CV</span>
          <img src={Download} className="download" alt="" />     
        </div>
       </div>
    </div>
  )
}

export default Navbar
