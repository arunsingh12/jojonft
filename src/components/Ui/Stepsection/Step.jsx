import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Step.css'
import { Link } from 'react-router-dom'

const STEP__DATA=[
    {
       title:'Setup your wallet', 
       desc:'lorem ipsum Readab leStreamDefaultController, sit amet consecture adi',
       icon:'ri-wallet-line',

    },
    
     {
        title:'Create Your Collection', 
        desc:'lorem ipsum Readab leStreamDefaultController, sit amet consecture adi',
        icon:'ri-layout-masonry-line',
 
     },
       {
       title:'Add Your NFTs', 
       desc:'lorem ipsum Readab leStreamDefaultController, sit amet consecture adi',
       icon:'ri-image-line',

    },
    {
        title:'List Them For Sale', 
        desc:'lorem ipsum Readab leStreamDefaultController, sit amet consecture adi',
        icon:'ri-list-check',
 
     },
]


const Step = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-4'>
                        <h3 className="step__title">Create And Sell Your NFTs</h3>
                    </Col>
            {
                STEP__DATA.map((item,index)=>
                <Col lg='3' md='4' sm='6' key={index}>
                        <div className="single__step__item">
                            <span><i className={item.icon}></i>
                            </span>
                            <div className="step__item__content">
                                <h5><Link to='/wallet'>
                                    {item.title}</Link></h5>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </Col>)
            }
                    
                </Row>
            </Container>
        </section>
    )
}

export default Step