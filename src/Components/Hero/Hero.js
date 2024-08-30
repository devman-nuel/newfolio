import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const scrollCarousel = () => {
      scrollAmount += 1;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0; // Reset to the start
      }
      carousel.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scrollCarousel, 20); // Adjust the speed by changing the interval

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className='hero'>
      <h2>Digital Designer and Developer, I create unique web experiences and solve problems with design and code.</h2> 
      
      <div className='carousel' ref={carouselRef}>
        <div className='carousel-box'>
          <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1724220096/Frame_1686553134_r5gyza.jpg' alt='niche'></img>
          <p>E-Commerce</p>
          <div className='carousel-btn'>
            <button>UI Design</button>
            <button>Ux Design</button>
          </div>
        </div>

        <div className='carousel-box'>
          <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1724220095/Frame_1686553130_wkthtg.jpg' alt='niche'></img>
          <p>E-Commerce</p>
          <div className='carousel-btn'>
            <button>UI Design</button>
            <button>Ux Design</button>
          </div>
        </div>
        
        <div className='carousel-box'>
          <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1724220099/Frame_1686553131_ayuzxn.jpg' alt='niche'></img>
          <p>E-Commerce</p>
          <div className='carousel-btn'>
            <button>UI Design</button>
            <button>Ux Design</button>
          </div>
        </div>

        <div className='carousel-box'>
          <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1724220107/Frame_1686553126_chqri7.jpg' alt='niche'></img>
          <p>E-Commerce</p>
          <div className='carousel-btn'>
            <button>UI Design</button>
            <button>Ux Design</button>
          </div>
        </div>

        <div className='carousel-box'>
          <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1724220098/Frame_1686553117_zhlabl.jpg' alt='niche'></img>
          <p>E-Commerce</p>
          <div className='carousel-btn'>
            <button>UI Design</button>
            <button>Ux Design</button>
          </div>
        </div>

        <div className='carousel-box'>
          <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1724220096/Frame_1686553133_lrjpoo.jpg' alt='niche'></img>
          <p>E-Commerce</p>
          <div className='carousel-btn'>
            <button>UI Design</button>
            <button>Ux Design</button>
          </div>
        </div>

      </div>  
    </div>
  )
}

export default Hero;
