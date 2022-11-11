import React from 'react'
import { Container } from 'reactstrap'
import Liveauction from '../components/Ui/Liveauction/Liveauction'
import HeroSection from '../components/Ui/HeroSection'
import Sellersection from '../components/Ui/Sellersection/Sellersection'

const Home = () => {
  return (
    <div className='home'>
     <HeroSection/>
     <Liveauction/>
     <Sellersection/>
    </div>
  )
}

export default Home