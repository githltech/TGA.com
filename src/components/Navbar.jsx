import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tgalogo from "../images/tganewlogo.png";
import tgalogoscroll from "../images/logo TGA.png";

import { IoMdLogIn, IoMdCall } from "react-icons/io";
import { FaHome, FaInfoCircle, FaHiking, FaCalendarAlt, FaSuitcase, FaHotel, } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa"; // Menu icons

const Navbar = () => {
  const baseText = "Search for"; // Static base text
  const additionalTexts = [" treks", " Destinations", " Explore"];
  const [displayedText, setDisplayedText] = useState(baseText); // Full placeholder text
  const [currentIndex, setCurrentIndex] = useState(0); // Index of current additional text
  const [charIndex, setCharIndex] = useState(0); // Character index for typewriter effect
  const [isMenuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const [scrolling, setScrolling] = useState(false); // State to track scroll
  const [logoSrc, setLogoSrc] = useState(tgalogo); // State for logo source

  const navigate = useNavigate();

  useEffect(() => {
    const typeInterval = setInterval(() => {
      const currentAdditionalText = additionalTexts[currentIndex];
      if (charIndex < currentAdditionalText.length) {
        setDisplayedText(baseText + currentAdditionalText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCharIndex(0);
          setCurrentIndex((prev) => (prev + 1) % additionalTexts.length);
        }, 2000); // Pause for 2 seconds before next text
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [charIndex, currentIndex]);

  useEffect(() => {
    // Event listener to track scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        setLogoSrc(tgalogoscroll);
      } else {
        setScrolling(false);
        setLogoSrc(tgalogo); // Reset logo when not scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    setMenuOpen(false); // Close the menu after navigating
  };

  return (
    <div className="w-full absolute top-0 left-0 bg-transparent z-50">
       {/* Top Navigation Bar */}
       <div
        className={`${
          scrolling ? "bg-white shadow-md" : "bg-transparent"
        } fixed top-0 left-0 w-full py-2 px-4 transition-all`}
      >
      {/* Top Navigation Bar */}
      <div className={`flex justify-between py-2 lg:border-b-[1px] ${scrolling ? "lg:hidden block" : "border-white"} border-opacity-20`}>
        {/* Logo */}
        <div className={`flex items-center gap-2 ${scrolling ? "text-black" : "text-textwhite"}`}>
          <img src={logoSrc} alt="TGA Logo" className="h-8" />
          <h1 className=" font-semibold">TGA</h1>
        </div>

        {/* Search Bar */}
        <div className={`hidden sm:block relative sm:w-48 lg:w-80 rounded-full ${scrolling ? "bg-black opacity-90 text-textwhite":"bg-black opacity-55"}`}>
          <div className="absolute left-3 top-[10px] text-textwhite">
            <IoMdSearch className="text-sm" />
          </div>
          <input
            type="text"
            placeholder={displayedText}
            className="w-full pl-8 pr-4 py-2 border border-gray-400 text-textwhite rounded-full text-xs font-medium bg-transparent focus:outline-none"
          />
        </div>

        {/* Currency, Mobile Number, and Login */}
        <div className={`flex items-center gap-3 ${scrolling ? "text-black" :"text-textwhite" }`}>
          {/* Call Icon */}
          <a
            href="tel:91 92055 15652"
            className="sm:flex items-center gap-1 text-sm"
          >
            <div className="flex items-center cursor-pointer mt-[2px] text-sm">
              <IoMdCall className="animate-bounce text-xl sm:text-lg" />
            </div>
            <span className="font-medium hidden sm:block">+91 92055 15652</span>
          </a>

{/* <p
className={`text-xs font-semibold mt-2 uppercase transition-colors ${
  scrolling ? "text-black" : "text-white"
}`}
>
{tab.label}
</p> */}

          {/* Login Button */}
          <div className="flex items-center gap-1 bg-primary px-3 py-2 rounded-md hover:bg-secordary duration-500 text-xs">
            <div className="flex items-center cursor-pointer mt-[2px] text-xs">
              <IoMdLogIn />
            </div>
            <a href="/" className="font-medium">
              Login
            </a>
          </div>
           {/* Menu Icon */}
           <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className={`text-2xl focus:outline-none lg:hidden ${scrolling ? "text-black" : "text-textwhite"}`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Tabs and Buttons Section for Large Screens */}
      <div className="hidden lg lg:flex items-center justify-center py-2 px-4 border-b-[1px] border-white border-opacity-20">
        <div className="flex items-center gap-4 lg:gap-10 flex-wrap">
          {[
            { label: "Home", icon: <FaHome />, path: "/explore" },
            { label: "About", icon: <FaInfoCircle />, path: "/about" },
            { label: "Treks & Tours", icon: <FaHiking />, path: "/treks-tours" },
            { label: "Events", icon: <FaCalendarAlt />, path: "/events" },
            { label: "Packages", icon: <FaSuitcase />, path: "/packages" },
            { label: "Hotels", icon: <FaHotel />, path: "/hotels" },
            { label: "Student Programs", icon: <PiStudentBold />, path: "/student" },
            { label: "Offbeat Corporates", icon: <FaHotel />, path: "/offbeat" },
          ].map((tab, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 whitespace-nowrap cursor-pointer"
              onClick={() => handleNavigation(tab.path)}
            >
              <div className="flex flex-col items-center hover:border-b-[1px] border-primary">
                <h1 className="text-primary text-sm md:text-2xl ">{tab.icon}</h1>
                <p
                  className={` mt-2 ${
                    scrolling ? "navlabel" : "navlabelscroll"
                  }`}
                >
                  {tab.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Sliding Menu for Small Screens */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black text-textwhite  z-40 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="p-4 space-y-6">
        <button
            onClick={() => setMenuOpen(false)}
            className="text-textwhite text-2xl absolute top-4 right-4"
          >
            <FaTimes />
          </button>
          {[
            { label: "Home", path: "/explore" },
            { label: "About", path: "/about" },
            { label: "Treks & Tours", path: "/treks-tours" },
            { label: "Events", path: "/events" },
            { label: "Packages", path: "/packages" },
            { label: "Hotels", path: "/hotels" },
            { label: "Student Programs", path: "/student" },
            { label: "Offbeat Corporates", path: "/offbeat" },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="cursor-pointer text-xs font-medium hover:text-orange-500 border-b-[1px] border-gray-200 pb-3 border-opacity-10"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
