import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";



function GallarySection() {
  const allImages = [
    {
      src: "https://www.andbeyond.com/wp-content/uploads/sites/5/INDIA-Ladakh-Shel-6-1024x576.jpg",
      title: "Shel Ladakh",
      buttonLabel: "View Partner",
      colSpan: "col-span-1 sm:col-span-2",
      rowSpan: "row-span-1",
    },
    {
      src: "https://www.andbeyond.com/wp-content/uploads/sites/5/Ceylon-Tea-Trails-Dunkled-Pool-and-Lake-1024x576.jpg",
      title: "Essence of Nepal and Sri Lanka",
      buttonLabel: "View Offer",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "https://www.andbeyond.com/wp-content/uploads/sites/5/INDIA-MP-Kanha-NP-Bagh-Villas-17-Website-1920x1080-fill-gravityauto-Q_AutoBest-1024x576.jpg",
      title: "Trees N Tigers",
      buttonLabel: "View Partner",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "https://www.andbeyond.com/wp-content/uploads/sites/5/INDIA-Maharashtra-Tadoba-NP-Trees-Tigers-1-1024x576.jpg",
      title: "Kinwani House",
      buttonLabel: "View Partner",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
      src: "https://www.andbeyond.com/wp-content/uploads/sites/5/INDIA-Uttarakhand-Narendra-Nagar-Kinwani-House-front-4-768x432.jpg",
      title: "Bagh Villas",
      buttonLabel: "View Partner",
      colSpan: "col-span-1",
      rowSpan: "row-span-1",
    },
    {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/INDIA-Ladakh-Leh-Dolkhar-Resort-3-768x432.jpg",
        title: "Shel Ladakh",
        buttonLabel: "View Partner",
          colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/India-Delhi-Hyatt-Andaz-15-1024x576.png",
        title: "Essence of Nepal and Sri Lanka",
        buttonLabel: "View Offer",
          colSpan: "col-span-1 sm:col-span-2",
        rowSpan: "row-span-1",
      },
      {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/INDIA-Ladakh-Pangong-Lake-Hotel-Merak-Pangong-Main-Building-Night-1-JPEG-2.15-MB-Website-1920x1080-fill-gravityauto-Q_AutoBest-768x432.jpg",
        title: "Trees N Tigers",
        buttonLabel: "View Partner",
          colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/INDIA-Maharashtra-Tadoba-NP-Trees-Tigers-1-1024x576.jpg",
        title: "Kinwani House",
        buttonLabel: "View Partner",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/INDIA-Ladakh-Nubra-Valley-Lchangnang-Resort-Facade-2-768x432.jpg",
        title: "Bagh Villas",
        buttonLabel: "View Partner",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/Nepal-Shinta-Mani-Mustang-Suites_6-1024x576.jpg",
        title: "Shel Ladakh",
        buttonLabel: "View Partner",
        colSpan: "col-span-1 sm:col-span-2",
        rowSpan: "row-span-1",
      },
      {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/Sri-Lanka-Gal-Oya_13-1024x576.jpg",
        title: "Essence of Nepal and Sri Lanka",
        buttonLabel: "View Offer",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/SRI_LANKA_Ella_Nine_Skies_2_c_Teardrop_Hotels_Panorama-768x432.jpg",
        title: "Trees N Tigers",
        buttonLabel: "View Partner",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/ladakh-india-1024x576.jpg",
        title: "Kinwani House",
        buttonLabel: "View Partner",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
      {
        src: "https://www.andbeyond.com/wp-content/uploads/sites/5/INDIA-Ladakh-Nubra-Valley-Lchangnang-Resort-768x432.jpg",
        title: "Bagh Villas",
        buttonLabel: "View Partner",
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
      },
  ];

  // State to manage visible images
  const [visibleImages, setVisibleImages] = useState(5);

  // Function to load more images
  const loadMore = () => {
    setVisibleImages((prev) => Math.min(prev + 5, allImages.length));
  };

  return (
    <div className="px-4 lg:px-24">
      <h1 className="text-xl sm:text-2xl font-bold text-black text-center uppercase">
        Our favourite reasons to travel
      </h1>
      <hr className="border-b-2 border-primary w-60 m-auto mb-4" />
      <p className="text-center text-[#424241] font-museo font-light text-xxs mb-6">
        From exceptional offers to not-to-be-missed tours and experiences,{" "}
        <br className="hidden lg:block" /> here are our favourite reasons to explore Asia
      </p>

       {/* Buttons */}
       <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["Experiences", "Offers", "Our Lodges", "Partner Properties", "Small Group Journeys", "Tailormade Tours", "Destination", "Interest", "Persona", "Traveller Type", "Bucket List"].map(
          (label, index) => (
            <button
              key={index}
              className="px-6  border flex items-center font-semibold uppercase text-xs border-gray-500 text-gray-500 hover:bg-secordary hover:text-white transition duration-500"
            >
              {label}
              <RiArrowDropDownLine className="" size={30} />
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allImages.slice(0, visibleImages).map((image, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden ${image.colSpan} ${image.rowSpan}`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4 text-white rounded-md transition duration-500 group-hover:bg-opacity-50">
              <div>
                <h3 className="text-lg font-bold">{image.title}</h3>
                <button className="mt-2 px-3 py-1 text-white border transition duration-300 hover:bg-secordary text-xs font-semibold">
                  {image.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleImages < allImages.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="px-6 py-2 bg-primary text-white font-semibold hover:bg-secordary transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default GallarySection;
