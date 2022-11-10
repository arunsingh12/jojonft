import React from 'react'
import "./Footer.css"
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
  return (
    <footer className='footer'>
<Container>
  <Row>
    <Col lg="3" md="6" sm="6">
    <div className="logo">
            <h2 className='d-flex gap-2 align-item-center'>
              <span>
                <i class="ri-fire-line"></i>
              </span>
              NFT's
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur officiis provident quae autem, molestiae adipisci earum similique nulla. Obcaecati?
            </p>
          </div>

    </Col>
    <Col lg="3" md="6" sm="6"></Col>
    <Col lg="3" md="6" sm="6"></Col>
    <Col lg="3" md="6" sm="6"></Col>
    <Col lg="3" md="6" sm="6"></Col>
    <Col lg="3" md="6" sm="6"></Col>
  </Row>
</Container>
    </footer>
  )
}

export default Footer