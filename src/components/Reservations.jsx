import React from 'react'
import BookingForm from './BookingForm'

function Reservations({selections, selectionFunc, times} ) {

  return (
    <div
      style={{
        'display': 'flex',
        'justifyContent': 'center',
      }}
    >
      <BookingForm selections={selections} selectionFunc={selectionFunc} times={times} />
    </div>
  )
}

export default Reservations