import React from 'react'

import medi from '../images/licensed-image.jpg'

function About() {
  return (
    <div
      style={{
        'display': 'flex', 
        'justifyContent': 'center',
        'paddingLeft':'10%',
        'paddingRight':'10%',
        'paddingBottom':'2%',
        'paddingTop':'2%',
      }}
    >
      <section
        style={{
          'display':'flex',
          'flexDirection': 'column',
          'justifyContent': 'flex-start',
          'alignItems': 'center',
        }}
      >
        <h1>About Little Lemon</h1>
        <p
          style={{
            'width': '50%',
            'fontWeight':'bold'
          }}
        >Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
      </section>
      <img 
        style={{
          'obljectFit': 'cover',
          'width': '40%'
        }}
        src={medi} 
        alt='about' 
      />
    </div>
  )
}

export default About