import React from 'react'
import {Link} from "react-router-dom"
import './Footer.css';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer-con'>
        <div className='footer-links'>
          <Link className='fliptext' data-hover="GITHUB" to="https://github.com/vibeauratech">GITHUB</Link>
          <Link className='fliptext' data-hover="LINKEDIN" to="https://www.linkedin.com/in/emmanuel-akharia-7a8ab0245/">lINKEDIN</Link>
          <Link className='fliptext' data-hover="TWITTER" to="https://twitter.com/nuel_dev">TWITTER</Link>
          <Link className='fliptext' data-hover="BEHANCE" to="/">BEHANCE</Link>
        </div>

        <div className='copyright'>
          <span>&copy; 2022 NUELDEV</span>
        </div>
      </div>    
    </div>
  )
}

export default Footer;