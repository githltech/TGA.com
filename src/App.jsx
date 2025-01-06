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
import Profile from './user/Profile';
import ForgotUserPassword from './user/ForgotUserPassword';
import ResetUserPassword from './user/ResetUserPassword';
import ProtectedRoute from './route/ProtectedRoute';
import UpdateUserProfile from './user/UpdateUserProfile';
import UpdateUserPassword from './user/UpdateUserPassword';
import AdminDashboard from './admin/AdminDashboard';
import UsersList from './admin/UserList';
import UpdateUser from './admin/UpdateUser';
import StudentPrograms from './pages/StudentPrograms';
import ScrollToTop from './components/ScrollToTop';
import OffBeatCorporates from './pages/OffBeatCorporates';
import CreatePackage from './admin/CreatePackage';

const App = () =>{
  // const {isAuthenticatedUser} = useSelector((state)=>state.user);

  return (
    <>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/aboutus' element = {<Aboutus/>}/>
        <Route path='/trecks_tours' element = {<Trecks_Tours/>}/>
        <Route path='/events' element = {<Events/>}/>
        <Route path='/packages' element = {<Packages/>}/>
        <Route path='/hotels' element = {<Hotels/>}/>
        <Route path='/termsandconditions' element = {<TermsAndConditions/>}/>
        <Route path='/bookingdetails' element = {<BookingDetails/>}/>
        <Route path ='/studentprograms' element = {<StudentPrograms/>}/>
        <Route path ='/offbeatcorporates' element = {<OffBeatCorporates/>}/>

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
      
             <Route path='/admin/dashboard' element = {
              <ProtectedRoute isAdmin={true}>
               <AdminDashboard/>
              </ProtectedRoute>
           }/>

             <Route path='/admin/users' element = {
              <ProtectedRoute isAdmin={true}>
               <UsersList/>
             </ProtectedRoute>
        }/>

            <Route path='/admin/user/:id' element = {
             <ProtectedRoute isAdmin={true}>
               <UpdateUser/>
            </ProtectedRoute>
        }/>

           <Route path='/admin/package' element = {
             <ProtectedRoute isAdmin={true}>
              <CreatePackage/>
             </ProtectedRoute>
        }/>
          
       

        


      </Routes>
    </Router>
    </>
  )
}

export default App;
