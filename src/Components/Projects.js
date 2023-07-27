import React from 'react'
import transition from '../transition'
import './Projects.css';

function Projects() {
  return (
    <div>
       <div className='projects'>
          <div className='web-apps'>
            <span>Web - Apps</span>
          </div>

          <div className='websites'>
            <span>Static Websites</span>
          </div>

          <div className='plugins'>
            <span>Plugins & Build Tools</span>
          </div> 
        </div>  
    </div>
  )
}

export default transition(Projects)