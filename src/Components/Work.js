import React, { useState } from 'react'
import './Work.css';


function Work() {
    const[selectedImg,setSelectedImg] = useState(0);
 
    const images = [
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690404646/Webstore2_vdqchf.png",
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690404799/Webstore1_ris6aa.png",
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690404660/Webstore4_eqdlwz.png",
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690404631/Webstore3_mjblus.png",
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690405184/Webstore5_dxoj0f.png"  
    ]
    
    const Frontax = [
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406670/Frontax1_qvpugh.png",
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406874/Frontax5_rzwkue.png",
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406865/Frontax4_jk9m34.png",
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406851/Frontax2_qj04u6.png",
      "https://res.cloudinary.com/dxnukbo0u/image/upload/v1690406853/Frontax3_uynupr.png"
     
    ]
    
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
               <img src={images[selectedImg]} className="pry" alt="" />
              </div>

              <div className='secondary-img'>
              <img src={images[0]} className="sec" alt="" onClick={e=>setSelectedImg(0)}/>
              <img src={images[1]} className="sec" alt="" onClick={e=>setSelectedImg(1)} />   
              <img src={images[2]} className="sec" alt="" onClick={e=>setSelectedImg(2)} />   
              <img src={images[3]} className="sec" alt="" onClick={e=>setSelectedImg(3)} />   
              <img src={images[4]} className="sec" alt="" onClick={e=>setSelectedImg(4)} />   
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
               <img src={Frontax[selectedImg]} className="pry" alt="" />
              </div>

              <div className='secondary-img'>
              <img src={Frontax[0]} className="sec" alt="" onClick={e=>setSelectedImg(0)}/>
              <img src={Frontax[1]} className="sec" alt="" onClick={e=>setSelectedImg(1)} />   
              <img src={Frontax[2]} className="sec" alt="" onClick={e=>setSelectedImg(2)} />   
              <img src={Frontax[3]} className="sec" alt="" onClick={e=>setSelectedImg(3)} />   
              <img src={Frontax[4]} className="sec" alt="" onClick={e=>setSelectedImg(4)} />   
              </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Work;