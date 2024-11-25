import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tgaimg1 from "../../images/tgaheroimg1.png";
import tgaimg2 from "../../images/tgaheroimg2.png";
import tgaimg3 from "../../images/tgaheroimg3.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";


const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
        id: 1,
        image:"https://media1.thrillophilia.com/filestore/0hdjtmduamliielzcvdsepune779_dubai%20skyline.jpg?w=340&dpr=2", 
    },
    { 
        id: 2,
        image: "https://media1.thrillophilia.com/filestore/c4ptxkldlkubiw14mh90eb2dspl5_shutterstock_1071877145.jpg?w=340&dpr=2",
     },
    { 
        id: 3,
        image:"https://media1.thrillophilia.com/filestore/4cgc0ibn1rqwvli84izupxwe45nv_shutterstock_2384596901%20(1).jpg?w=360&dpr=2",
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const nestedsettings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    centerMode: true, // Center current slide
    centerPadding: "0px", // No padding around the centered slide
    arrows: true, // Show arrows
    dots: false, // Hide dots
    afterChange: (current) => setCurrentSlide(current), // Track current slide
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute border -bottom-12 left-[4%] transform translate-x-[-50%] z-10 text-white p-2 rounded-full shadow-md hover:bg-orange-500 duration-500"
      onClick={onClick}
    >
      <MdArrowBackIos/> {/* Left arrow */}
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute border -bottom-12 right-[4%] transform translate-x-[50%] z-10 text-white p-2 rounded-full shadow-md hover:bg-orange-500 duration-500"
      onClick={onClick}
    >
      <MdArrowForwardIos/> {/* Right arrow */}
    </button>
  );

  return (
    <div>
    {/* Image Form Section */}
    <div className="relative">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={tgaimg3}
            alt="Slide 1"
            className="w-full h-[75vh] sm:max-h-fit lg:min-h-screen object-cover"
          />
          <div className="absolute inset-0 flex items-center sm:justify-between flex-col sm:flex-row gap-5 sm:gap-0 pt-40 bg-black bg-opacity-50 px-4">
            <div className="text-left">
              <hr className="border-t-2 border-orange-500 w-24 py-1" />
              <p className="text-white">Embark on unforgettable journeys</p>
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold my-2">
                TRAVELLFAR <br /> FIND YOURSELF
              </h1>
              <p className="text-white mb-4 text-xs">
                Discover amazing places with exclusive deals. Lorem ipsum <br />
                dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="relative inline-block">
                <a
                  href="/"
                  className="relative border border-orange-500 text-white px-3 py-2 text-xs font-semibold focus:outline-none overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-orange-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></span>
                  <span className="absolute inset-0 bg-orange-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
                  <span className="relative z-10">
                    Start Your Adventure &rarr;
                  </span>
                </a>
              </div>
            </div>

            <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg sm:mt-16 lg:mt-36">
              {/*custom Slider */}
           <Slider {...nestedsettings}  prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
            {slides.map((data, index) => (
          <div key={index} className="px-1">
            <img
              src={data.image}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-lg object-cover bg-center h-28 md:h-40"
            />
          </div>
        ))}
      </Slider>

     {/* Bottom Navigation */}
     <div className="flex flex-col items-center mt-5">
        {/* Horizontal Line */}
        <hr className="w-56 border-t-2 border-orange-500 mb-2" />
        {/* Slide Indicator */}
        <div className="text-white font-bold text-lg">
          {String(currentSlide + 1).padStart(2, "0")}
        </div>
      </div>
    </div>
          </div>
        </div>
         {/* slide 2 */}
        <div className="relative">
          <img
            src={tgaimg2}
            alt="Slide 2"
            className="w-full h-[75vh] sm:max-h-fit lg:min-h-screen object-cover"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col pt-64 md:pt-40 text-white bg-black bg-opacity-50 px-4">
        {/* Title */}
  <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-snug">
    <h1 className="animate-fade-in-up">DISCOVER</h1>
    <h1 className="sm:ml-20 md:ml-40 lg:ml-60 animate-fade-in-up delay-500">
      YOUR <span className="border-b-2 border-orange-500">DESTINATION</span>
    </h1>
  </div>
  
  {/* Explore Button */}
  <a
    href="#"
    className="border-2 m-auto border-orange-500 text-white hover:bg-orange-500 py-2 px-8 text-xl font-semibold hover:text-white transition duration-500"
  >
    Explore &rarr;
  </a>

  {/* Curved Line with Map Pins */}
  <div className="absolute top-28 md:top-20 -right-20 sm:-right-10 transform -translate-x-1/2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 100"
      className="w-72 h-28 animate-draw-line"
    >
      {/* Curved Path */}
      <path
        d="M10,90 Q150,10 290,90"
        stroke="white"
        strokeWidth="2"
        fill="transparent"
      />
    </svg>

    {/* Starting Pin */}
    <div
      style={{
        position: "absolute",
        left: "2%",
        bottom: "5%",
        transform: "translateY(50%)",
      }}
    >
      <FaMapMarkerAlt className="text-orange-500 text-3xl animate-pin-bounce" />
    </div>

    {/* Ending Pin */}
    <div
      style={{
        position: "absolute",
        right: "2%",
        bottom: "5%",
        transform: "translateY(50%)",
      }}
    >
      <FaMapMarkerAlt className="text-orange-500 text-3xl animate-pin-bounce" />
    </div>
  </div>
</div>

        </div>
        {/* Slide 3 */}
        <div className="relative">
          <img
            src={tgaimg1}
            alt="Slide 1"
            className="w-full h-[75vh] sm:max-h-fit lg:min-h-screen object-cover"
          />
          <div className="absolute inset-0 flex items-center sm:justify-between flex-col sm:flex-row gap-5 sm:gap-0 pt-40 bg-black bg-opacity-50 px-4">
            <div className="text-left">
              <hr className="border-t-2 border-orange-500 w-24 py-1" />
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold my-2">
                EXPLORE<br /> AND TRAVEL
              </h1>
              <p className="text-white mb-4 text-xs">
                Discover amazing places with exclusive deals. Lorem ipsum <br />
                dolor sit amet, consectetur adipisicing elit.
              </p>
              <div className="relative inline-block">
                <a
                  href="/"
                  className="relative border border-orange-500 text-white px-3 py-2 text-xs font-semibold focus:outline-none overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-orange-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></span>
                  <span className="absolute inset-0 bg-orange-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
                  <span className="relative z-10">
                    Explore Now &rarr;
                  </span>
                </a>
              </div>
            </div>

            <div className="flex relative w-full max-w-xs md:max-w-md lg:max-w-lg sm:mt-16 lg:mt-36">
              {/*custom Slider */}
            {slides.map((data, index) => (
          <div key={index} className="px-1">
            <img
              src={data.image}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-lg object-cover bg-center h-28 md:h-40"
            />
          </div>
        ))}
    </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
  );
};

export default HeroSection;
