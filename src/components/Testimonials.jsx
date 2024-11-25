import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaGoogle } from "react-icons/fa";
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">EXCELLENT</h2>
          <div className="flex justify-center md:justify-start items-center gap-1 mb-3">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <FaStar key={index} className="text-yellow-500 text-xl" />
              ))}
          </div>
          <p className="text-gray-600 text-lg mb-4">Based on 73 reviews</p>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaGoogle className="text-blue-600 text-4xl" />
          </div>
        </div>

        {/* Right Section: Testimonial Slider */}
        <div className="w-full md:w-3/4">
          <Slider {...sliderSettings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-lg p-5 bg-white flex flex-col gap-4"
                style={{ minHeight: "200px", display: "flex" }}
              >
                {/* Review Header */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">{review.name}</h4>
                    <span className="text-xs">{review.date}</span>
                    <div className="flex items-center gap-1 text-gray-500 mb-2">
                    <div className="flex justify-center md:justify-start items-center gap-1">
                   {Array(5)
                    .fill(0)
                   .map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-xs" />
                      ))}
                   </div>
                    <MdVerified className="text-blue-500 text-xs" />
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
