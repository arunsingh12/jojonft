import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from "../pages/Home"

import Create from "../pages/Create"
import EditProfiles from "../pages/Home"
import Market from "../pages/Market"
import NftDetails from "../pages/NftDetails"
import SellerProfile from "../pages/SellerProfile"
import Wallet from "../pages/Wallet"
import Contact from "../pages/Contact"


const Router = () => {
  return <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
     <Route path="/home" element={<Home />} />
    <Route path="/market" element={<Market />} />
    <Route path="/crate" element={<Create />} />
    <Route path="/contact" element={<Contact/>}></Route>
   
    <Route path="/editprofiles" element={<EditProfiles />} />
     {/* <Route path="/nftdetails" element={<NftDetails/>} />     */}
     <Route path="/sellerprofiles" element={<SellerProfile />} />
    <Route path="/wallet" element={<Wallet />} />
    <Route path="/market/:id" element={<NftDetails />} /> 
  </Routes>
}

export default Router