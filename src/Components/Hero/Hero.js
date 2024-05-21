import React from 'react'
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <div className='hero'>
      <h2>Digital Designer and Developer, I create unique web experiences and solve problems with code and design.</h2>

      <div className='hero-img'>
         <div className='line-about' >
           <div className='hero-line'></div>
           <Link to="/about" className='more-box'>About Me</Link>
         </div>

         <div>
           <img className='hero-image' src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716277829/17534_d5qgup.jpg' alt=''></img>
         </div>

         <div>
           <img className='hero-image' src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1716278034/zgc1993-Fk9RSVdJ6Q8-unsplash_j6yfxk.jpg' alt=''>
         </img></div>
      </div>

      
    
      
    </div>
  )
}



export default Hero;