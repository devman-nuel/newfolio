import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Work from '../../Components/Work'
import Marquee from '../../Components/Marquee/Marquee'
import Cta from '../../Components/Cta/Cta'
import Testimonial from '../../Components/Testimonial/Testimonial'

function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <Marquee />
      <Cta />
      
    </div>
  )
}

export default Home