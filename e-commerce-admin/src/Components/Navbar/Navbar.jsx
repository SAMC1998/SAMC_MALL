import React from 'react'
import './Navbar.css'
import shopping from '../Assets/shopping.svg'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav'>
        <img src={shopping} className='nav-logo' alt="" />
        <h1>SAMC</h1>
      </div>
      <img src={navprofileIcon} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
