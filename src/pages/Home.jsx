import React from 'react'
import { Container } from 'reactstrap'
import Liveauction from '../components/Ui/Liveauction/Liveauction'
import HeroSection from '../components/Ui/HeroSection'

const Home = () => {
  return (
    <div className='home'>
     <HeroSection/>
     <Liveauction/>
    </div>
  )
}

export default Home