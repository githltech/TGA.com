import React from 'react'

function Practice() {
  return (
    <div className="flex overflow-hidden h-64 relative">
  {[
    { src: "https://via.placeholder.com/600x400?text=Slide+1", text: "Discover Adventures" },
    { src: "https://via.placeholder.com/600x400?text=Slide+2", text: "Experience Luxury" },
    { src: "https://via.placeholder.com/600x400?text=Slide+3", text: "Unwind in Nature" },
  ].map((slide, index) => (
    <div
      key={index}
      className="flex-shrink-0 w-full h-full flex items-center justify-center animation-zoom relative"
    >
      <img
        src={slide.src}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white animation-text">
        <h2 className="text-2xl sm:text-4xl font-bold">{slide.text}</h2>
      </div>
    </div>
  ))}
</div>

  )
}

export default Practice;