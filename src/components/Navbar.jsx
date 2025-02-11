import React from 'react'
import logo from '../assets/logo2.png'
import '../CSS/entity.css'
import '../CSS/navbar.css'
import '../app.css'
import '../CSS/position_entity.css' 
import '../CSS/profit_entity.css'

import profile from '../assets/profile.png'
import { NavLink } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
import light from '../assets/light.png'
import dark from '../assets/dark.png'
import { useState, useEffect } from 'react'

const navbar = ({}) => {
  const [darkmode, setDarkmode] = useState(localStorage.getItem('darkmode') === 'true' ? true : false)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkmode ? "dark" : "light")
     localStorage.setItem('darkmode', darkmode) 
    
  }, [darkmode])
  
  return (
    <div>
      <nav className='navbar0'>

        <NavLink to="/trade" className="nodecoration">
        <ul className='logo'>
          <img className='logo1 ' src={logo} alt="" />
            BharatTrade
        </ul>
        
        </NavLink>
        <ul className='navbar1 navbar121'>
          <div className='navbar1'>
          <NavLink to="/trade" className={({ isActive }) => (isActive ? 'button2 button1' : 'button2')}> Trade</NavLink>
          <NavLink to="/positions" className={({ isActive }) => (isActive ? 'button2 button1' : 'button2')}> Positions</NavLink>
          <NavLink to="/p&l" className={({ isActive }) => (isActive ? 'button2 button1' : 'button2')}> P&L</NavLink>




          {/* <li className='profile '>
            <div className='profile1 '>Profile</div>
            


            <ul className='profile-content'>
              <li>Edit Profile</li>
              <li>Logout</li>
            </ul>

          </li>
          <li>vivekant</li> */}
          <div className='profile'>
            
            <UserButton />
          </div>
          </div>

          <div className='darkmode'>
            <img onClick={() => {
              setDarkmode(!darkmode);
            }
            } src={darkmode?dark:light} alt="" />
          </div>




        </ul>
      </nav>
    </div>
  )
}

export default navbar
