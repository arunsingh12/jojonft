import React, { useState } from 'react'
// import { Container } from 'reactstrap'
import Commonsection from '../components/Ui/Commonsection/Commonsection'
import { Container, Row, Col } from 'reactstrap'
import Nftcard from '../components/Ui/Nftcard/Nftcard'
import '../styles/market.css'
import { NFT__DATA } from '../assets/data/data'

const Market = () => {

  const [data, setData] = useState(NFT__DATA)

  const handleCategory = () => { }
  const handleItems = () => { }

  //================SORTING DATA BY HIGH< LOW RATE==================
  const handleSort = (e) => {

    const filterValue = e.target.value
    if (filterValue === 'high') {
      const filterData = NFT__DATA.filter((item) => item.currentbid >= 6)
      setData(filterData)
    }
    if (filterValue === 'mid') {
      const filterData = NFT__DATA.filter((item) => item.currentbid >= 5 && item.currentbid < 6)
      setData(filterData)
    }
    if (filterValue === 'low') {
      const filterData = NFT__DATA.filter((item) => item.currentbid >= 4 && item.currentbid < 5)
      setData(filterData)
    }
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
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">low Rate</option>

                  </select>

                </div>
              </div>
            </Col>
            {
              data?.map(item => (
                <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
                  <Nftcard item={item} />
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