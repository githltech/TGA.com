import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tgaimg1 from "../../images/tgaheroimg1.png";
import tgaimg2 from "../../images/tgaheroimg2.png";
import tgaimg3 from "../../images/tgaheroimg3.png";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);


    const slides = [
      { 
          id: 1,
          pera:"Embark on unforgettable journeys",
          title: (
            <>
              TRAVELLFAR <br /> FIND YOURSELF
            </>
          ),
          desc: (
            <>
            Discover amazing places with exclusive deals. Lorem ipsum <br /> dolor sit amet, consectetur adipisicing elit.
            </>
          ),
          button:"Start Your Adventure",
          image:tgaimg3, 
      },
      { 
          id: 2,
          pera:"Embark on unforgettable journeys",
          title: (
            <>
              TRAVELLFAR <br /> FIND YOURSELF
            </>
          ),
          desc: (
            <>
            Discover amazing places with exclusive deals. Lorem ipsum <br /> dolor sit amet, consectetur adipisicing elit.
            </>
          ),
          button:"Explore More",
          image:tgaimg2,
       },
      { 
          id: 3,
          pera:"Embark on unforgettable journeys",
          title: (
            <>
              TRAVELLFAR <br /> FIND YOURSELF
            </>
          ),
          desc: (
            <>
            Discover amazing places with exclusive deals. Lorem ipsum <br /> dolor sit amet, consectetur adipisicing elit.
            </>
          ),
          button:"Start Your Adventure",
          image:tgaimg1,
        },
    ];


  const nestedslides = [
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
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    //pauseOnHover: false,
    afterChange: (current) => setCurrentSlide(current),
   
  };
  

  const nestedsettings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: "0px", 
    arrows: true, // Show arrows
    dots: false, // Hide dots
    afterChange: (current) => setCurrentSlide(current),
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute border -bottom-12 left-[4%] transform translate-x-[-50%] z-10 text-white p-2 rounded-full shadow-md hover:bg-secordary duration-500"
      onClick={onClick}
    >
      <MdArrowBackIos/> {/* Left arrow */}
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute border -bottom-12 right-[4%] transform translate-x-[50%] z-10 text-white p-2 rounded-full shadow-md hover:bg-secordary duration-500"
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
       {slides.map((items,index)=>(
        <>
         {/* Slides */}
         <div  key={slides.id} className="relative overflow-hidden">
          <img
            src={items.image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-[100vh] sm:max-h-fit lg:min-h-screen object-cover transition-transform duration-700 ease-in-out ${
              currentSlide === index ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 flex items-center sm:justify-between flex-col sm:flex-row gap-5 sm:gap-0 pt-32 md:pt-40 bg-black bg-opacity-50 px-4">
            <div className="text-left">
              <hr className="border-t-2 border-primary w-24 py-1" />
              <p className="text-white font-museo font-light text-xxs">{items.pera}</p>
              <h1 className="text-4xl lg:text-7xl text-white font-bold my-2 ">
                {items.title}
              </h1>
              <p className="text-white mb-4 font-museo font-light text-xxs">
                {items.desc}
              </p>
              <div className="relative inline-block">
                <a
                  href="/"
                  className="relative border border-primary text-white px-3 py-2 text-xs font-semibold focus:outline-none overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></span>
                  <span className="absolute inset-0 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
                  <span className="relative z-10">
                    {items.button} &rarr;
                  </span>
                </a>
              </div>
            </div>

            <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg sm:mt-16 lg:mt-36">
              {/*custom Slider */}
           <Slider {...nestedsettings}  prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
            {nestedslides.map((data, index) => (
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
        <hr className="w-56 border-t-2 border-primary mb-2" />
        {/* Slide Indicator */}
        <div className="text-white font-bold text-lg">
          {String(currentSlide + 1).padStart(2, "0")}
        </div>
      </div>
    </div>
        </div>
        </div>
        </>
       ))}
      </Slider>
    </div>
  </div>
  );
};

export default HeroSection;
