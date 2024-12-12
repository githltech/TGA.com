import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Aboutus from './pages/aboutus/Aboutus';
import Trecks_Tours from './pages/Trecks_Tours';
import Events from './pages/Events';
import Packages from './pages/Packages';
import Hotels from './pages/Hotels';
import TermsAndConditions from './pages/termsAndConditions/TermsAndConditions';
import BookingDetails from './pages/booking/BookingDetails';
//import LoginSignup from './user/LoginSignup';

const App = () =>
 {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/aboutus' element = {<Aboutus/>}/>
        <Route path='/trecks_tours' element = {<Trecks_Tours/>}/>
        <Route path='/events' element = {<Events/>}/>
        <Route path='/packages' element = {<Packages/>}/>
        <Route path='/hotels' element = {<Hotels/>}/>
        <Route path='/termsandconditions' element = {<TermsAndConditions/>}/>
        <Route path='/bookingdetails' element = {<BookingDetails/>}/>
        {/* <Route path='/TGA.com/login' element = {<LoginSignup/>}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App;
