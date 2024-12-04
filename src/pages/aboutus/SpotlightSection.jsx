import React, { useState } from "react";
import tgalogo from '../../images/logo TGA.png';

const SpotlightSection = () => {
  const slides = [
    {
      title: "A Tale of Success: 53 Takeoffs Organic Growth to Thrillophilia's Funding Saga",
      description:
        "53Takeoffs soared to become India's leading multi-day tours company within three years, serving 800,000+ travelers in 2023. Reporting a turnover of 500+ crores & a 2.5x surge from the previous year, they also reclaimed control of their vision by buying back investor shares in Thrillophilia.",
      logo: tgalogo,
    },
    {
      title: "An Audacious Journey of Thrillophilia & 53 TakeOffs!",
      description:
        "This is the journey of a dynamic company whose post-COVID growth skyrocketed, expanding 8X from pre-pandemic days & its team size surged from 150 to 900. Thrillophilia and 53 TakeOffs broadened their product lines, eyeing multibillion-dollar status, 100 global brands & targeting 1000+ crores revenue in 2024.",
      logo: tgalogo,
    },
    {
      title: "Thrillophilia Trends to be One of the Most Popular Platforms to Book Tours",
      description:
        "Thrillophilia has emerged as one of the leading platforms for booking tours, captivating travelers worldwide. Offering a vast array of handpicked tours and activities, the platform’s seamless user interface, secure payment system, and comprehensive customer support ensure a hassle-free trip booking experience.",
      logo: tgalogo
    },
  ];

  const extendedSlides = [...slides, ...slides];
  const [currentIndex, setCurrentIndex] = useState(slides.length);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? extendedSlides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === extendedSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="px-4 md:px-16 lg:px-24 py-10">
      <div className="relative bg-white overflow-hidden">
        {/* Header Section */}
        <div className="flex items-center gap-3 pt-6">
          <div>
          <h2 className="text-4xl font-bold text-secondaryblack">
          In The <span className="text-primaryorange">Spotlignt</span>
        </h2>
          <p className="text-gray-600 font-light1 font-sans">Explore what the world is saying</p>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <div className="flex items-center overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex - slides.length) * 350}px)`,
              }}
            >
              {extendedSlides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-none w-[350px] mx-3 py-8"
                >
                  <div className="shadow-md border rounded-md bg-gray-100 p-4 h-full flex flex-col">
                    <img
                      src={slide.logo}
                      alt={slide.title}
                      className="h-10 w-10"
                    />
                    <p className="border-b-[1px] border-gray-300 py-2" ></p>
                    <h3 className="text-[#202020] font-light1 font-sans mb-2 leading-snug pt-3">
                      {slide.title}
                    </h3>
                    <p className="text-[#515151] text-[14px] font-light1 font-sans leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-primaryorange hover:text-white transition"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-primaryorange hover:text-white transition"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;
