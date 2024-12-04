import React from 'react'

function HeroSection() {
  return (
    <>
      {/* top aboutus hero section */}
      <section className=" flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-24 mt-32 lg:mt-52 mb-10">
      {/* Left Text Section */}
      <div className="text-left lg:w-1/2">
        <h3 className="text-gray-500 font-sans font-bold1 text-sm uppercase tracking-wide">
          The gypsy adventures
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold1 text-secondaryblack leading-tight">
          Shaping the
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold1 text-primaryorange leading-tight mt-3">
          Future Of Travel!
        </h1>
        <p className="text-gray-600 text-[16px] font-light1 font-sans mt-4">
          Changing The Way People Travel The World
        </p>
      </div>

      {/* Right Globe Image */}
      <div className="mt-10 lg:mt-0 lg:w-1/3">
        <img
          src="https://media1.thrillophilia.com/about_us_media/voices_of_thrillophilia/rajdeep.png?w=300&dpr=1.5"
          alt="Globe Illustration"
          className="max-w-full h-80 rounded-lg"
        />
      </div>
    </section>
    </>
  );
};

export default HeroSection;