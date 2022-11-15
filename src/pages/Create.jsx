import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/Ui/Commonsection/Commonsection'
import Nftcard from '../components/Ui/Nftcard/Nftcard'
import img from '../assets/images/n1.jpg'
import cimg from '../assets/images/p1.jpg'
import '../styles/Create.css'

const item = {
  id: "04",
  title: "Monkey Club4",
  descriptions: "this is one",
  image: img,
  creator: "monkey",
  creatorimg: cimg,
  currentbid: "6",
}



const Create = () => {
  return (
    <>
      <CommonSection title='Crate Item' />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='4' sm='6'>
              <h5 className='mt-4 mb-4 text-light'>Preview Item</h5>
              <Nftcard item={item}></Nftcard>
            </Col>
            <Col lg='9' md='8' sm='6' className=''>
              <div className='mt-4 create__item '>
                <form action="">
                  <div className="form__input">
                    <label htmlFor="">Uplode File</label>
                    <input type="file" className='upload_input' />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input type="number" placeholder='Enter Price For One item(ETH)' />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder='Enter Mnimum Bid' />
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" />
                    </div>
                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='Enter title' />
                  </div>
                  <div className="form__input">
                    <label htmlFor="">Descriptions</label>
                    <textarea name='' id='' cols="30" rows='10' placeholder='Enter descriptions' />
                  </div>

                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Create