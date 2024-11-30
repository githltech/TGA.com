import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward, IoMdCall } from 'react-icons/io';
import { IoStar } from "react-icons/io5";


const TreksCart = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const sliderRef = useRef(null); // Parent slider ref
  const nestedSlidersRef = useRef([]);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Small screen if width < 768px
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  const handleLeftClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Move parent slider to the previous item
    }
  };

  const handleRightClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move parent slider to the next item
    }
  };

  const handleNestedLeftClick = (index) => {
    if (nestedSlidersRef.current[index]) {
      nestedSlidersRef.current[index].slickPrev();
    }
  };

  const handleNestedRightClick = (index) => {
    if (nestedSlidersRef.current[index]) {
      nestedSlidersRef.current[index].slickNext();
    }
  };

  const cardData = [
    {
      id: 1,
      imgtext:`THRILL FEST | | get up to 3 International Trips Free!`,
      title: 'Dubai Highlights | Skyline And Sandscapes emirates',
      images: [
        'https://media1.thrillophilia.com/filestore/zkip7khwzew8nnesw6tr7qo0zba7_Downpic.cc-482200118.jpg?w=340&dpr=2',
        'https://media1.thrillophilia.com/filestore/3olu266q85xcvi788yawu7fji10c_dl.beatsnoop.com-3000-HSMA1tjOPa.jpg?w=340&dpr=2',
        'https://media1.thrillophilia.com/filestore/l9eo0e0yn5eu58zpb9nxgfazhc08_shutterstock_1215376537.jpg?w=340&dpr=2',
      ],
      reviews: '1.6k',
      rating: <IoStar/>,
      outofrating:'5.6',
      days: '5 days & 4 nights',
      price: 45000,
      originalPrice: 74002,
      saveprice: '6,454',
    },
    {
      id: 2,
      imgtext:`THRILL FEST | | get up to 3 International Trips Free!`,
      title: 'Escape To Dubai | Flights Inclusive Deal emirates',
      images: [
        'https://media1.thrillophilia.com/filestore/lpzo9qgs6ia4604lkgi80l1jjih6_shutterstock_112137761.jpg?w=340&dpr=2',
        'https://media1.thrillophilia.com/filestore/0hdjtmduamliielzcvdsepune779_dubai%20skyline.jpg?w=340&dpr=2',
        'https://media1.thrillophilia.com/filestore/mp4pf1xwonv6hklph4ktqmt5bnej_shutterstock_2261215111.jpg?w=340&dpr=2',
      ],
      reviews: '1.2k',
      rating: <IoStar/>,
      outofrating:'5.6',
      days: '7 days & 6 nights',
      price: 68550,
      originalPrice: 124761,
      saveprice: '19,454',
    },
    {
      id: 3,
      imgtext:`THRILL FEST | | get up to 3 International Trips Free!`,
      title: 'Discovering Dubai | A Journey To The Golden Emirates',
      images: [
        'https://media1.thrillophilia.com/filestore/5kcj4naff0u6aua7tm6ftyo3qul5_shutterstock_456473839.jpg?w=340&dpr=2',
        'https://media1.thrillophilia.com/filestore/fcfvegglkeiuyjxdt9r18pxapf67_shutterstock_2386280701%20(1).jpg?w=340&dpr=2',
        'https://media1.thrillophilia.com/filestore/n35qyh6yu8dr5dzqtmv48kze6wib_shutterstock_2338754375.jpg?w=340&dpr=2',
      ],
      reviews: '1.8k',
      rating: <IoStar/>,
      outofrating:'7.6',
      days: '7 days & 6 nights',
      price: 86000,
      originalPrice: 111836,
      saveprice: '12,454',
    },

    {
        id: 4,
        imgtext:`THRILL FEST | | get up to 3 International Trips Free!`,
        title: 'Discovering Dubai | A Journey To The Golden Emirates',
        images: [
          'https://media1.thrillophilia.com/filestore/m0wcomoxgeq5fdq7jpeaib8l7nek_shutterstock_1933253495.jpg?w=340&dpr=2',
          'https://media1.thrillophilia.com/filestore/jo81ugbjxtme6npfzvlbxsq5jaqp_AYA%20Family%2010%20(1).jpg?w=340&dpr=2',
          'https://media1.thrillophilia.com/filestore/hs37gc38mryythrm842o5a0aslcb_shutterstock_2042237531.jpg?w=340&dpr=2',
        ],
        reviews: '1.3k',
        rating: <IoStar/>,
        outofrating:'1.6',
        days: '7 days & 6 nights',
        price: 96000,
        originalPrice: 11836,
        saveprice: '11,494',
      },
  ];

  const parentSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
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

  const nestedSliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
   
  };

  return (
    <div className="relative w-full py-6 px-4 lg:px-20">
    {/* Parent Slider Navigation */}
    {!isSmallScreen && (
      <button
        className="hidden lg:block absolute top-80 left-[75px] transform -translate-y-1/2 z-10 bg-white opacity-60 border border-gray-300 text-black p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
        onClick={handleLeftClick}
      >
        <IoIosArrowBack size={25} />
      </button>
    )}
   <div className="flex items-center justify-between px-4 py-4">
   <h1 className="text-lg font-bold uppercase">Trecks <span className='flex flex-col border-b-2 border-primary w-10'></span> </h1>
   <a href="/" className="text-primary font-normal flex items-center gap-2">View All
   <IoIosArrowForward className='text-white bg-primary rounded-full p-2' size={26}/>
   </a>
   </div>
    <Slider ref={sliderRef} {...parentSliderSettings}>
      {cardData.map((card,index) => (
        <div key={card.id} className="px-4">
          <div className="bg-white transition duration-300 cursor-pointer">
            {/* Nested Slider */}
            <div className="relative">
            <h1 className="text-[12px]  text-center text-white font-semibold bg-primary py-1 rounded-t-lg">{card.imgtext}</h1>
              <Slider  ref={(el) => (nestedSlidersRef.current[index] = el)} {...nestedSliderSettings}>
                {card.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Slide ${imgIndex + 1}`}
                    className="w-full h-80 object-cover rounded-b-xl"
                  />
                ))}
              </Slider>
               <button
                className=" absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg focus:outline-none"
                onClick={() => handleNestedLeftClick(index)}
              >
                <IoIosArrowBack size={10} />
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg  focus:outline-none"
                onClick={() => handleNestedRightClick(index)}
              >
                <IoIosArrowForward size={10} />
              </button>
            </div>

            {/* Card Content */}
            <div className="mt-2">
            <div className="flex items-center text-xs justify-between h-10">
            <p className=" text-gray-500 text-[15px] font-light1">{card.days}</p>
                <p className="flex items-center gap-2 text-green-500 text-lg font-semibold">{card.rating}
                <span className='text-green-600 text-sm font-bold'>{card.outofrating}</span>
                 <span className="text-sm text-gray-500">({card.reviews})</span>
                  </p>
              </div>
              <h3 className="text-[#202020] font-museo font-light1 text-[15px] h-10">{card.title}</h3>
              <p className="mt-6 text-xs font-bold px-2">5D <span className='font-medium text-gray-500'>Dubai</span></p>
              <div className="flex gap-2 items-center h-10">
                <span className="text-lg font-bold text-gray-800">
                  INR {card.price.toLocaleString()}{' '}
                  <span className="line-through text-gray-600 text-sm font-normal">
                    INR {card.originalPrice.toLocaleString()}
                  </span>
                </span>
                <span className="bg-blue-100 text-green-700 text-[10px] font-semibold mt-1">
                  save INR {card.saveprice}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2 gap-4">
                <a
                  href="tel:91 92055 15652"
                  className="text-primary px-4 py-[15px] rounded-md border border-primary"
                >
                  <IoMdCall className="animate-bounce" />
                </a>
                <a href='/' className="bg-primary font-semibold hover:bg-secordary text-white px-4 py-[15px] rounded-md text-sm w-full m-auto text-center">
                  Avail This Offer
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>

    {!isSmallScreen && (
      <button
        className="hidden lg:block absolute top-80 right-[70px] transform -translate-y-1/2 z-10 bg-white opacity-60 text-black p-3 border border-gray-300 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
        onClick={handleRightClick}
      >
        <IoIosArrowForward size={25} />
      </button>
    )}
  </div>
  );
};

export default TreksCart;
