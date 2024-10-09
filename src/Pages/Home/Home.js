import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Work from '../../Components/Work'
import Cta from '../../Components/Cta/Cta'
import Skill from '../../Components/Skill/Skill'


function Home() {
  return (
    <div>
      <Hero />
      <Cta/>
      <Skill/>
      <Work />
      
    </div>
  )
}

export default Home