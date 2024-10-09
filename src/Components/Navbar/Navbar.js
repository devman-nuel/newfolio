import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  './Navbar.css'




const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false); // Track menu visibility
  

    const toggleMenu = () => {
      setShowMenu(!showMenu); // Toggle menu visibility
    };

    return (
        <div className='nav'>
           <div className='nav-container'>
            <div className='navbar'> 
                <div className='logo'>
                    <Link to="/">DevMan_nuel</Link>
                </div>

               <div className='nav-btn'>
                <button>Get in touch</button>
               </div>   

                <div className='menu-toggle' onClick={toggleMenu}>
              <div className={showMenu ? "hamBox hamBoxOpen" : "hamBox"}>
                <span className={showMenu ? "lineTop spin" : "lineTop"}></span>
                <span className={showMenu ? "lineBottom spin" : "lineBottom"}></span>
              </div>
            </div>

            
            {showMenu && (
            <div className="fixed-component">
                <div className='menu-con'>
                <p>MENU</p>
                <h2>Dribble</h2>
                <h2>Linkedin</h2>
                <h2>Twitter</h2>
             
                <button>Get in touch</button>
                </div>
            </div>
            )}       
            </div>
           </div> 
        </div>       
    )
  }


export default Navbar