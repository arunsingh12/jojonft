import React from 'react'
import "./Footer.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'


const MY__ACCOUNT = [
  {
    display: "Authopr Profile",
    url: "/sellerprofile",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
  {
    display: "Edit prodile",
    url: "/editprofile",
  },
]
const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
]

const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
]
const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" md="3" sm="6">
            <div className="logo">
              <h2 className='d-flex gap-2 align-item-center'>
                <span>
                  <i class="ri-fire-line"></i>
                </span>
                NFT's
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolor!
              </p>
            </div>
          </Col>
          <Col lg="2" md="3" sm="6" className='mb-4'>
            <h5>My Account</h5>
            <ListGroup className='List__group'>
              {
                MY__ACCOUNT.map((item, index) => (
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Resources</h5>
            <ListGroup className='List__group'>
              {
                RESOURCES.map((item, index) => (
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h5>Company</h5>
            <ListGroup className='List__group'>
              {
                COMPANY.map((item, index) => (
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3" md="3" sm="6">
            <h5>NewsLetter</h5>
            <input type="text" className="newsletter" placeholder='Email' />
            <div className="social__links d-flex gap-4 align-items-center">
              <span><Link to="#"><i class="ri-facebook-line"></i></Link></span>
              <span><Link to="#"><i class="ri-instagram-line"></i></Link></span>
              <span><Link to="#"><i class="ri-twitter-line"></i></Link></span>
              <span><Link to="#"><i class="ri-telegram-line"></i></Link></span>
              <span><Link to="#"><i class="ri-discord-line"></i></Link></span>

            </div>
          </Col>
          <Col lg="12" className='mt-4 text-center'>

            <p className='copyrights'>Copyrights 2022, Developed by Arun & All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer