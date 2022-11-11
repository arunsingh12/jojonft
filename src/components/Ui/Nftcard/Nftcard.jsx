import React from 'react'
import "./Nftcard.css"
import { Link } from 'react-router-dom'
const Nftcard = (props) => {



    const {title, id, currentbid, creator, image, creatorimg} = props.item



  return <div className="single__nft__card">
  <div className="nft__img">
      <img src={image} alt="" className='w-100' />
  </div>
  <div className="nft__content">
      <h5 className='nft__title'><Link to={'/market/${id}'}>{title}</Link></h5>
      <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
              <img src={creatorimg} alt="" className='pimg' />
          </div>
          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
              <div >
                  <h6>Created By</h6>
                  <p>{creator}</p>
              </div>
              <div className='w-50'>
                  <h6>Current Bid</h6>
                <p>{currentbid}</p>
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
</div>
}

export default Nftcard