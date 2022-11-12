import React from 'react'
import './Trending.css'
import { Container,Row, Col } from 'reactstrap'
import {NFT__DATA} from '../../../assets/data/data.jsx'
import Nftcard from '../Nftcard/Nftcard.jsx'


const Trendingsection = () => {
  return (
  <section>
<Container>
  <Row>
    <Col lg='12'>
    <h3 className="trending__title">Trending</h3>
    </Col>
    {
      NFT__DATA.slice(0,8).map(item=>(
        <Col lg='3' md='4' sm='6' key={item.id}>
          <Nftcard item={item}/></Col>
      ))
    }
  </Row>
</Container>
  </section>
  )
}

export default Trendingsection