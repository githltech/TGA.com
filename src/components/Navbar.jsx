import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import tgalogo from '../images/tganewlogo.png'
import { IoMdLogIn } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";


import {
    FaHome,
    FaInfoCircle,
    FaHiking,
    FaCalendarAlt,
    FaSuitcase,
    FaHotel,
    

  } from "react-icons/fa";
  import { IoMdSearch } from "react-icons/io";
  import {IoMdCall} from 'react-icons/io';




const Navbar = () => {

  const baseText = "Search for"; // Static base text
  const additionalTexts = [' treks', ' Destinations', ' Explore'];
  const [displayedText, setDisplayedText] = useState(baseText); // Full placeholder text
  const [currentIndex, setCurrentIndex] = useState(0); // Index of current additional text
  const [charIndex, setCharIndex] = useState(0); // Character index for typewriter effect
  const navigate = useNavigate();


  useEffect(() => {
    const typeInterval = setInterval(() => {
      const currentAdditionalText = additionalTexts[currentIndex];
      if (charIndex < currentAdditionalText.length) {
        setDisplayedText(baseText + currentAdditionalText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        // Pause before starting next text
        clearInterval(typeInterval);
        setTimeout(() => {
          setCharIndex(0);
          setCurrentIndex((prev) => (prev + 1) % additionalTexts.length);
        }, 2000); // Pause for 2 seconds before next text
      }
    }, 100); // Typewriter speed: 100ms per character

    return () => clearInterval(typeInterval);
  }, [charIndex, currentIndex]);


 
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="w-full absolute top-0 left-0 bg-transparent z-50">
      {/* Top Navigation Bar */}
      <div className="flex justify-between py-2 px-4 border-b-[1px] border-white border-opacity-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={tgalogo}
            alt="TGA Logo"
            className="h-8"
          />
          <h1 className="text-white font-semibold">TGA</h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-40 sm:w-48 bg-black opacity-60 text-white rounded-full">
        <div className="absolute left-3 top-[10px]  text-white">
            <IoMdSearch className="text-sm" />
          </div>
          <input
            type="text"
            placeholder={displayedText}
            className="w-full pl-8  pr-4 py-2 border border-gray-400 text-white rounded-full text-xs font-medium bg-transparent"
          />     
        </div>

       {/* Currency, Mobile Number, and Login */}
<div className="flex items-center gap-3">
  <div className="flex items-center gap-1 animate-bounce text-white px-3 rounded-md  duration-500 text-xs">
  <a
    href="tel:91 92055 15652"
    className="flex items-center gap-1 text-white duration-500 text-sm hover:border-b-[1px]"
  >
    <div className="flex items-center cursor-pointer mt-[2px] text-sm">
      <IoMdCall />
    </div>
    <span className="font-medium hidden sm:block">+91 92055 15652</span>
  </a>
  </div>
  <div className="flex items-center gap-1 bg-orange-500 text-white px-3 py-2 rounded-md hover:bg-orange-600 duration-500 text-xs">
    <div className="flex items-center cursor-pointer mt-[2px] text-xs">
      <IoMdLogIn />
    </div>
    <a href="/" className="font-medium">Login</a>
  </div>
</div>

      </div>

      {/* Tabs and Buttons Section */}
      <div className="flex items-center justify-center py-2 px-4 border-b-[1px] border-white border-opacity-20">
        <div
          className="flex items-center gap-4 lg:gap-10 flex-wrap"
        >
          {[
            { label: "Home", icon: <FaHome />, path: "/explore" },
            { label: "About", icon: <FaInfoCircle />, path: "/about" },
            { label: "Treks & Tours", icon: <FaHiking />, path: "/treks-tours" },
            { label: "Events", icon: <FaCalendarAlt />, path: "/events" },
            { label: "Packages", icon: <FaSuitcase />, path: "/packages" },
            { label: "Hotels", icon: <FaHotel />, path: "/hotels" },
            { label: "Student Programs", icon: <PiStudentBold />, path: "/student" },
            { label: "OfBeat corporates", icon: <FaHotel />, path: "/offbeat" },
          ].map((tab, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 whitespace-nowrap cursor-pointer"
              onClick={() => handleNavigation(tab.path)}
            >
              <div className="flex flex-col items-center hover:border-b-[1px] border-orange-500">
                <h1 className="text-orange-500 text-sm md:text-2xl">{tab.icon}</h1>
                <p className=" text-xs font-semibold text-white mt-2 uppercase">{tab.label}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;