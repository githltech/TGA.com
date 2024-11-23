import React from "react";
import "tailwindcss/tailwind.css";
import img from '../images/tgaheroimg1.png'

const AboutTGA = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 py-12 px-4">
      {/* Marquee Headline */}
      <div className="relative overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-3xl md:text-5xl font-bold text-orange-500 uppercase">
          Your Gateway to Off-Beat Adventures &nbsp;&nbsp;|&nbsp;&nbsp;
          Your Gateway to Off-Beat Adventures &nbsp;&nbsp;|&nbsp;&nbsp;
        </div>
      </div>

      {/* Introduction Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          About TGA
        </h2>
        <p className="text-gray-600 md:text-lg">
          At TGA, we are passionate about redefining travel with our mission to 
          promote sustainable tourism and unique adventures. Our vision is to 
          create memorable experiences that leave a positive impact on both travelers 
          and destinations.
        </p>
      </section>

      {/* Recognition Section */}
      <section className="mt-14 text-center">
        <h3 className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
          Recognized by Madhya Pradesh Tourism Board
        </h3>
        <p className="text-gray-600 md:text-lg">
          We are proud partners of the Madhya Pradesh Tourism Board, showcasing 
          our commitment to authentic and sustainable travel experiences.
        </p>
      </section>

      {/* Unique Selling Points */}
      <section className="mt-14">
        <h3 className="text-xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
          Why Choose TGA?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-md flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <span className="text-orange-500 text-3xl">🌱</span>
            <div>
              <h4 className="text-lg font-semibold">Eco-Friendly Tourism</h4>
              <p className="text-gray-600 text-sm">
                Our tours are designed with sustainability in mind to preserve the beauty of our planet.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <span className="text-orange-500 text-3xl">🌍</span>
            <div>
              <h4 className="text-lg font-semibold">Exclusive Destinations</h4>
              <p className="text-gray-600 text-sm">
                Discover hidden gems and off-the-beaten-path locations for a unique experience.
              </p>
            </div>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md flex items-center gap-4 hover:scale-105 transition-transform duration-300">
            <span className="text-orange-500 text-3xl">✨</span>
            <div>
              <h4 className="text-lg font-semibold">Personalized Experiences</h4>
              <p className="text-gray-600 text-sm">
                Tailored travel plans that cater to your preferences and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Image Section */}
      <section className="mt-10 flex justify-center items-center">
        <div className="relative group">
          <img
            src={img} // Replace with a suitable image URL
            alt="Travel Adventure"
            className="rounded-lg shadow-lg hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <h4 className="text-white text-lg md:text-2xl font-semibold">
              Adventure Awaits!
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTGA;
