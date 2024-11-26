import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PerfectDestination = () => {
  const reviews = [
    {
      img: "https://media1.thrillophilia.com/filestore/nmngta32hg5ivwo6lhhu5ykdb646_shutterstock_115227475.jpg?w=240&dpr=2", 
    },
    {
      img: "https://media1.thrillophilia.com/filestore/ecp976q3go5n0242q1plaiiqjfyv_Daallake.jpg?w=1080&h=auto&dpr=2",
    },
    {
      img: "https://media1.thrillophilia.com/filestore/yf4syy949b13jaogsavwzpr69skb_Krishnasar%20Lake%201.jpg?w=1080&h=auto&dpr=2", 
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-10 px-4 lg:px-24">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Section */}
        <div className="">
          <hr className="border-t-4 border-orange-500 w-16" />
          <h2 className="text-3xl font-bold mb-2 uppercase">Perfect destinations</h2>
          <p className="text-gray-600 text-sm mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam tempore esse eligendi, vitae ipsa amet impedit odio provident nulla dolorum, excepturi velit id modi rem. Aperiam reiciendis repellat odio.</p>
         
        </div>

        {/* Right Section: Testimonial Slider */}
        <div className="w-full lg:w-3/4">
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className=" p-2"
              >
                {/* Review Header */}
                <div className="flex items-center">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-full h-80 object-cover object-center rounded-md"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PerfectDestination;
