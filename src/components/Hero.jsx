import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../images/heroImage.png'

function Hero() {
  return (
    <section class='heroSection'>
        <div style={{
          'display': 'flex',
          'flexDirection': 'column',
          'alignItems': 'flex-start',
          'width' : '25vw',
          'minWidth' : '300px',
          'paddingLeft' : '10vw',
        }}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <h3 
          style={{
            'width': '15vw', 
            'minWidth': '200px',
            'fontWeight': '400'
            }}
          >We are a family owned Mediteranean restaurant, focused on traditional recipes served with a modern twist.</h3>
          <button><Link style={{  'color':'#333333', 'fontWeight': 'bold' }}>Reserve a Table</Link></button>
        </div>
      <img 
      src={heroImage} 
      alt='plate of food' 
      class='heroImage'
      />
    </section>
  )
}

export default Hero