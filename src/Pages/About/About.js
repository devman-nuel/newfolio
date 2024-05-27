import React from 'react'
import './About.css';

function About() {
  return (
    <div className='about'>
       <div className='stack'>
          <span>Tools/Stacks</span>

          <div className='stack-box'>
            <p>Figma, SCSS, SASS, Javascript, ReactJS, Firebase, MongoDB, NodeJS, Express, Typescript,
              React Native, Shopify, Framer-Motion, GSAP.
            </p>
          </div>
        </div>   

       <div className='job'>
        <h2>On the job</h2>

        <div className='job-box'>
            <div className='job-left'>
              <div className='design'>
                <span>Digital Design</span>
                <p>UX Research & Identity Improvement, User-flow, Prototyping, Motion Design, Art Direction</p>
              </div>

              <div className='development'>
                <span>Front-End Development / Engineering</span>
                <p> User Interface Architecture, Mobile Responsiveness, Web Performance, Security, Testing 
                    & Automation, Scalability, User Authentication, Payment Integration, API Integration, Web Animations
                </p>
              </div>          
            </div>

            <div className='job-right'>
         

            </div>
        </div>
       </div>  

        <div className='interest'>
          <span>INTEREST</span>

          <div className='interest-box'>
            <p> Music, Art, Creative Development, Football, 3d Design
            </p>
          </div>
        </div>  
     
    </div>
  )
}

export default About