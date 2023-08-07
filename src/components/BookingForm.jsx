import { React, useEffect, useState } from 'react'
// import { submitAPI } from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"

function BookingForm({ selections, selectionFunc, times, timesDispatch }) {
    let timesMap = times || []

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for booking your meal on ${selections.date} at ${selections.time} o'Clock for ${selections.gests} guests. We hope you enjoy your ${selections.occassion}`)
    }

    const handleChange = (e) => {
        selectionFunc({...selections, date : e.target.value});
        timesDispatch();
    }

  return (
    <form >
        <h1
            style={{'margin-bottom': '20px'}}
        >Reservations</h1>
        <label htmlFor="res-date">Choose Date</label>
        <input type="date" id="res-date" data-testid='calendar' required onChange={handleChange}/>
        <label htmlFor="res-time">Choose Time</label>
        <select id="res-time" data-testid='time-pulldown' required onChange={(e)=> selectionFunc({...selections, time : e.target.value})} >
            {timesMap.map((time) => {
                return <option key={time} data-testid='times' >{time}</option>
            })}
        </select>

        <label htmlFor="guests">Number of Guests</label>
        <input type="number" placeholder="How Many?" min="1" max="10" id="guests" required onChange={(e)=> selectionFunc({...selections, guests : e.target.value})}/>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" min='1' onChange={(e)=> selectionFunc({...selections, occassion : e.target.value})}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <button
            type="submit"
            style={{
                'alignSelf': 'center',
                'width': '55%',
            }}
            onClick={(e) => {handleSubmit(e)}}
        >Book Now</button>
        {/* <h2 style={{'color':'black'}}>{selections.date || 'hi'}</h2>
        <h2 style={{'color':'black'}}>{selections.time || 'hi'}</h2>
        <h2 style={{'color':'black'}}>{selections.guests || 'hi'}</h2>
        <h2 style={{'color':'black'}}>{selections.occassion || 'hi'}</h2> */}
    </form>
  )
}

export default BookingForm