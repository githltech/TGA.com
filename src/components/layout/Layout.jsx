import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../Navbar';


const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    
    <div className="min-h-screen">
        {children}
    </div>
    <Footer/>
    </>
   
  );
};

export default Layout;