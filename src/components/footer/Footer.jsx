import React from "react";
import { Link } from "react-router-dom";
import tgalogo from '../../images/tganewlogo.png'

function Footer() {
  const destinations = [
    { 
     name: "Bali",
     img: "https://media1.thrillophilia.com/filestore/7n468thoab229c8592mzxc28uzaq_shutterstock_429673480.jpg?w=340&dpr=2" 
    },
    {
       name: "Dubai",
       img: "https://media1.thrillophilia.com/filestore/m8gv8f6ajyn9mfi5fjf8ckumb228_shutterstock_2402071493.jpg?w=340&dpr=2" 
      },
    {
       name: "Singapore", 
       img: "https://media1.thrillophilia.com/filestore/xi2vefrf0emjnxkg84v21bg3idgm_snapedit_1697443034411.png?w=340&dpr=1.0&q=70"
       },
    { 
      name: "Thailand",
      img: "https://media1.thrillophilia.com/filestore/fj3naw6ws361i5az4bpe9k4niqap_wanderon-spiti-winter-11.jpg?w=340&dpr=1.0&q=70" 
    },
    { 
      name: "Andaman",
      img: "https://media1.thrillophilia.com/filestore/12b1z6msguetrurrgtiktwbcz8z0_steptodown.com346395.jpg?w=340&dpr=2" 
    },
    {
       name: "India",
       img: "https://media1.thrillophilia.com/filestore/98krlp93lr2eslrqwazfr5pd09nb_shutterstock_1293922393.jpg?w=340&dpr=2"
       },
    { 
      name: "Ladakh",
      img: "https://media1.thrillophilia.com/filestore/kp7we25hsekhla72r3b9szjm4uuc_rishabh-pandoh-m1PFxGQ-5x0-unsplash.jpg?w=340&dpr=2"
     },
    {
       name: "Hong Kong",
       img: "https://media1.thrillophilia.com/filestore/xi2vefrf0emjnxkg84v21bg3idgm_snapedit_1697443034411.png?w=340&dpr=2"
       },
    { 
      name: "Sri Lanka", 
      img: "https://media1.thrillophilia.com/filestore/98krlp93lr2eslrqwazfr5pd09nb_shutterstock_1293922393.jpg?w=340&dpr=2" },
  ];

  return (
    <footer className="bg-gray-800 mt-52 lg:mt-36">
      <div className="p-4 lg:p-24">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-10 footer_shadow rounded-xl -mt-48 pb-16">
          {/* Column 1 */}
          <div className="border-0 md:border-r-[1px] border-gray-300 ">
            <h3 className="text-sm font-regular1 mb-4 uppercase text-secondaryblack">About TGA</h3>
            <ul className="space-y-2 text-[10px] uppercase text-[#858585] font-medium">
            <li className="">
    <Link
      to="/aboutus"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      About Us
    </Link>
  </li>
  <li>
    <Link
      to="#our-team"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Our Team
    </Link>
  </li>
  <li>
    <Link
      to="#why-choose-us"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Why Choose Us
    </Link>
  </li>
  <li>
    <Link
      to="#testimonials"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Testimonials
    </Link>
  </li>
  <li>
    <Link
      to="#careers"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Careers
    </Link>
  </li>
  <li>
    <Link
      to="#support"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Support
    </Link>
  </li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div className="border-0 md:border-r-[1px] border-gray-300 " >
            <h3 className="text-sm font-regular1 mb-4 uppercase text-secondaryblack">Information & Policies</h3>
            <ul className="space-y-2 text-[10px] uppercase text-[#858585] font-medium">
            <li>
    <Link
      to="#about-us"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      FAQs
    </Link>
  </li>
  <li>
    <Link
      to="#our-team"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Partner With Us
    </Link>
  </li>
  <li>
    <Link
      to="#why-choose-us"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Destination Marketing
    </Link>
  </li>
  <li>
    <Link
      to="#testimonials"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Travel Insurance
    </Link>
  </li>
  <li>
    <Link
      to="/termsandconditions"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Terms & Conditions
    </Link>
  </li>
  <li>
    <Link
      to="#support"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Cancellation Policy
    </Link>
  </li>
    </ul>
  </div>

          {/* Column 3 */}
          <div className="border-0 md:border-r-[1px] border-gray-300 ">
            <h3 className="text-sm font-regular1 mb-4 uppercase text-secondaryblack">For Travellers</h3>
            <ul className="space-y-2 text-[10px] uppercase text-[#858585] font-medium">
        <li>
        <Link
      to="#support"
      className="hover:underline hover:text-secordary transition duration-300"
    >
     Gift an Experience
    </Link>
        </li>
   <li>
   <Link
      to="#support"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Travel Blog
    </Link>
   </li>

    <li>
    <Link
      to="#support"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Travel Guides
    </Link>
    </li>

    <li>
    <Link
      to="#support"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Packing Tips
    </Link>
    </li>

    <li>
    <Link
      to="#support"
      className="hover:underline hover:text-secordary transition duration-300"
    >
      Seasonal Discounts

    </Link>
    </li>
            </ul>
          </div>

          {/* Column 4 (Travel Destinations with Images) */}
          <div>
            <h3 className="text-sm font-regular1 mb-4 uppercase text-secondaryblack">Travel Destinations</h3>
            <div className="grid grid-cols-3 gap-2">
              {destinations.map((dest, index) => (
                <div key={index} className="group gap-3  relative overflow-hidden cursor-pointer">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-10 sm:h-20 object-cover border  transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-gray-300 text-[6px] text-center sm:text-xs font-semibold">{dest.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
       
       <hr className="my-8 border-gray-600" />
  
        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4 md:space-y-0">
        <div className="flex mb-2">
        <img src={tgalogo} alt="TGA Logo" className="h-10 mx-4" />
        </div>

              {/* Social Icons */}
          <div className="flex space-x-4 md:py-6 py-2">
            <Link to="#" className="text-black rounded-full px-[17px] py-2 text-xl bg-white hover:text-secordary">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="#" className="text-black rounded-full px-[14px] py-2 text-xl bg-white hover:text-secordary">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="text-black rounded-full px-[13px] py-2 text-xl bg-white hover:text-secordary">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="text-black rounded-full px-[14px] py-2 text-xl bg-white hover:text-secordary">
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link to="#" className="text-black rounded-full px-3 py-2 text-xl bg-white hover:text-secordary">
              <i className="fab fa-youtube"></i>
            </Link>
          </div>

            <div className="flex flex-col text-[#424241] font-museo font-light text-xxs items-center gap-2">
            <p className=" text-gray-400">
              © 2024 <span className="text-white">The Gypsy Adventures.com</span> All rights reserved.
            </p>
            {/* <p className=" text-gray-400 font-semibold">
              © Developed And Managed By <Link to="/https://hltechindia.com/" className="border-b-[1px] text-red-200 hover:text-red-400">HL Tech Pvt.Ltd</Link> .
            </p> */}
            </div>
          </div>
       
      </div>
    </footer>
  );
}

export default Footer;
