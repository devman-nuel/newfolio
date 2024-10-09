import React from 'react'
import './Skill.css';

function Skill() {
  return (
    <div className='skill'>
       <div className='skill-card'>
         <div className='skill-con'>
           <p>Here’s how I can help you:</p>

            <div className='skills'>
            <span>Designing and developing intuitive websites and mobile apps.</span>
            <span>Handling design and development tasks throughout the process.</span>
            <span>Creating user-centric B2B SaaS products.</span>
            </div>
         </div>
       </div>

       <div className='strength-card'>
         <div className='strength-con'>
            <p>My Strengths:</p>

            <div className='strengths'>
              <span>Comprehending business principles and objectives </span>
              <span>Facilitating clear and efficient communication </span>
              <span>Ensuring high quality and timely deliverables</span>
            </div>

         </div>
       </div>
   
    </div>
  )
}

export default Skill