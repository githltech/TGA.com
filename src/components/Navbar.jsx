import React, { useState, useEffect } from "react";
import { useNavigate,useLocation, Link } from "react-router-dom";
import tgalogo from "../images/tganewlogo.png";
import tgalogoscroll from "../images/logo TGA.png";
import { IoMdLogIn, IoMdCall } from "react-icons/io";
import { FaHome, FaInfoCircle, FaHiking, FaCalendarAlt, FaSuitcase, FaHotel, } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa"; // Menu icons
import LoginSignup from "../user/LoginSignup";
import {logout} from '../actions/UserAction';
import { useDispatch,useSelector } from "react-redux";
import userlogo from '../images/Profile.png'
import { useAlert } from "react-alert";
import { useModal } from "../context/ModelContext";

const Navbar = () => {
  
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const {user } = useSelector(
    (state) => state.user
  );

  const { isModalOpen, openModal, closeModal } = useModal();

  const location = useLocation(); // Get current route
  const isCustomPage = location.pathname === "/aboutus"
    || location.pathname === "/trecks_tours"  
    || location.pathname === "/events"
    || location.pathname === "/packages"
    || location.pathname === "/hotels"
    || location.pathname === "/termsandconditions"
    || location.pathname === "/account"
    || location.pathname === "/bookingdetails"
    || location.pathname === "/studentprograms"
    || location.pathname === "/offbeatcorporates"
    || location.pathname === "/admin/dashboard";
 

  const baseText = "Search for"; // Static base text
  const additionalTexts = [" treks", " Destinations", " Explore"];

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState(baseText); // Full placeholder text
  const [currentIndex, setCurrentIndex] = useState(0); // Index of current additional text
  const [charIndex, setCharIndex] = useState(0); // Character index for typewriter effect
  const [isMenuOpen, setMenuOpen] = useState(false); // State for menu toggle
  const [scrolling, setScrolling] = useState(false); // State to track scroll
  const [logoSrc, setLogoSrc] = useState(tgalogo); // State for logo source
  // const [isModalOpen, setModalOpen] = useState(false); // State for the modal
  const [showOptions, setShowOptions] = useState(false); // State to toggle options visibility


  const handleLogout = () => {
    dispatch(logout());
    alert.success("Logout Successfully");
    openModal();
    
  };

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
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scroll state needs to change
      if (currentScrollY > 0 && lastScrollY === 0) {
        setScrolling(true);
        setLogoSrc(tgalogoscroll);
      } else if (currentScrollY === 0 && lastScrollY > 0) {
        setScrolling(false);
        setLogoSrc(tgalogo);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    setMenuOpen(false); // Close the menu after navigating
  };

  const handleClick = () => {
    setShowOptions(!showOptions); // Toggle the visibility of 'More options'
  };

  return (
    <div className="w-full absolute top-0 left-0 bg-transparent z-50">
       {/* Top Navigation Bar */}
       <div
        className={`${
          scrolling ? "bg-white shadow-md" : "bg-transparent"
        } fixed top-0 left-0 w-full  px-4 transition-colors duration-300`}
      >

      <div className={`flex justify-between py-2 lg:border-b-[2px] ${ scrolling ? "lg:hidden block" : "border-secordary"} border-opacity-20`}>
        {/* Logo */}
        <div className={`flex items-center gap-2 w-52 ${isCustomPage ? "text-black" : scrolling ? "text-black" : "text-textwhite"}`}>
          <img src={isCustomPage ? tgalogoscroll :logoSrc} alt="TGA Logo" className="h-10" />
          {/* <h1 className=" logotypewrite text-sm font-semibold uppercase">The Gypsy Adventure</h1> */}
        </div>

        {/* Search Bar */}
        <div className={`hidden md:block relative sm:w-48 lg:w-80 rounded-full ${isCustomPage ? "bg-black opacity-90 text-textwhite" : scrolling ? "bg-black opacity-90 text-textwhite" : "bg-black opacity-55"}`}>
          <div className="absolute left-3 top-[10px] text-textwhite">
            <IoMdSearch className="text-sm" size={20} />
          </div>
          <input
            type="text"
            placeholder={displayedText}
            className="w-full pl-10 pr-4 py-3 border border-gray-400 text-textwhite rounded-full text-xs font-medium bg-transparent focus:outline-none"
          />
        </div>

        {/* Currency, Mobile Number, and Login */}
        <div className={`flex items-center gap-3 ${isCustomPage ? "text-black" : scrolling ? "text-black" : "text-textwhite"}`}>
          {/* Call Icon */}
          <a
            href="tel:91 92055 15652"
            className="sm:flex items-center gap-1 text-sm"
          >
            <div className="flex items-center cursor-pointer mt-[2px] text-sm">
              <IoMdCall className="animate-bounce text-xl sm:text-lg" />
            </div>
          </a>
          {user ? (
            <div className="relative group">
            {/* Avatar and Name */}
            <button
              className="flex items-center space-x-2 "
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <img
                src={user.avatar && user.avatar.url ? user.avatar.url : userlogo}
                alt="Avatar"
                className="w-5 h-5 rounded-full"
              />
              <span  onClick={handleClick} className="font-medium text-xs capitalize">{user.name}</span>
              <span className="absolute w-full left-1/2 transform -translate-x-1/2 top-6 text-[8px] bg-black text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            More options
          </span>
            </button>
  
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute lg:-right-3 -right-10 mt-1 bg-white border text-gray-700 shadow-lg rounded w-40 text-xs">
                <ul>
                   {/* Admin Dashboard (only if user is admin) */}
                   { user.role === "admin" && (
                       <li className="border-b hover:bg-gray-100">
                       <Link to="/admin/dashboard" className="block px-4 py-2">
                         Dashboard
                         </Link>
                       </li>
                        )}
                  <li className="border-b hover:bg-gray-100">
                    <Link to="/account" className="block px-4 py-2">
                      My Account
                    </Link>
                  </li>
                  <li className="border-b hover:bg-gray-100">
                    <Link to="/my-orders" className="block px-4 py-2">
                      My Orders
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 w-full text-left"
                    >
                      Logout
                    </button>
                    {isModalOpen && <LoginSignup onClose={closeModal} />}
                  </li>
                </ul>
              </div>
            )}
          </div>
          ) : (
            <>
              {/* Login Button */}
              <div className="flex items-center gap-1 text-white bg-primary px-3 py-2 rounded-md hover:bg-secordary duration-500 text-xs">
            <div className="flex items-center cursor-pointer mt-[2px] text-xs">
              <IoMdLogIn />
            </div>
            <button onClick={openModal}  className="font-medium">
              Login
            </button>
          </div>
            </>
          )}

           {/* Menu Icon */}
           <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className={`text-2xl focus:outline-none lg:hidden ${isCustomPage ? "text-black" :  scrolling ? "text-black" : "text-textwhite"}`}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Tabs and Buttons Section for Large Screens */}
      <div className={`hidden  lg:flex items-center py-3 border-b-[2px] border-secordary border-opacity-20 ${ scrolling ? "justify-between" : "justify-center"}`}>

            {/* Logo */}
            <div className={`flex items-center gap-2 ${scrolling ? "text-black": "text-textwhite overscroll-y-auto hidden"}`}>
          <img src={logoSrc} alt="TGA Logo" className="h-10" />
          {/* <h1 className=" font-semibold">TGA</h1>           */}
        </div>
        
        <div className="flex items-center gap-4 lg:gap-10">
          {[
            { label: "Home", icon: <FaHome />, path: "/" ,blacklogo:tgalogoscroll},
            { label: "About", icon: <FaInfoCircle />, path: "/aboutus" },
            { label: "Treks & Tours", icon: <FaHiking />, path: "/trecks_tours" },
            { label: "Events", icon: <FaCalendarAlt />, path: "/events" },
            { label: "Packages", icon: <FaSuitcase />, path: "/packages" },
            { label: "Hotels", icon: <FaHotel />, path: "/hotels" },
            { label: "Student Programs", icon: <PiStudentBold />, path: "/studentprograms" },
            { label: "Offbeat Corporates", icon: <FaHotel />, path: "/offbeatcorporates" },
          ].map((tab, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 whitespace-nowrap cursor-pointer"
              onClick={() => handleNavigation(tab.path)}
            >
              <div className="flex flex-col items-center hover:border-b-[1px] border-primary">
                <h1 className= {`text-sm md:text-2xl ${isCustomPage ? "text-primary" : scrolling ? "text-primary": "text-white"} `}>{tab.icon}</h1>
                <p
                  className={` mt-2 ${
                    scrolling ? "navlabel" : isCustomPage ? "navlabel": "navlabelscroll"
                  }`}
                >
                  {tab.label}
                </p>
              </div>
            </div>
          ))}
        </div>

         {/* Currency, Mobile Number, and Login */}
         <div className={`flex items-center gap-3 ${scrolling ? "text-black" :"text-textwhite hidden overscroll-y-auto" }`}>
          {/* Call Icon */}
          <a
            href="tel:91 92055 15652"
            className="flex items-center gap-1 text-sm"
          >
            <div className="flex items-center cursor-pointer mt-[2px] text-sm">
              <IoMdCall className="animate-bounce text-xl sm:text-lg" />
            </div>
          </a>
          {user ? (
              <div className="relative">
              {/* Avatar and Name */}
              <button
                className="flex items-center space-x-2 "
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <img
                  src={user.avatar && user.avatar.url ? user.avatar.url : userlogo}
                  alt="Avatar"
                  className="w-5 h-5 rounded-full"
                />
                <span className="font-medium text-xs capitalize">{user.name}</span>
              </button>
    
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute border -right-3 mt-2 bg-white shadow-lg rounded w-40 text-xs">
                  <ul>

                     {/* Admin Dashboard (only if user is admin) */}
                     { user.role === "admin" && (
                       <li className="border-b hover:bg-gray-100">
                       <Link to="/admin/dashboard" className="block px-4 py-2">
                         Dashboard
                         </Link>
                       </li>
                        )}
                    <li className="border-b hover:bg-gray-100">
                      <Link to="/account" className="block px-4 py-2">
                        My Account
                      </Link>
                    </li>
                    <li className="border-b hover:bg-gray-100">
                      <Link to="/my-orders" className="block px-4 py-2">
                        My Orders
                      </Link>
                    </li>
                    <li className="hover:bg-gray-100">
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 w-full text-left"
                      >
                        Logout
                      </button>
                      {isModalOpen && <LoginSignup onClose={closeModal} />}
                    </li>
                  </ul>
                </div>
              )}
            </div>
  
          ) : (
            <>
            {/* Login Button */}
          <div className="flex items-center gap-1 text-white bg-primary px-3 py-2 rounded-md hover:bg-secordary duration-500 text-xs">
            <div className="flex items-center cursor-pointer mt-[2px] text-xs">
              <IoMdLogIn />
            </div>
            <button onClick={openModal}  className="font-medium">
              Login
            </button>
          </div>
            </>
          )}
        </div>
      </div>
      </div>

      {/* Sliding Menu for Small Screens */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-primary text-textwhite  z-40 transform ${
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
            { label: "Home", path: "/" },
            { label: "About", path: "/aboutus" },
            { label: "Treks & Tours", path: "/trecks_tours" },
            { label: "Events", path: "/events" },
            { label: "Packages", path: "/packages" },
            { label: "Hotels", path: "/hotels" },
            { label: "Student Programs", path: "/studentprograms" },
            { label: "Offbeat Corporates", path: "/offbeatcorporates" },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="cursor-pointer text-xs uppercase font-medium hover:text-secordary border-b-[1px] border-gray-200 pb-3 border-opacity-10"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
       {/* Login/Signup Modal */}
       {isModalOpen && <LoginSignup onClose={() => setModalOpen(false)} />}
    </div>
    
  );
};

export default Navbar;
