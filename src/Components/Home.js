import React from 'react'
import transition from '../transition'
import './Home.css';
import Hero from './Hero';
import Work from './Work';
import Marquee from './Marquee';


function Home() {
  return (
    <div className='home'>
       <Hero />
       <Marquee />
       <Work />
    </div>
  )
}

export default transition(Home);
