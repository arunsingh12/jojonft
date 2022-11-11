import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import "./Herosection.css"
import {Link} from 'react-router-dom'

import heroImg from'../../assets/images/7.jpg'

const HeroSection = () => {
  return (
    <section className='hero__section'>
<Container>
    <Row >
        <Col lg="6" md="6">
            <div className="hero__content">
                <h2>Discover rere digital art and collect <span>Sell Extraordanary </span>NFTS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fugiat!</p>
                <div className="hero__btns d-flex align-items-center gap-4">
                <button className='explore__btn dflex align-items-center gap-2'><i class='ri-rocket-line'></i><Link to='/market'>Explore</Link></button>
                <button className='create__btn dflex align-items-center gap-2'><i class='ri-ball-pen-line'></i><Link to='/create'>Create</Link></button>
                </div>
            </div>
        </Col>
        <Col lg='6' md='6'>
            <div className="hero__img">
                <img src={heroImg} alt="" className='w-100'/>
            </div>
        </Col>
    </Row>
</Container>
    </section>
    
  )
}

export default HeroSection