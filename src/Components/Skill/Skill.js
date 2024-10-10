import React from 'react'
import './Skill.css';

function Skill() {
  return (
    <div className='skill'>
       <div className='skill-card'>
         <div className='skill-con'>
           <p>Core & Interests</p>

            <div className='skills'>
            <span>Product Design.</span>
            <span>User Research</span>
            <span>Web Development (React)</span>
            <span>SEO Optimization</span>
            <span>Interaction Design</span>
            </div>
         </div>
       </div>

       <div className='skill-card'>
         <div className='skill-con'>
           <p>Here’s how I can help you:</p>

            <div className='skills'>
            <span>Designing intuitive apps, web projects and building websites.</span>
            <span>Handling design and development tasks throughout the process.</span>
            <span>Creating user-centric B2B SaaS products.</span>
            </div>
         </div>
       </div>

       <div className='strength-card'>
         <div className='strength-con'>
            <p>My Strengths & Soft skills:</p>

            <div className='strengths'>
              <span>Proficiency in Figma</span>
              <span>Website development across niches </span>
              <span>Strong Communication, collaboration, Problem solving and Empathy</span>
              <span>Ensuring high quality and timely deliverables</span>
            </div>
         </div>
       </div>
   
    </div>
  )
}

export default Skill