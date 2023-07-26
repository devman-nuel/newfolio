import React from 'react'
import './Work.css';
import WorkImg from "./Images/Webstore2.png";
import Lone from "./Images/Lone Therapy.png";


function Work() {
    
  return (
    <div className='work'>
        <h2>Selected Works</h2>
        <h4>'22 - Present</h4>

      <div className='work-con'>
        <div className='work-box'>
            <div className='work-text'>
                <div>
                    <h2>Nuelwebstore</h2>
                    <p>An ecommerce web project for a fictional fashion brand. <br></br> <br></br>

                     Design Tool : Figma   <br></br> <br></br>
                     Built with : React, Redux Tool-Kit, MongoDB, Node JS, Stripe, Paystack and GSAP for animations. <br></br> <br></br> 
                     Features : User-Authentication, Payment Integration, API Integration, Search & Filter.
                    </p>
                </div>

                <div className='credits'>
                    <span>Credits</span>

                    <div className='credits-con'>
                        <div>
                            <button>Design</button>
                            <p>Nueldev</p>
                        </div>

                        <div>
                            <button>Development</button>
                            <p>Nueldev</p>
                        </div>
                    </div>
                   
                </div>
               

            </div>

            <div className='work-img'>
              <div className='primary-img'>
               <img src={WorkImg} className="download" alt="" /> 
              </div>

              <div className='secondary-img'>
                <img src={WorkImg} className="download" alt="" /> 
                <img src={WorkImg} className="download" alt="" /> 
                <img src={WorkImg} className="download" alt="" /> 
                <img src={WorkImg} className="download" alt="" /> 
                <img src={WorkImg} className="download" alt="" /> 
              </div>
            </div>
        </div>

        <div className='work-box'>
            <div className='work-text'>
                <div>
                    <h2>Frontax</h2>
                    <p>A Web3 Ticketing Website. <br></br> <br></br>

                     Design Tool : Figma   <br></br> <br></br>
                     Built with : React, MongoDB, Node JS and GSAP for animations. <br></br> <br></br> 
                     Features : User-Authentication, API Integration, Search & Filter.
                    </p>
                </div>

                <div className='credits'>
                    <span>Credits</span>

                    <div className='credits-con'>
                        <div>
                            <button>Design</button>
                            <p> David Alonge</p>
                        </div>

                        <div>
                            <button>Development</button>
                            <p>Nueldev</p>
                        </div>
                    </div>
                   
                </div>
               

            </div>

            <div className='work-img'>
              <div className='primary-img'>
               <img src={Lone} className="download" alt="" /> 
              </div>

              <div className='secondary-img'>
                <img src={Lone} className="download" alt="" /> 
                <img src={Lone} className="download" alt="" /> 
                <img src={Lone} className="download" alt="" /> 
                <img src={Lone} className="download" alt="" /> 
                <img src={Lone} className="download" alt="" /> 
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Work;