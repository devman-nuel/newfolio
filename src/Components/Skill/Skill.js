import React, { useEffect, useRef } from 'react';
import './Skill.css';
import { gsap } from 'gsap';
import { IO } from '../../Animations/Observe'; // Your custom IntersectionObserver function

function Skill() {
  const coreSkillsRef = useRef(null);
  const helpSkillsRef = useRef(null);
  const strengthsSkillsRef = useRef(null);

  useEffect(() => {
    const animateItems = (items) => {
      items.forEach((item, index) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.2, // Delay each span animation
        });
      });
    };

    // Observe and animate the core skills spans
    const coreSkillsSpans = coreSkillsRef.current.querySelectorAll('span');
    IO(coreSkillsRef.current, { threshold: 0.5 }).then(() => {
      animateItems(coreSkillsSpans);
    });

    // Observe and animate the help skills spans
    const helpSkillsSpans = helpSkillsRef.current.querySelectorAll('span');
    IO(helpSkillsRef.current, { threshold: 0.5 }).then(() => {
      animateItems(helpSkillsSpans);
    });

    // Observe and animate the strengths skills spans
    const strengthsSkillsSpans = strengthsSkillsRef.current.querySelectorAll('span');
    IO(strengthsSkillsRef.current, { threshold: 0.5 }).then(() => {
      animateItems(strengthsSkillsSpans);
    });
  }, []);

  return (
    <div className='skill'>
      <div className='skill-card'>
        <div className='skill-con'>
          <p>Core Skillset & Interests</p>
          <div className='skills' ref={coreSkillsRef}>
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
          <div className='skills' ref={helpSkillsRef}>
            <span>Designing intuitive apps, web projects and building websites.</span>
            <span>Handling design and development tasks throughout the process.</span>
            <span>Creating user-centric B2B SaaS products.</span>
          </div>
        </div>
      </div>

      <div className='skill-card'>
        <div className='skill-con'>
          <p>My Strengths & Soft skills:</p>
          <div className='skills' ref={strengthsSkillsRef}>
            <span>Proficiency in Figma</span>
            <span>Website development across niches</span>
            <span>Strong Communication, collaboration, Problem solving and Empathy</span>
            <span>Ensuring high quality and timely deliverables</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
