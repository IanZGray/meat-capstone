import React from 'react'
import { useState, useReducer } from 'react'

import BookingForm from './BookingForm'

function Reservations( ) {
  let [selections, setSelections] = useState({
    date : '',
    time : '',
    guests: 0,
    occasion: '',
  })

  const updateTimes = (state, action) => {
    switch ( action.type ){
      case 'BUTTON_CLICKED':
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
      // return  fetchAPI(this.target.value);
      default:
        return state;
    }
  }


  const initializeTimes = ['Please Select a Day...']

  const [availableTimes, timeDispatch] = useReducer(updateTimes, initializeTimes)
  // let [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])


  const timesDispatch = () => timeDispatch({state:initializeTimes, type:'BUTTON_CLICKED'})

  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js').then(res => console.log('res',res.json))

  // }, [])
  return (
    <div
      style={{
        'display': 'flex',
        'justifyContent': 'center',
      }}
    >
      <BookingForm selections={selections} selectionFunc={setSelections} times={availableTimes} timesDispatch={timesDispatch} />
    </div>
  )
}

export default Reservations