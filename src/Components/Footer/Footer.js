import React from 'react'
import {Link} from "react-router-dom"
import './Footer.css';



const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-con'>
        <div className='footer-links'>
          <Link className='fliptext' data-hover="GITHUB" to="https://github.com/vibeauratech">GITHUB</Link>
          <Link className='fliptext' data-hover="LINKEDIN" to="https://www.linkedin.com/in/emmanuel-akharia-7a8ab0245/">LINKEDIN</Link>
          <Link className='fliptext' data-hover="TWITTER" to="https://twitter.com/nuel_dev">TWITTER</Link>
          <Link className='fliptext' data-hover="DRIBBLE" to="https://dribbble.com/Akharia">DRIBBLE</Link>
        </div>

        <div className='copyright'>
          <p>{currentYear} © DevMan_nuel</p>
        </div>
      </div>    
    </div>
  )
}

export default Footer;