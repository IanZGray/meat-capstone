import { React, useEffect, useState } from 'react'

function BookingForm({ selections, selectionFunc, times, timesDispatch }) {

    // const [timeType, setTimeType] = useState(false)
    let timesMap = times || []

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('selections', selections, 'times', times)
    }

    // useEffect(() => {
    //   if (selections.date === '') {
    //     return () => {
    //         setTimeType(false)
    //       }
    //   } else {
    //     return () => {
    //         setTimeType(true)
    //       }
    //   }
    // }, [])

  return (
    <form >
        <label htmlFor="res-date">Choose Date</label>
        <input type="date" id="res-date" onChange={(e)=> selectionFunc({...selections, date : e.target.value})} onClick={timesDispatch}/>
        <label htmlFor="res-time">Choose Time</label>
        <select id="res-time " onChange={(e)=> selectionFunc({...selections, time : e.target.value})} >
            {timesMap.map((time) => {
                return <option key={time} >{time}</option>
            })}
        </select>

        <label htmlFor="guests">Number of Guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=> selectionFunc({...selections, guests : e.target.value})}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e)=> selectionFunc({...selections, occassion : e.target.value})}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <button 
            type="submit" 
            style={{
                'alignSelf': 'center',
                'width': '55%',
            }}
            onClick={(e) => { handleSubmit(e) }}
        >Make Your Reservation</button>
    </form>
  )
}

export default BookingForm