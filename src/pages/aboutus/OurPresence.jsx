import React from "react";
import tgalogo from '../../images/logo TGA.png';

const OurPresence = () => {
  return (
    <div className="py-10 px-4 md:px-16 lg:px-24 bg-white">
      {/* Section Title */}
      <h2 className="text-center text-2xl text-[#515151] font-regular1 mb-12">
        OUR PRESENCE
      </h2>

      {/* Locations */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {/* Jaipur, India */}
        <div className="text-center">
          <img
            src={tgalogo}
            alt="Jaipur, India"
            className="w-20 h-20 mx-auto mb-6"
          />
          <h3 className="text-[#202020] text-[16px] font-medium ">Jaipur, India</h3>
          <p className="text-gray-500 text-sm">
            Sitapura Industrial Area, Sitapura, Jaipur, Rajasthan, 302022
          </p>
        </div>

        {/* Dubai, UAE */}
        <div className="text-center">
          <img
            src={tgalogo}
            alt="Dubai, UAE"
            className="w-20 h-20 mx-auto mb-6"
          />
          <h3 className="text-[#202020] text-[16px] font-medium ">Dubai, UAE</h3>
          <p className="text-gray-500 text-sm">
            Dubai Silicon Oasis, DDP, Building A, Dubai, United Arab Emirates
          </p>
        </div>

        {/* Delaware, USA */}
        <div className="text-center">
          <img
            src={tgalogo}
            alt="Delaware, USA"
            className="w-20 h-20 mx-auto mb-6"
          />
          <h3 className="text-[#202020] text-[16px] font-medium ">Delaware, USA</h3>
          <p className="text-gray-500 text-sm">
            Suite 403-B, 1013 Centre Road, Wilmington, New Castle, Delaware,
            19805-1270
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPresence;
