import './App.css';
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

  return (
    <>
      <Nav/>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Reservations' element={<Reservations />} />
          <Route path='/OrderOnline' element={<OrderOnline />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
