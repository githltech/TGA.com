import React from 'react'

function MissionSection() {
  return (
    <>
    {/* mission section */}
    <section className="bg-gray-100 px-4 md:px-16 lg:px-24 pt-10">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <div className='lg:max-w-[500px]'>
          <h2 className="text-4xl md:text-5xl font-sans font-bold1 text-secondaryblack text-center lg:text-left">
            Our <span className="text-primaryorange">Mission</span>
          </h2>
          <p className="text-gray-600 text-[16px] font-light1 leading-loose mt-4">
            At Thrillophilia, we're on a grand quest to transform the landscape
            of travel experiences. Our aspiration goes beyond
            destinations—we endeavor to spark passion, carve everlasting
            memories, and lead the way in crafting adventures that echo in the
            hearts of every explorer. Join us on this epic journey, where the
            essence of adventure is infused into every expedition!
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center pt-16">
          {/* Chitra */}
          <div className="">
            <img
              src="https://media1.thrillophilia.com/about_us_media/thrillophilia_founders.png?w=320&dpr=1.5"
              alt="Chitra Gurnani Daga"
              className="w-full h-96 rounded-lg"
            />
            <div className=" mt-4 absolute sm:top-44 sm:-left-10 left-2 top-6 px-6">
              <p className="text-secondaryblack text-[15px] font-bold1 ">Chitra Gurnani Daga</p>
              <p className="text-gray-500 text-xs">CEO & Co-Founder</p>
            </div>
          </div>

          {/* Abhishek */}
          <div className="absolute -right-0 sm:top-32 top-0">
            <div className="text-center mt-4">
              <p className="text-secondaryblack text-[15px] font-bold1">Abhishek Daga</p>
              <p className="text-gray-500 text-xs">Co-Founder</p>
            </div>
          </div>

          {/* Curved right Arrows  */}
          <svg
            className="absolute top-36 left-28 hidden sm:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width="60"
            height="60"
          >
            <path
              d="M10 50 C30 10, 70 10, 90 50"
              stroke="#FF8200"
              fill="none"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="5"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#FF8200" />
              </marker>
            </defs>
          </svg>

           {/* Curved left Arrows  */}
           <svg
  className="absolute top-28 right-20 hidden sm:block"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="60"
  height="60"
>
  <path
    d="M90 50 C70 10, 30 10, 10 50"
    stroke="#FF8200"
    fill="none"
    strokeWidth="2"
    markerEnd="url(#arrowhead)"
  />
  <defs>
    <marker
      id="arrowhead"
      markerWidth="10"
      markerHeight="7"
      refX="5"
      refY="3.5"
      orient="auto"
    >
      <polygon points="10 0, 0 3.5, 10 7" fill="#FF8200" />
    </marker>
  </defs>
</svg>

        </div>
      </div>
    </section>
    </>
  );
};

export default MissionSection;