import { React } from 'react'

function BookingForm({selections, selectionFunc, times}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('selections', selections, 'times', times)
    }

  return (
    <form >
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={(e)=> selectionFunc({...selections, date : e.target.value})}/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time " onChange={(e)=> selectionFunc({...selections, time : e.target.value})}>
            {times.map((time) => {
                return <option key={time} >{time}</option>
            })}
        </select>
        <label htmlFor="guests">Number of guests</label>
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
        >Make Your reservation</button>
    </form>
  )
}

export default BookingForm