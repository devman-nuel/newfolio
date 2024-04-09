import React from 'react'
import transition from '../transition'
import './Projects.css';


function Projects() {
  const images = [
    "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690404646/Webstore2_vdqchf.png",
    "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690404799/Webstore1_ris6aa.png",
    "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690404660/Webstore4_eqdlwz.png",
    "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690404631/Webstore3_mjblus.png",
    "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690405184/Webstore5_dxoj0f.png"  
  ]
  
  return (
    <div>
       <div className='projects'>
          <div className='web-apps'>
            <span>Web - Apps</span>

            <div className='project-con'>
              <div className='project-box'>
                <div >
                   <p data-animation="paragraph" >NuelWebstore</p>
                </div>
                <span>Ecommerce</span>
              </div>

              <div className='project-box'>
                <p data-animation="paragraph">Frontax</p>
                <span>Web3</span>
              </div>
            </div>
          </div>

          <div className='websites'>
            <span>Static Websites</span>

            <div className='project-con'>
              <div className='website-box'>
                <p data-animation="paragraph" >Stally</p>
                <span>Fintech</span>
              </div>

              <div className='website-box'>
                <p data-animation="paragraph">WildAfrica</p>
                <span>Documentary</span>
              </div>

              <div className='website-box'>
                <p  data-animation="paragraph">Druidbikes</p>
                <span>Sports</span>
              </div>
            </div>
          </div>

          <div className='plugins'>
            <span>Plugins & Build Tools</span>

            <div className='project-con'>
              <div className='plugin-box'>
                <p data-animation="paragraph" >Undecided</p>
                <span>Chrome Extension</span>
              </div>

              <div className='plugin-box'>
                <p data-animation="paragraph" >Undecided</p>
                <span>Vs Code Extension</span>
              </div>

              <div className='plugin-box'>
                <p data-animation="paragraph">Undecided</p>
                <span>Figma Plugin</span>
              </div>
            </div>
          </div> 
        </div> 

        <div className='Marquee'>
          <div className="Offerline">
                  <div className="Offerline-marquee">
                     <img src={images[0]} className="" alt="" />
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <img src={images[1]} className="" alt="" /> 
                      &nbsp;&nbsp;   
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp; 
                      <img src={images[2]} className="" alt="" />
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;     
                      <img src={images[3]} className="" alt="" />  
                      &nbsp;&nbsp;  
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp; 
                      <img src={images[4]} className="" alt="" /> 
                      &nbsp;&nbsp;  
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;  
                      <img src={images[5]} className="" alt="" /> 

                      &nbsp;&nbsp;
                      
                      <img src={images[0]} className="" alt="" />
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      <img src={images[1]} className="" alt="" /> 
                      &nbsp;&nbsp;   
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp; 
                      <img src={images[2]} className="" alt="" />
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;     
                      <img src={images[3]} className="" alt="" />  
                      &nbsp;&nbsp;  
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp; 
                      <img src={images[4]} className="" alt="" /> 
                      &nbsp;&nbsp;  
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;
                      &nbsp;&nbsp;  
                      <img src={images[5]} className="" alt="" />     
                  </div>
              </div>
        </div>   
    </div>
  )
}

export default transition(Projects)