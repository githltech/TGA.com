import React, { useState } from "react";
import tgalogo from '../../images/logo TGA.png';

const ImageSlider = () => {
  const images = [
    "https://media1.thrillophilia.com/about_us_media/instagram_posts/5_Pic.jpg?w=300&dpr=1.5",
    "https://media1.thrillophilia.com/about_us_media/instagram_posts/6_Pic.jpeg?w=300&dpr=1.5",
    "https://media1.thrillophilia.com/about_us_media/instagram_posts/7_Pic.jpeg?w=300&dpr=1.5",
    "https://media1.thrillophilia.com/about_us_media/instagram_posts/8th_pic.jpg?w=300&dpr=1.5",
    "https://media1.thrillophilia.com/about_us_media/instagram_posts/10_Pic.jpeg?dpr=1.0&q=70&w=300",
  ];

  const extendedImages = [...images, ...images];

  const [currentIndex, setCurrentIndex] = useState(images.length);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? extendedImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === extendedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
   <div className=" px-4 md:px-16 lg:px-24">
     <div className="relative bg-white shadow-lg rounded-lg border border-gray-400 overflow-hidden">
      {/* Top Border */}
      <div className="h-2 bg-primary"></div>

      {/* Header Section */}
      <div className="flex items-center justify-center gap-3 pt-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100">
          <img
            src={tgalogo} // Replace with your logo URL 
            alt="Logo"
            className="w-8 h-8"
          />
        </div>
        <div>
          <h3 className="text-[15px] font-sans font-regular1">LIFE AT TGA</h3>
          <p className="text-xs text-gray-500">@life_at_thegypsy_adventures</p>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative">
        <div className="flex items-center overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex - images.length) * 350}px)`,
            }}
          >
            {extendedImages.map((image, index) => (
              <div
                key={index}
                className="flex-none w-[300px] mx-2 py-8"
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[300px] object-cover shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white transition"
        >
          &#8250;
        </button>
      </div>
    </div>
   </div>
  );
};

export default ImageSlider;
