import React from 'react'

import Commonsection from '../components/Ui/Commonsection/Commonsection'
import { useParams } from 'react-router-dom'
import { Container,Row,Col } from 'reactstrap'
import {NFT__DATA} from '../assets/data/data'
import Liveauction from '../components/Ui/Liveauction/Liveauction'




const NftDetails = () => {

const {id} = useParams()

const singleNft = NFT__DATA.find(item=>item.id === id)

  return (
    
    <>
    <Commonsection title={singleNft.title}>
      <section>
      <Container>
        <Row>
          <Col lg='6'>
            <img src='{singleNft.imgurl' alt='' className='w-100'></img>
          </Col>
          <Col lg='6'>
            <div className="single__nft__content">
              <h2>{singleNft.title}</h2>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
    </Commonsection>
    
    </>
  )
}

export default NftDetails