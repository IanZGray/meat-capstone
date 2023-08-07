import { React } from 'react'
// import { submitAPI } from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"

function BookingForm({ selections, selectionFunc, times, timesDispatch }) {
    let timesMap = times || []

    // const [dateError, setDateError] = useState('')
    // const [timeError, setTimeError] = useState('')
    // const [guestsError, setGuestsError] = useState('')
    // const [occasionError, setOccasionError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for booking your meal on ${selections.date} at ${selections.time} o'Clock for ${selections.gests} guests. We hope you enjoy your ${selections.occasion}`)
    }

    const handleChange = (e) => {
        selectionFunc({...selections, date : e.target.value});
        timesDispatch();
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1
            style={{
                'margin-bottom': '20px'
            }}
        >Reservations</h1>

        <label htmlFor="res-date">Choose Date*</label>
        <input type="date" id="res-date" data-testid='calendar' required onChange={handleChange}/>
        {/* <p>{dateError}</p> */}

        <label htmlFor="res-time">Choose Time*</label>
        <select id="res-time" data-testid='time-pulldown' required onChange={(e)=> selectionFunc({...selections, time : e.target.value})} >
            {timesMap.map((time) => {
                return <option key={time} data-testid='times' >{time}</option>
            })}
        </select>
        {/* <p>{timeError}</p> */}

        <label htmlFor="guests">Number of Guests*</label>
        <input type="number" placeholder="How Many?" min="1" max="10" id="guests" required onChange={(e)=> selectionFunc({...selections, guests : e.target.value})}/>
        {/* <p>{guestsError}</p> */}

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" min='1' onChange={(e)=> selectionFunc({...selections, occasion : e.target.value})}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        {/* <p>{occasionError}</p> */}

        <button
            type="submit"
            style={{
                'alignSelf': 'center',
                'width': '55%',
                'marginTop': '20px',
            }}
        >Book Now</button>
    </form>
  )
}

export default BookingForm