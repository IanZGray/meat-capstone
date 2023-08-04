import React from 'react'

import Special from '../components/Special'

function Specials() {
  return (
    <section
      className='specialSection'
    >
      <div
        style={{
          'display': 'flex',
          'flexDirection': 'column',
        }}
      >
        <article
          style={{
            'display': 'flex',
            'justifyContent': 'space-between',
            'alignItems': 'center',
            'marginLeft': '1%',
            'marginRight': '1%',
          }}
        >
          <h1
            style={{
              'color': 'black',
            }}
          >This Week's Specials!</h1>
          <button>Online Menu</button>
        </article>
        <article class='specialMap'>
          <Special/>
        </article>
      </div>
    </section>
  )
}

export default Specials