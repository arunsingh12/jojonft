import React from 'react'
import { Container,Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

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
                <Col lg='4'>
                    <div className="single__nft__card">
                        div.nft__img
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Liveauction