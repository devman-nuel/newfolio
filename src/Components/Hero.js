import React from 'react'
import './Hero.css';
import {Link} from "react-router-dom"


function Hero() {
  return (
    <div className='hero'>
      <div className='hero-con'>
        <h2>Front-End Developer</h2>

        <div className='more-bio'>
          <div className='more-left'>
            <h2>&</h2>
            <span>Digital <br></br> Designer</span>
          </div>

          <div className='more-right'>
            <p>My name is Emmanuel, I create unique web experiences and solve problems with code and design
            </p>
            <Link className='nav-link' to="/About"><span className='fliptext' data-hover="More about me"> More about me</span>  </Link>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Hero;