import React from 'react'
import './Hero.css';


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
            <p>My name is Emmanuel and I am passionate about solving problems with code and great designs
            </p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Hero;