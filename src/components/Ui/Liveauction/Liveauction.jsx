import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
 import './Liveauction.css'
 import Nftcard from '../Nftcard/Nftcard'
// import img02 from '../../../assets/images/n1.jpg'
// import img03 from '../../../assets/images/p1.jpg'

import {NFT__DATA} from '../../../assets/data/data.jsx'

const Liveauction = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-4'>
                        <div className='live__auction__top d-flex align-items-center justify-content-between'>
                            <h3>Live Auction</h3>
                            <span><Link to='/market'>Explore More</Link></span>
                        </div>
                    </Col>
                  
                        {
                            
                           NFT__DATA.slice(0,4).map((item)=>(
                            <Col lg='3' md='4' sm='6'>
                                <Nftcard key={item.id} item={item}/>
                           </Col>) 
                        )}
                  
                </Row>
            </Container>
        </section>
    )
}

export default Liveauction