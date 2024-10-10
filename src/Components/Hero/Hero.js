import React, { useEffect, useState, useRef } from "react";
import './Hero.css';
import { gsap } from "gsap";
import { IO } from "../../Animations/Observe"; // Adjust the path if necessary

function Hero() {
  const images = [
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728357085/Frame_2462_1_pfomv7.jpg',
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728488786/Frame_1707479651_1_k3vxmw.jpg',
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728488780/Frame_1707479656_1_bzkmj1.jpg',
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728488780/Frame_1707479653_1_u1794h.jpg',
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728488779/Frame_1707479657_1_dldosu.jpg',
    'https://res.cloudinary.com/dxnukbo0u/image/upload/v1728488779/Frame_1707479654_1_h9ezqi.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesRef = useRef(null);

  useEffect(() => {
    // Change image every 2 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000);

    // GSAP animation for images
    const imagesElement = imagesRef.current;
    const animateImages = () => {
      gsap.fromTo(
        imagesElement,
        { y: 500, opacity: 0 }, // Initial state
        {
          y: 0, // Final state
          opacity: 1,
          duration: 1.6, // Duration of the animation
          ease: "power3.out" // Easing for smooth transition
        }
      );
    };

    // Apply animation when images come into view
    IO(imagesElement, { threshold: 0.5 }).then(() => {
      animateImages();
    });

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [images.length]); // Add images.length as a dependency

  return (
    <div className='hero'>
      <div className='head-flex'>
        <div className='hero-head'>
          <h2 data-animation="paragraph"> Digital Designer & React Developer</h2>
          <p>My name is Emmanuel, I craft web experiences and tackle digital challenges by offering tailored solutions that align with your brand/business vision and objectives, using both design and code.</p>
        </div>

        <div className='hero-text'>
          <div className="insight" ref={imagesRef}>
            <img
              src={images[currentImageIndex]}
              alt={`Slide ${currentImageIndex}`}
              className="insight-2022"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

