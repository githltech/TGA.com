import React from "react";
import { useNavigate } from "react-router-dom";
import Tgalogo from '../images/logo TGA.png';
import { IoMdLogIn } from "react-icons/io";

import {
    FaHome,
    FaInfoCircle,
    FaHiking,
    FaCalendarAlt,
    FaSuitcase,
    FaHotel,

  } from "react-icons/fa";
  import { IoMdSearch } from "react-icons/io";




const Navbar = () => {
  const navigate = useNavigate();

 
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="w-full absolute top-0 left-0 bg-transparent z-50">
      {/* Top Navigation Bar */}
      <div className="flex justify-between py-2 px-4 border-b-[1px] border-white border-opacity-20">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img
            src={Tgalogo}
            alt="TGA Logo"
            className="h-6 bg-white rounded-full p-1"
          />
          <h1 className="text-white font-semibold">TGA</h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-40 bg-black opacity-60 text-white rounded-full">
        <div className="absolute left-3 top-[9px]  text-white">
            <IoMdSearch className="sm:text-xs text-[12px]" />
          </div>
          <input
            type="text"
            placeholder="Search for treks"
            className="w-full pl-8  pr-4 py-1 border border-gray-400 text-white rounded-full text-xs font-medium bg-transparent"
          />     
        </div>

        {/* Currency and Login */}
        <div className="flex items-center gap-1 bg-orange-500 text-white px-3  rounded-md hover:bg-orange-600 duration-500 text-xs">
          <div className="flex items-center cursor-pointer mt-[2px] text-xs">
            <IoMdLogIn/>
          </div>
          <a href="/" className="font-medium">Login</a>
        </div>
      </div>

      {/* Tabs and Buttons Section */}
      <div className="flex items-center justify-between flex-col md:flex-row py-2 px-4 border-b-[1px] border-white border-opacity-20">
        <div
          className="flex items-center sm:gap-16 md:gap-10 lg:gap-14 gap-4"
        >
          {[
            { label: "Home", icon: <FaHome />, path: "/explore" },
            { label: "About", icon: <FaInfoCircle />, path: "/about" },
            { label: "Treks & Tours", icon: <FaHiking />, path: "/treks-tours" },
            { label: "Events", icon: <FaCalendarAlt />, path: "/events" },
            { label: "Packages", icon: <FaSuitcase />, path: "/packages" },
            { label: "Hotels", icon: <FaHotel />, path: "/hotels" },
          ].map((tab, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 whitespace-nowrap cursor-pointer"
              onClick={() => handleNavigation(tab.path)}
            >
              <div className="flex flex-col items-center hover:border-b-[1px] border-orange-500">
                <h1 className="text-orange-500 text-sm ">{tab.icon}</h1>
                <p className="sm:text-sm text-xs font-semibold text-white mt-1">{tab.label}</p>
                </div>
            </div>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <button className="px-4 py-1 bg-orange-500 hover:bg-white hover:text-black text-white rounded-md font-medium duration-500">
            Tours
          </button>
          <button className="px-4 py-1 border border-gray-300 text-white hover:bg-orange-500 rounded-md font-medium duration-500">
            Activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
