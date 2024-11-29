import React from "react";

const AboutTga = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 bg-white my-10">
      {/* Text Content */}
      <div className="flex-1 md:mr-6">
        <h1 className="text-sm font-bold uppercase">About Tga</h1>
        <hr className="border-b-2 border-orange-500 w-10" />
        <h2 className="text-2xl font-bold text-black my-2 uppercase">
          Conscious Luxury Travel
        </h2>
        <p className="text-gray-700 text-base  leading-7">
          <strong className="">Committed to the Land and Community</strong> <br />
          from the Indian subcontinent, owner-hosts of
          palaces, forts, retreats, and lodges, dedicated to
          preserving heritage and conserving nature.
        </p>

        {/* Committed to the Land */}
        <div className="flex items-start my-4">
          <img
            src="https://img.icons8.com/ios-filled/50/6ea561/leaf.png"
            alt="Committed Icon"
            className="w-6 h-6 mt-1 mr-3"
          />
          <p className="text-gray-700 leading-7">
            <strong className="text-sm font-bold uppercase">Committed to the Land and Community</strong> <br />
            Our hotels are conscious of their impact on the environment,
            dedicated to sustainable practices that nurture both the planet and
            its people.
          </p>
        </div>

        {/* Journey with Purpose */}
        <div className="flex items-start">
          <img
            src="https://img.icons8.com/ios-filled/50/6ea561/road.png"
            alt="Journey Icon"
            className="w-6 h-6 mt-1 mr-3"
          />
          <p className="text-gray-700 leading-7">
            <strong className="text-sm font-bold uppercase">A Journey with Purpose</strong> <br />
            As you visit these RARE destinations, your mindful interactions with
            people, culture, nature, wildlife, crafts.
          </p>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 mt-6 lg:mt-0">
        <img
          src="https://media1.thrillophilia.com/filestore/m21dqlu4lf2ekp42vrofmxeqklpl_shutterstock_1118600486.jpg?w=340&dpr=2"
          alt="Scenic Destination"
          className="w-full h-80 rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default AboutTga;
