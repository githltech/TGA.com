import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Explore from './pages/Explore';

const App = () =>
 {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/explore' element = {<Explore/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
