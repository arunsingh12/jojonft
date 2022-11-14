import React from 'react'
import Commonsection from '../components/Ui/Commonsection/Commonsection'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data'
import Liveauction from '../components/Ui/Liveauction/Liveauction'
import { Link } from 'react-router-dom'

import "../styles/nftdetails.css"


const NftDetails = () => {

  const { id } = useParams()

  const singleNft = NFT__DATA.find(item => item.id === id)

  return (

    <>
      <Commonsection title={singleNft.title} />
      <section>
        <Container>
          <Row className='mt-4'>
            <Col lg='6' md='6' sm='6' >
              <img src={singleNft.image} alt='No Image' className=' single__nft-img'></img>
            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className="single__nft__content">
                <h2>{singleNft.title}</h2>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className='d-flex align-items-center gap-4 single__nft-seen'>
                    <span><i class='ri-eye-line'></i>234</span>
                    <span><i class='ri-heart-line'></i>123</span>
                  </div>
                  <div className='d-flex align-items-center gap-4 single__nft-more'>
                    <span><i class='ri-send-plane-line'></i></span>
                    <span><i class='ri-more-2-line'></i></span>
                  </div>
                </div>

                <div className="nft__creator d-flex gap-3 align-items center">
                  <div className="creator__img"><img src={singleNft.creatorimg} alt="" className='w-100' /></div>
                  <div className="creator__detail">
                    <p>Created By</p>
                    <h6>{singleNft.creator}</h6>
                  </div>
                </div>
                <p className='my-4'>{singleNft.descriptions}</p>
                <button className='singleNft-btn d-flex align-items-center gap2 w-100'><i class='ri-shopping-bag-line'></i><Link to='/wallet'>Place A Bid</Link></button>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Liveauction></Liveauction>
    </>
  )
}

export default NftDetails