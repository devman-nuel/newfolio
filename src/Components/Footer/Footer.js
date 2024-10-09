import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import './Footer.css';



function Footer() {


  const currentYear = new Date().getFullYear();

  const [londonTime, setLondonTime] = useState('');

  // Function to update London time
  const updateLondonTime = () => {
    const timeInLondon = new Intl.DateTimeFormat('en-GB', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZone: 'Europe/London',
    }).format(new Date());
    
    setLondonTime(timeInLondon);
  };

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(updateLondonTime, 1000);
    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);
  return (
    <div className='footer'>
      <div className='head-flex'>
        <div className='hero-head'>
          <h2  >Let’s create standout digital experiences together!</h2> 
        </div>
      </div>
      
      <button className='send-btn'>Send mail</button>

      <div className='footer-con'>
         <div>
          <span>SOCIAL MEDIA</span>
          <div className='footer-links'>
            <Link className='fliptext' data-hover="GITHUB" to="https://github.com/vibeauratech">GITHUB</Link>
            <Link className='fliptext' data-hover="LINKEDIN" to="https://www.linkedin.com/in/emmanuel-akharia-7a8ab0245/">LINKEDIN</Link>
            <Link className='fliptext' data-hover="TWITTER" to="https://twitter.com/nuel_dev">TWITTER</Link>
            <Link className='fliptext' data-hover="DRIBBLE" to="https://dribbble.com/Akharia">DRIBBLE</Link>
          </div>  
         </div>

        <div className='copyright'>
         <div>
            <span>TIME (LONDON, UK)</span>
            <p>{londonTime}</p> {/* Dynamic London time */}
          </div>

          <div>
            <span>DESIGN BY DEVMAN_NUEL</span>
            <p>{currentYear} © DevMan_nuel</p>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Footer;