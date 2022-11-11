import React from 'react'
import './Header.css'
// import {useRef,useEffect} from 'react'
// import Routers from '../../routes/Router'
import { Container, } from 'reactstrap'

import { NavLink, Link } from 'react-router-dom'

const Nav__Links = [
  {
    display: "Home",
    url: "/home"
  },
  {
    display: "Market",
    url: "/market"
  },
  {
    display: "Create",
    url: "/create"
  },
  {
    display: "Contact",
    url: "/contact"
  },

]


const Header = () => {

  // const headerRef = useRef(null)

  // useEffect(()=>{
  //   window.addEventListener('scroll',()=>{
  //     if(document.body.scrollTop >80){
  //       headerRef.current.classList.add('header__shrink')
  //     }
  //     else{
  //       headerRef.current.classList.remove('header__shrink')
  //     }
  //   })
  //   return()=>{
  //     window.removeEventListener('scroll')
  //   }
  // },[])

  return (
    <header className='header'>
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className='d-flex gap-2 align-item-center'>
              <span><i class="ri-fire-line"></i></span>
              NFT's
            </h2>
          </div>
          <div className="nav__menu">
            <div className="nav__list">
              {
                Nav__Links.map((item, index) => <li className="nav__item" key={index}>
                  <NavLink to={item.url} className={navClass => navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
                </li>)
              }
            </div>
          </div>
          <div className="nav__right d-flex align-item-center gap-5">
            <button className="btn d-flex gap-2 align-item-cneter">
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              <Link to='/wallet'>
                Connect Wallet</Link>
            </button>
            <span className="mobile__menu"><i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>

    </header>
  )
}

export default Header