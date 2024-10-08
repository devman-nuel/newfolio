import React from 'react'

function Project() {
  return (
    <div className='main-grid'>
      <div className='grid-card'>
        <img alt='grid-img'></img>
        <div className='pro-con'>
          <div className='pro-text'>
            <p>Wultz</p>
            <span>A web agency management</span>           
          </div>

          <div className='pro-btn'>
            <button>Go</button>
          </div>
        </div>
      </div>

      <div className='grid-card'>
        <img alt='grid-img'></img>
        <div className='pro-con'>
          <div className='pro-text'>
            <p>Stally</p>
            <span>A web agency management</span>           
          </div>

          <div className='pro-btn'>
            <button>Go</button>
          </div>
        </div>
      </div>

      <div className='grid-card'>
        <img alt='grid-img'></img>
        <div className='pro-con'>
          <div className='pro-text'>
            <p>Kuda</p>
            <span>A web agency management</span>           
          </div>

          <div className='pro-btn'>
            <button>Go</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Project