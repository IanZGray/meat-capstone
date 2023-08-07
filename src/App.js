import './App.css';
import { useState, useReducer, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { fetchAPI } from "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"


import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline'
import Login from './components/Login'
import Footer from './components/Footer';

function App() {
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
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservations' element={<Reservations selections={selections} selectionFunc={setSelections} times={availableTimes} timesDispatch={timesDispatch}/>} />
        <Route path='/OrderOnline' element={<OrderOnline />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
