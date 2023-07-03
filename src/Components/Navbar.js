import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <div className='nav'>
      <div className='logo'>
        <Link className='nav-link' to="/">NuelDev </Link>
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
    </div>
  )
}

export default Navbar
