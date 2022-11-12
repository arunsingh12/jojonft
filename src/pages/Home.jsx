import React from 'react'
// import { Container } from 'reactstrap'
import Liveauction from '../components/Ui/Liveauction/Liveauction'
import HeroSection from '../components/Ui/HeroSection'
import Sellersection from '../components/Ui/Sellersection/Sellersection'
import Trending from '../components/Ui/Trendingsection/Trending.jsx'
import Step from '../components/Ui/Stepsection/Step'

const Home = () => {
  return (
    <div className='home'>
      <HeroSection />
      <Liveauction />
      <Sellersection />
      <Trending />
      <Step/>
    </div>
  )
}

export default Home