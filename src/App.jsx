import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Aboutus from './pages/aboutus/Aboutus';
import Trecks_Tours from './pages/Trecks_Tours';
import Events from './pages/Events';
import Packages from './pages/Packages';
import Hotels from './pages/Hotels';
import TermsAndConditions from './pages/termsAndConditions/TermsAndConditions';
import BookingDetails from './pages/booking/BookingDetails';
import Profile from './user/Profile';
import ForgotUserPassword from './user/ForgotUserPassword';
import ResetUserPassword from './user/ResetUserPassword';
import ProtectedRoute from './route/ProtectedRoute';
import UpdateUserProfile from './user/UpdateUserProfile';
import UpdateUserPassword from './user/UpdateUserPassword';

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

        <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        
        <Route
           path='/password/forgot' 
           element = {
           <ForgotUserPassword/>}
           />

        <Route
            path='/password/reset/:token'
            element = {
            <ResetUserPassword/>
          }/>

        <Route path='/password/update' element = {
            <ProtectedRoute>
              <UpdateUserPassword/>
            </ProtectedRoute>
          }/>


        <Route path='/me/update' element = {
            <ProtectedRoute>
              <UpdateUserProfile/>
            </ProtectedRoute>
          }
          />
        


      </Routes>
    </Router>
    </>
  )
}

export default App;
