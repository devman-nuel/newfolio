import React from 'react'
import './Detail.css';

function Detail() {
  return (
    <div>
           <div className='detail-con'>
            <h2 data-animation="paragraph">Project Name</h2>
            <p>Project Objective</p>

            <div className='more-detail'>
                <div>
                    <p>Role/Services</p>
                    <span>----</span>
                </div>

                <div>
                    <p>Niche</p>
                    <span>---</span>
                </div>

                <div>
                    <p>Year</p>
                    <span>---</span>
                </div>
            </div>

            <div className='first-deetImg'>
                <img src='g' alt=''></img>
            </div>

            <div className='approach'>
                <h2 data-animation="paragraph">Project Approach</h2>

                <div>
                    <p>Creating intuitive layouts and interfaces that enhance user experience and engagement. <br></br><br></br>
                    Ensuring that websites display optimally across different devices and screen sizes and loads quickly <br></br><br></br>
                    Implementing the designs using react to bring them to life on the web.
                    
                    </p>
                </div>
            </div>

            <div className='first-deetImg'>
                <img src='' alt=''></img>
            </div>

            <div className='first-deetImg'>
                <img src='' alt=''></img>
            </div>

            <div className='first-deetImg'>
                <img src='' alt=''></img>
            </div>

            <div className='first-deetImg'>
                <img src='' alt=''></img>
            </div>        
        </div>
    </div>
  )
}

export default Detail