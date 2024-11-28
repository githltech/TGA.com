import React from "react";
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-4 footer_shadow border rounded-xl border-gray-300 -mt-48">
          {/* Column 1 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">About TGA</h3>
            <ul className="space-y-2 text-[10px] uppercase font-semibold text-gray-600">
            <li>
    <a
      href="#about-us"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      About Us
    </a>
  </li>
  <li>
    <a
      href="#our-team"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Our Team
    </a>
  </li>
  <li>
    <a
      href="#why-choose-us"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Why Choose Us
    </a>
  </li>
  <li>
    <a
      href="#testimonials"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Testimonials
    </a>
  </li>
  <li>
    <a
      href="#careers"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Careers
    </a>
  </li>
  <li>
    <a
      href="#support"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Support
    </a>
  </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">Information & Policies</h3>
            <ul className="space-y-2 text-[10px] uppercase font-semibold text-gray-600">
            <li>
    <a
      href="#about-us"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      FAQs
    </a>
  </li>
  <li>
    <a
      href="#our-team"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Partner With Us
    </a>
  </li>
  <li>
    <a
      href="#why-choose-us"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Destination Marketing
    </a>
  </li>
  <li>
    <a
      href="#testimonials"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Travel Insurance
    </a>
  </li>
  <li>
    <a
      href="#careers"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Privacy Policy
    </a>
  </li>
  <li>
    <a
      href="#support"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Cancellation Policy
    </a>
  </li>
    </ul>
  </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">For Travellers</h3>
            <ul className="space-y-2 text-[10px] uppercase font-semibold text-gray-600">
        <li>
        <a
      href="#support"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
     Gift an Experience
    </a>
        </li>
   <li>
   <a
      href="#support"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Travel Blog
    </a>
   </li>

    <li>
    <a
      href="#support"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Travel Guides
    </a>
    </li>

    <li>
    <a
      href="#support"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Packing Tips
    </a>
    </li>

    <li>
    <a
      href="#support"
      className="hover:underline hover:text-orange-500 transition duration-300"
    >
      Seasonal Discounts

    </a>
    </li>
            </ul>
          </div>

          {/* Column 4 (Travel Destinations with Images) */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">Travel Destinations</h3>
            <div className="grid grid-cols-3 gap-2">
              {destinations.map((dest, index) => (
                <div key={index} className="group relative">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-14 object-cover rounded-sm"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="text-white text-xs">{dest.name}</span>
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
            <a href="#" className="text-black rounded-full px-4 py-2 text-xl bg-white hover:text-orange-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-black rounded-full px-3 py-2 text-xl bg-white hover:text-orange-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-black rounded-full px-3 py-2 text-xl bg-white hover:text-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-black rounded-full px-3 py-2 text-xl bg-white hover:text-orange-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-black rounded-full px-3 py-2 text-xl bg-white hover:text-orange-500">
              <i className="fab fa-youtube"></i>
            </a>
          </div>

            <div className="flex flex-col text-xs sm:text-lg items-center gap-2">
            <p className=" text-gray-400 font-semibold">
              © 2024 TGA.com All rights reserved.
            </p>
            <p className=" text-gray-400 font-semibold">
              © Developed And Managed By <a href="/https://hltechindia.com/" className="border-b-[1px] text-red-200 hover:text-red-400">HL Tech Pvt.Ltd</a> .
            </p>
            </div>
          </div>
       
      </div>
    </footer>
  );
}

export default Footer;
