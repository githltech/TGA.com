import React from "react";
import "tailwindcss/tailwind.css";
import { FaHandshake, FaBullseye, FaRocket, FaGlobe } from "react-icons/fa";


const WhyTga = () => {
  return (
    <div className="w-full py-10 px-4 lg:px-24">
      {/* Marquee Headline */}
      {/* <div className="relative overflow-hidden py-4">
        <div className="whitespace-nowrap animate-marquee text-3xl md:text-5xl font-bold text-orange-500 uppercase">
          Your Gateway to Off-Beat Adventures &nbsp;&nbsp;|&nbsp;&nbsp;
          Your Gateway to Off-Beat Adventures &nbsp;&nbsp;|&nbsp;&nbsp;
        </div>
      </div> */}

      {/* Why Us Section */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-black">WHY US WITH & BEYOND</h1>
          <hr className="flex flex-col border-b-2 border-primary w-40 m-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">
            {/* Card 1 */}
            <div className="flex flex-col items-center">
              <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/TravelWithHeart-01.svg" alt="" className="h-16" />
              <h3 className="text-sm font-bold uppercase">Responsible Travel</h3>
              <p className="text-[#424241] font-museo font-light1 text-xxs">We hava been making a difference for 30 years thanks to you u owr guest </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center">
              <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Philanthropy-01.svg" alt="" className="h-16" />
              <h3 className="text-sm font-bold uppercase">In Our hands</h3>
              <p className="text-[#424241] font-museo font-light1 text-xxs">You will have access to our unique Global Concierge service 24/7 while travelling</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center">
              <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/TravelExperts-01.svg" alt="" className="h-16" />
              <h3 className="text-sm font-bold uppercase">Travel Experts</h3>
              <p className="text-[#424241] font-museo font-light1 text-xxs">Our Travel Specialists never send a guest anywhere they haven’t been themselves</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center">
              <img src="https://www.andbeyond.com/wp-content/uploads/sites/5/Guide_02-01.svg" alt="" className="h-16" />
              <h3 className="text-sm font-bold uppercase">Finest Guides</h3>
              <p className="text-[#424241] font-museo font-light1 text-xxs">Finest interpretive experience from our incredible private and specialist guides</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WhyTga;
