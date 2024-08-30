import React from 'react'
import { Link } from 'react-router-dom';
import  './Navbar.css'



const Navbar = () => {

    return (
        <div className='nav'>
           <div className='nav-container'>
            <div className='navbar'> 
                <div className='logo'>
                    <Link to="/">DevMan_nuel</Link>
                </div>

               <div className='nav-btn'>
                <button>Hire Me</button>
               </div>          
            </div>
           </div> 
        </div>       
    )
  }


export default Navbar