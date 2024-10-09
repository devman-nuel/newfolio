import React, { useEffect,  useRef } from "react";
import './Hero.css';
import { gsap } from "gsap";
import { IO } from "../../Animations/Observe"; // Make sure to adjust the path if necessary

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    
      // Initialize video animation
      const videoElement = videoRef.current;

      const animateVideo = () => {
          gsap.fromTo(
              videoElement,
              { y: 500, opacity: 0 }, // Initial state
              {
                  y: 0, // Final state
                  opacity: 1,
                  duration: 1.2, // Duration of the animation
                  ease: "power3.out", // Easing for smooth transition
              }
          );
      };

      // Ensure the animation is applied when the video comes into view
      IO(videoElement, { threshold: 0.5 }).then(() => {
          animateVideo();
      });

      // Optionally, you could also handle the case where the video might be already in view
      animateVideo();

  }, []);

 

  return (
    <div className='hero'>
      <div className='head-flex'>
        <div className='hero-head'>
          <h2 data-animation="paragraph" > Digital Designer & React Developer</h2> 
          <p>I craft distinctive web experiences and tackle digital challenges by offering tailored design solutions that align with your vision and objectives, using both design and code.</p>     
        </div>

        <div className='hero-text'>
          <div className="insight">
                  <video
                      ref={videoRef}
                      className="insight-2022"
                      autoPlay
                      loop
                      playsInline
                      src="https://res.cloudinary.com/dxnukbo0u/video/upload/v1728472204/clideo_editor_63320dc873394b4eb1a554c90f03cf81_fxmhzv.mp4"
                  ></video>

                 
            </div> 
         </div>

      </div>
        
    </div>
  )
}

export default Hero;
