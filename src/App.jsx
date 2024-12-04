import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Aboutus from './pages/aboutus/Aboutus';

const App = () =>
 {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/aboutus' element = {<Aboutus/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
