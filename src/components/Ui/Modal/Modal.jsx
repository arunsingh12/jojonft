import React from 'react'
import './modal.css'
const Modal = ({setShowModal}) => {
  return (
    <div className='modal__wrapper' >
        <div className="single__modal">
            <span className="close__modal"><i class='ri-close-line' onClick={()=> setShowModal(false)}></i></span>
            <h6 className='text-center text-light'>Place A Bid</h6>
            <p className='text-center text-light'>
                You Must bid at least 
                <span className='money'>5.89</span></p>
            <div className="input__item mb-4">
                <input type="number" placeholder='00 :00 ETH' />
            </div>
            <div className="input__item mb-3">
                <h6>Enter Quantity, 7 Available</h6>
                <input type="number" placeholder='Enter quantity'></input>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <p>You MUst Bid At Least</p>
                <span className='money'>0.89 ETH</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <p>Service Free</p>
                <span className='money'>0.899 ETH</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <p>Total Bid Amount</p>
                <span className='money'>5.89 ETH ETH</span>
            </div>
            <button className='place__bid-btn'>
                Place a bid
            </button>
        </div>
    </div>
  )
}

export default Modal