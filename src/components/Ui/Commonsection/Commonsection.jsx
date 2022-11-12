import React from 'react'
import './Commonsection.css'


import { Container } from 'reactstrap'

const Commonsection = ({ title }) => {
    return (
        <section className='common__section'>
            <Container className='text-center'>
               <h2>{title}</h2> 
            </Container>
        </section>
    )
}

export default Commonsection