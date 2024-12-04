import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Practive = () => {
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "https://media1.thrillophilia.com/filestore/0hdjtmduamliielzcvdsepune779_dubai%20skyline.jpg?w=340&dpr=2",
      title: "Explore Mountains",
      description: "Experience the serene beauty of the highlands.",
    },
    {
      image: "https://media1.thrillophilia.com/filestore/0hdjtmduamliielzcvdsepune779_dubai%20skyline.jpg?w=340&dpr=2",
      title: "Discover Beaches",
      description: "Relax on the world's most beautiful beaches.",
    },
    {
      image: "https://via.placeholder.com/800x600?text=Explore+3",
      title: "Urban Adventures",
      description: "Dive into vibrant cityscapes and cultures.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (slidesRef.current[currentIndex]) {
      gsap.fromTo(
        slidesRef.current[currentIndex],
        {
          scale: 1.3, // Start with a slight zoom-in
          opacity: 0,
        },
        {
          scale: 2, // Zoom-out to normal size
          opacity: 1,
          duration: 2, // Slow motion for 2 seconds
          ease: "power2.inOut",
        }
      );
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-black">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        ref={sliderRef}
        style={{ width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-screen h-screen relative"
            ref={(el) => (slidesRef.current[index] = el)}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg lg:text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practive;
