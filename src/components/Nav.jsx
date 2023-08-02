import React from 'react'
import logo from '../images/logo-original.png'

function Nav() {
  return (
    <nav>
        <img className='logo' src={logo} alt='little lemon logo' />
        <ul>
            <li ><a href='/'>Home</a></li>
            <li><a href='/About'>About</a></li>
            <li><a href='/Menu'>Menu</a></li>
            <li><a href='/Reservations'>Reservations</a></li>
            <li><a href='/Order Online'>Order Online</a></li>
            <li><a href='/Login'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav