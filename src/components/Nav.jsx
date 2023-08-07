import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo-original.png'

function Nav() {
  return (
    <nav>
        <img className='logo  navbar-expand-lg' src={logo} alt='little lemon logo' />
        <ul>
            <li ><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Menu'>Menu</Link></li>
            <li><Link to='/Reservations'>Reservations</Link></li>
            <li><Link to='/OrderOnline'>Order Online</Link></li>
            <li><Link to='/Login'>Login</Link></li>
        </ul>
    </nav>
  )
}

export default Nav