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
                <button>
                  <a href="mailto:emmanuelakharia@gmail.com" target="_blank" rel="noopener noreferrer">Get in touch</a>        
                </button>
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
                <a href="" target="_blank" rel="noopener noreferrer">Dribble</a>
                <a href="" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a href="" target="_blank" rel="noopener noreferrer">Twitter</a> 
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