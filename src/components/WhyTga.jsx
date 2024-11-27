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
          <h2 className="text-xl sm:text-3xl font-bold text-black mb-6">WHY US WITH & BEYOND</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">
            {/* Card 1 */}
            <div className="flex flex-col items-center">
              <FaHandshake className="text-4xl text-red-500 mb-4" />
              <h3 className="font-semibold text-lg">Responsible Travel</h3>
              <p className="text-gray-600 text-sm font-semibold">We hava been making a difference for 30 years thanks to you u owr guest </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center">
              <FaBullseye className="text-4xl text-green-500 mb-4" />
              <h3 className="font-semibold text-lg">In Our hands</h3>
              <p className="text-gray-600 text-sm font-semibold">We hava been making a difference for 30 years thanks to you u owr guest</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center">
              <FaRocket className="text-4xl text-orange-500 mb-4" />
              <h3 className="font-semibold text-lg">Travel Experts</h3>
              <p className="text-gray-600 text-sm font-semibold">We hava been making a difference for 30 years thanks to you u owr guest</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center">
              <FaGlobe className="text-4xl text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg">Finest Guides</h3>
              <p className="text-gray-600 text-sm font-semibold">We hava been making a difference for 30 years thanks to you u owr guest</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WhyTga;
