import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward, IoMdCall } from 'react-icons/io';

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
      reviews: '1.6k reviews',
      rating: '⭐⭐⭐⭐',
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
      reviews: '1.2k reviews',
      rating: '⭐⭐⭐⭐⭐',
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
      reviews: '1.8k reviews',
      rating: '⭐⭐⭐⭐',
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
        reviews: '1.3k reviews',
        rating: '⭐⭐⭐⭐',
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
    <div className="relative w-full py-6 md:px-6">
      {/* Parent Slider Navigation */}
      {!isSmallScreen && (
        <button
          className="absolute top-64 left-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
          onClick={handleLeftClick}
        >
          <IoIosArrowBack size={30} />
        </button>
      )}
     <div className="flex items-center justify-between px-4 py-4">
     <h1 className="text-xl font-bold">Trecks</h1>
     <a href="/" className="text-orange-500 border-b-[1px] border-orange-500 font-medium">View All</a>
     </div>
      <Slider ref={sliderRef} {...parentSliderSettings}>
        {cardData.map((card,index) => (
          <div key={card.id} className="px-4">
            <div className="bg-white rounded-lg shadow-xl border transition duration-300 cursor-pointer">
              {/* Nested Slider */}
              <div className="relative">
              <h1 className="text-sm text-center text-white bg-orange-500 py-1 rounded-t-lg">{card.imgtext}</h1>
                <Slider  ref={(el) => (nestedSlidersRef.current[index] = el)} {...nestedSliderSettings}>
                  {card.images.map((image, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={image}
                      alt={`Slide ${imgIndex + 1}`}
                      className="w-full h-80 object-cover"
                    />
                  ))}
                </Slider>
                 <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg focus:outline-none"
                  onClick={() => handleNestedLeftClick(index)}
                >
                  <IoIosArrowBack size={20} />
                </button>
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg  focus:outline-none"
                  onClick={() => handleNestedRightClick(index)}
                >
                  <IoIosArrowForward size={20} />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="cardtitle h-10">{card.title}</h3>
                <div className="flex items-center mt-2 text-xs">
                  <span className="text-yellow-500">{card.rating}</span>
                  <span className="text-sm text-gray-500">({card.reviews})</span>
                </div>
                <p className="mt-2 text-gray-600 text-sm">{card.days}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold text-gray-800">
                    INR {card.price.toLocaleString()}{' '}
                    <span className="line-through text-red-500 text-sm ml-2">
                      INR {card.originalPrice.toLocaleString()}
                    </span>
                  </span>
                  <span className="bg-blue-100 text-green-700 text-[10px] px-2">
                    save INR {card.saveprice}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2 gap-4">
                  <a
                    href="/"
                    className="text-orange-500 px-4 py-2 rounded-md border border-orange-500"
                  >
                    <IoMdCall />
                  </a>
                  <a className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm w-full m-auto text-center">
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
          className="absolute top-64 right-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none"
          onClick={handleRightClick}
        >
          <IoIosArrowForward size={30} />
        </button>
      )}
    </div>
  );
};

export default TreksCart;
