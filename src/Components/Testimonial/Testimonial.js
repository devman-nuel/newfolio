import React, { useEffect, useState } from 'react';
import './Testimonial.css'

function Testimonial() {
    const [scrollDirection, setScrollDirection] = useState('left');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > lastScrollY) {
        setScrollDirection('left'); // Scrolling down
      } else {
        setScrollDirection('right'); // Scrolling up
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  return (
    <div className='testimonial'>
        <h2 data-animation="header">Testimonial</h2>
        <p>Dont take my words for it, hear from my clients.</p>

      <div className='testimonial-con'>
        <div className={`marquee ${scrollDirection}`}>
        <div className='test-box'>
          <span>From a Healthcare Professional</span>
          <p>"The feedback from our patients has been overwhelmingly positive, with many commenting on the ease of navigation and the professional appearance of the site</p>
          <span>Dr. Laura Williams, Founder of HealthFirst Clinic</span>
        </div>

        <div className='test-box'>
          <span>From an E-Commerce Business</span>
          <p>"Our sales have increased dramatically since the redesign, and customer feedback has been overwhelmingly positive. We couldn’t be happier with the results!.</p>
          <span>Mike Brown, CEO of Trendy Tech Gear</span>
        </div>

        <div className='test-box'>
          <span>From a Corporate Client</span>
          <p>"Working with DevMan_nuel was a game-changer for our digital marketing strategy. He is a true professional who delivers outstanding results on time and within budget. </p>
          <span>Jane Doe, Marketing Director at TechCorp</span>
        </div>

        <div className='test-box'>
          <span>From a Budding Startup</span>
          <p>"Launching a new startup is challenging, but he made the process of creating our digital presence incredibly smooth. DevMan_nuel is a true asset to any project"</p>
          <span>Sarah Lee, Founder of GreenInnovate</span>
        </div>

        <div className='test-box'>
          <span> From an Educational Agency</span>
          <p>"DevMan_nuel played a crucial role in redesigning our  website. The new design is both visually appealing and highly functional, making it easy for students to access important information.</p>
          <span>Alex Rivera, Co-Founder of SmartSolutions</span>
        </div>

        <div className='test-box'>
          <span>From a Tech Startup</span>
          <p>"DevMan_nuel was instrumental in bringing our app to life. His innovative design and development skills ensured that the user interface was not only beautiful but also intuitive and easy to use.</p>
          <span>Alex Rivera, Co-Founder of SmartSolutions</span>
        </div>
        
        <div className='test-box'>
          <span>From a Tech Startup</span>
          <p>"DevMan_nuel was instrumental in bringing our app to life. His innovative design and development skills ensured that the user interface was not only beautiful but also intuitive and easy to use.</p>
          <span>Alex Rivera, Co-Founder of SmartSolutions</span>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Testimonial
