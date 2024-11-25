import React from "react";
import "tailwindcss/tailwind.css";
import { FaHandshake, FaBullseye, FaRocket, FaGlobe } from "react-icons/fa";


const AboutTGA = () => {
  return (
    <div className="w-full pt-10">
      {/* Marquee Headline */}
      {/* <div className="relative overflow-hidden py-4">
        <div className="whitespace-nowrap animate-marquee text-3xl md:text-5xl font-bold text-orange-500 uppercase">
          Your Gateway to Off-Beat Adventures &nbsp;&nbsp;|&nbsp;&nbsp;
          Your Gateway to Off-Beat Adventures &nbsp;&nbsp;|&nbsp;&nbsp;
        </div>
      </div> */}

      {/* About Section */}
      <div  style={{
          backgroundImage: `url('https://media1.thrillophilia.com/filestore/2e49mhdw009iol3wzy1jk6s7b58l_sikkim%20couple.jpg?w=340&dpr=2')`,
        }}
       className="relative bg-cover bg-center">
      <div className="absolute inset-0 bg-white opacity-90"></div>
      <div className="lg:px-24 px-4 relative z-10">
        <h1 className=" text-black font-bold">ABOUT TGA</h1>
        <h2 className="text-xl sm:text-3xl font-bold text-orange-500 mb-2">GETS HOLIDAYS</h2>
        <p className="text-gray-700 font-serif text-sm">
          At GeTS Holidays, we are passionate about making your voyage a lifetime experience. 
          From riding a rickshaw through the bustling streets of Chandni Chowk in Delhi to a thrilling Tiger Safari in Ranthambore, exploring the UNESCO World Heritage Site of Elephanta Caves, 
          to cruising in a houseboat along the backwaters of Kerala, finding the perfect amalgamation of the sun, sea, and sand in Goa to gazing at the iconic Taj Mahal in Agra, 
          GeTS Holidays is here to make each day of your stay in India a memory worth relishing.
        </p>
        <p className="text-gray-700 mt-4 font-serif text-sm">
          Operating since 1987, GeTS Holidays is a leading travel company dedicated to Leisure Travel, Meetings, Events, and Conferences. 
          With headquarters in New Delhi, Team GeTS comprises travel experts from not only India but other nationalities who speak major global languages - French, Spanish, Italian, and Portuguese.
        </p>
        <button className="mt-4 px-3 py-2 text-sm text-black border border-orange-500 hover:bg-orange-500 hover:text-white">
          Read More &rarr;
        </button>
      </div>
      

      {/* Why Us Section */}
      <div
        className="py-10 text-center">
        <div className="relative z-10">
          <h2 className="text-xl sm:text-3xl font-bold text-orange-500 mb-6 border-b-2 border-black m-auto w-fit">WHY US</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">
            {/* Card 1 */}
            <div className="flex flex-col items-center">
              <FaHandshake className="text-4xl text-red-500 mb-4" />
              <h3 className="font-semibold text-lg">Trust Maintained</h3>
              <p className="text-gray-800 text-sm">32+ Years of trust maintained</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center">
              <FaBullseye className="text-4xl text-green-500 mb-4" />
              <h3 className="font-semibold text-lg">One Stop Solution</h3>
              <p className="text-gray-800 text-sm">One stop solution for all your travel needs</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center">
              <FaRocket className="text-4xl text-orange-500 mb-4" />
              <h3 className="font-semibold text-lg">Quick Response</h3>
              <p className="text-gray-800 text-sm">Quick response time and reachable</p>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col items-center">
              <FaGlobe className="text-4xl text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg">Served Globally</h3>
              <p className="text-gray-800 text-sm">Served travelers from all over the world</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutTGA;
