import './App.css';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

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

  let [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Reservations' element={<Reservations selections={selections} selectionFunc={setSelections} times={availableTimes} />} />
        <Route path='/OrderOnline' element={<OrderOnline />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
