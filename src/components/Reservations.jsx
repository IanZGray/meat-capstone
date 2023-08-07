import React from 'react'
import BookingForm from './BookingForm'

function Reservations({ selections, selectionFunc, times, timesDispatch } ) {

  return (
    <div
      style={{
        'display': 'flex',
        'justifyContent': 'center',
      }}
    >
      <BookingForm selections={selections} selectionFunc={selectionFunc} times={times} timesDispatch={timesDispatch} />
    </div>
  )
}

export default Reservations