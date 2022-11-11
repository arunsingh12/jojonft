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
                    <Col lg='3'className='d-flex gap-2 w-auto'>
                        {/* <div className="single__nft__card">
                            <div className="nft__img">
                                <img src={img02} alt="" className='w-100' />
                            </div>
                            <div className="nft__content">
                                <h5 className='nft__title'>Travel MOnkey Club</h5>
                                <div className="creator__info-wrapper d-flex gap-3">
                                    <div className="creator__img">
                                        <img src={img03} alt="" className='pimg' />
                                    </div>
                                    <div className="creator__info w-100 d-flex align-items-center justify-content-between">
                                        <div >
                                            <h6>Created By</h6>
                                            <p>Trista Fransic</p>
                                        </div>
                                        <div className='w-50'>
                                            <h6>Current Bid</h6>
                                            <p>4.89 ETH</p>
                                        </div>

                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <button className="bid__btn d-flex align-items-center gap2">
                                        <i class="ri-shopping-bag-line"></i>Place Bid
                                    </button>
                                    <span className='history__link'>
                                        <Link>View History</Link>
                                    </span>
                                </div>
                            </div>
                        </div> */}

                        {
                           NFT__DATA.slice(0,4).map((item)=>(
                           <Nftcard key={item.id} item={item}/>) 
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Liveauction