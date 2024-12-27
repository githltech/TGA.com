import React from "react";

const AboutTga = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-24 bg-white my-10">
      {/* Text Content */}
      <div className="flex-1 md:mr-6">
        <h3 className="text-lg font-bold uppercase">About Tga</h3>
        <hr className="border-b-2 border-primary w-10" />
        <h1 className="text-xl sm:text-2xl font-bold my-2 uppercase">
          Conscious Luxury Travel
        </h1>
        <h2 className="text-sm font-bold uppercase mb-2">Committed to the Land and Community</h2>
         <p className="text-[#424241] font-museo font-light text-xxs"> from the Indian subcontinent, owner-hosts of
          palaces, forts, retreats, and lodges, dedicated to
          preserving heritage and conserving nature.</p>
        

        {/* Committed to the Land */}
        <div className="flex items-start my-4">
          <img
            src="https://img.icons8.com/ios-filled/50/6ea561/leaf.png"
            alt="Committed Icon"
            className="w-6 h-6 mt-1 mr-3"
          />
         <div className="flex flex-col">
         <h2 className="text-sm font-bold uppercase mb-2">Committed to the Land and Community</h2>
          <p className="text-[#424241] font-museo font-light text-xxs">
          Our hotels are conscious of their impact on the environment,
            dedicated to sustainable practices that nurture both the planet and
            its people.
          </p>
         </div>
        
        </div>

        {/* Journey with Purpose */}
        <div className="flex items-start">
          <img
            src="https://img.icons8.com/ios-filled/50/6ea561/road.png"
            alt="Journey Icon"
            className="w-6 h-6 mt-1 mr-3"
          />
          <div className="flex flex-col">
            <h2 className="text-sm font-bold uppercase mb-2">A Journey with Purpose</h2>
            <p className="text-[#424241] font-museo font-light text-xxs">
            As you visit these RARE destinations, your mindful interactions with
            people, culture, nature, wildlife, crafts.
            </p>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 mt-6 lg:mt-0">
        <img
          src="https://media1.thrillophilia.com/filestore/m21dqlu4lf2ekp42vrofmxeqklpl_shutterstock_1118600486.jpg?w=340&dpr=2"
          alt="Scenic Destination"
          className="w-full h-72 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default AboutTga;
