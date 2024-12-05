import React from "react";

const PictureGallery = () => {
  const galleryData = [
    {
      title: "Cultural Events",
      image:
        "https://media1.thrillophilia.com/about_us_media/instagram_posts/1_Pic.jpeg?w=300&dpr=1.5",
    },
    {
      title: "Outings",
      image:
        "https://media1.thrillophilia.com/about_us_media/instagram_posts/2_Pic.jpeg?w=300&dpr=1.5",
    },
    {
      title: "Thrillo Fun Events",
      image:
        "https://media1.thrillophilia.com/about_us_media/picture_gallery/outings/2_outing.jpg?w=240&dpr=1.5",
    },
    {
      title: "Work Place",
      image:
        "https://media1.thrillophilia.com/about_us_media/instagram_posts/4_Pic.jpeg?w=300&dpr=1.5",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 lg:px-24">
      {/* Heading */}
      <h2 className="text-left text-3xl font-bold mb-10">
        Thrillophilia <span className="text-primary">Picture Gallery</span>
      </h2>

      {/* Gallery Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Main Large Image */}
        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
          <img
            src="https://media1.thrillophilia.com/about_us_media/thrillophilia_journey/2023.png?w=600&dpr=1.5"
            alt="Main Gallery"
            className="w-full h-72 object-cover object-center  transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Smaller Images */}
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-sm group-hover:text-primary transition-colors duration-300">
              {item.title} &rarr;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureGallery;
