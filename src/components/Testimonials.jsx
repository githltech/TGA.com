import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcGoogle } from "react-icons/fc";
import { IoStar } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const Testimonials = () => {
  const reviews = [
    {
      name: "Hira Menghwani",
      date: "2024-09-21",
      text: "Excellent job and polite. Best services rendered by Travel India.",
      img: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg", // Replace with the actual image URL
    },
    {
      name: "Yaseen Khan",
      date: "2024-09-20",
      text: "Excellent services and very supportive staff.",
      img: "https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=T5dukPD1r-o0BFqeqlIap7xzw07icucetwKaEC2Ms5M=", // Replace with the actual image URL
    },
    {
      name: "Anupma Sharma",
      date: "2024-06-23",
      text: "A very well-planned trip. Thanks.A very well-planned trip",
      img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // Replace with the actual image URL
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
        <div className="text-center md:text-left">
          <hr className="border-t-4 border-primary w-16 hidden md:block" />
          <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">EXCELLENT</h1>
          <div className="flex justify-center md:justify-start items-center gap-1 mb-3">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <IoStar key={index} className="text-yellow-500 text-xl" />
              ))}
          </div>
          <p className="text-[#424241] font-museo font-light text-xxs mb-2">Based on <span className="text-black font-semibold">73 Reviews</span></p>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="https://cdn.vox-cdn.com/thumbor/ln4IHgPYpvNoIWpJ2Y1_c9msxXA=/0x0:2012x1341/2000x1333/filters:focal(1006x670:1007x671)/cdn.vox-cdn.com/uploads/chorus_asset/file/15483559/google2.0.0.1441125613.jpg" alt="" className="h-12"/>
          </div>
        </div>

        {/* Right Section: Testimonial Slider */}
        <div className="w-full lg:w-3/4">
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border sm:border-hidden border-gray-400 rounded-lg sm:rounded-none shadow-lg p-5 bg-white flex flex-col gap-4 h-44"
                style={{ width: "350px", height: "2500px" }}
              >
                {/* Review Header */}
                <div className="flex justify-start gap-3">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover object-center"
                  />
                  <div>
                    <h4 className="text-sm font-semibild">{review.name}</h4>
                    <span className="text-xs">{review.date}</span>
                    <div className="flex items-center gap-1 text-gray-500 mb-2">
                    <div className="flex justify-center md:justify-start items-center gap-1">

                   {Array(5)
                    .fill(0)
                   .map((_, index) => (
                  <IoStar key={index} className="text-yellow-500 text-xs" />
                      ))}
                   </div>
                    <MdVerified className="text-blue-500 text-xs" />
                    </div>
                  </div>
                  <div className="text-2xl mt-1">
                  <FcGoogle/>
                  </div>
                </div>
                

                {/* Review Text */}
                <p className="text-[#424241] font-museo font-light text-xxs overflow-hidden">{review.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
