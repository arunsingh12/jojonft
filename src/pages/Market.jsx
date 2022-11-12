import React from 'react'
// import { Container } from 'reactstrap'
import Commonsection from '../components/Ui/Commonsection/Commonsection'
import {Container,Row,Col} from 'reactstrap'
import Nftcard from '../components/Ui/Nftcard/Nftcard'
import '../styles/market.css'
import {NFT__DATA} from '../assets/data/data'

const Market = () => {

  const handleCategory = ()=>{

  }
  const handleItems = ()=>{
    
  }
  const handleSort = ()=>{
    
  }



  return (
    <>
      <Commonsection title={'MarketPlace'}></Commonsection>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 mt-5'>
            <div className="market__product__filter d-flex align-items-center justify-content-between">
              <div className="filter__left d-flex align-items-center gap-5">
                <div className="all__category__filter">
                 
                  <select name="" id="" onChange={handleCategory}>
                    <option>All Categories</option>
                    <option value="art">Art</option>
                    <option value="music">music</option>
                    <option value="domain-name">Domain Name</option>
                    <option value="virtual world">Virtual World</option>
                    <option value="trending-card">Trending Card</option>
                  </select>
                </div>

                <div className="all__items__filter">
                 
                  <select name="" id="" onChange={handleItems}>
                    <option value=""> All Items</option>
                    <option value="single-item">Single Item</option>
                    <option value="bundle">BUndle</option>
                    
                  </select>
                </div>

              </div>
              <div className="filter__right">

              <select name="" id="" onChange={handleSort}>
                <option value="">Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    
                </select>

              </div>
            </div>
          </Col>
          {
            NFT__DATA.map(item=>(
              <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
              <Nftcard item={item}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Market