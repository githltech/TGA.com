import React,{useState} from 'react';
//import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaMountain,FaWifi,FaRegClock,FaGamepad,FaWarehouse,FaShower,FaKey,FaTv,FaUsers, FaLightbulb,FaHotTub,FaGlassWhiskey,FaCoffee,FaUtensils,FaBed,} from "react-icons/fa";
import Layout from '../components/layout/Layout';
import { useAlert } from 'react-alert';



const Hotels = () => {
  const [showMore, setShowMore] = useState(false);
  const [rooms, setRooms] = useState([
    {
      id: 1,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/wiS7YrZ6Q7mbBgsha3D-qA/superior-8-bed-mixed-dorm-20210224122208.jpg",
      name: "Superior 10 Bed Mixed Dorm (Ensuite)",
      price: 949,
      description:
        "A bed in a mixed dormitory with private lockers, a mountain view, and a shared en-suite washroom.",
      quantity: 0,
    },
    {
      id: 2,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/YMhikrxFSA-yVxD5KY7x_w/private-suite-2-double-bed-20201112104711.jpg",
      name: "4 Bed Mixed Dorm",
      price: 849,
      description:
        "A bed in a mixed dormitory with private lockers, a mountain view, and a shared washroom outside.",
      quantity: 0,
    },
    {
      id: 3,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/zCESBcehSlK4_fRKDLgwpg/deluxe-private-room-20201112104703.jpg",
      name: "Deluxe 8 Bed Mixed Dorm",
      price: 799,
      description:
        "A bed in a mixed dormitory with private lockers, a mountain view, and a shared washroom.",
      quantity: 0,
    },
    {
      id: 4,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/6cB0ysm6QYe-QsEvvtlzig/deluxe-8-bed-mixed-dorm-20210224122552.jpg",
      name: "Private Suite - 2 Double Bed",
      price: 4799,
      description:
        "A spacious en-suite room suited for 4 with 2 double beds and a mountain view.",
      quantity: 0,
    },
    {
      id: 5,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/6cB0ysm6QYe-QsEvvtlzig/deluxe-8-bed-mixed-dorm-20210224122552.jpg",
      name: "Private Suite - 2 Double Bed",
      price: 1799,
      description:
        "A spacious en-suite room suited for 4 with 2 double beds and a mountain view.",
      quantity: 0,
    },
    {
      id: 6,
      image:"https://img.cdn.zostel.com/zostel/gallery/images/6cB0ysm6QYe-QsEvvtlzig/deluxe-8-bed-mixed-dorm-20210224122552.jpg",
      name: "Private Suite - 2 Double Bed",
      price: 2799,
      description:
        "A spacious en-suite room suited for 4 with 2 double beds and a mountain view.",
      quantity: 0,
    },
  ]);

  const alert = useAlert();

  // Toggle show more or less
  const toggleShowMore = () => setShowMore(!showMore);

  const updateQuantity = (id, increment = true) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id
          ? {
              ...room,
              quantity: increment
                ? room.quantity + 1
                : Math.max(0, room.quantity - 1),
            }
          : room
      )
    );
  };

  const cartItems = rooms.filter((room) => room.quantity > 0);

  // Calculate totals
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = Math.round(totalPrice * 0.12); // Example tax: 12%
  const totalWithTax = totalPrice + tax;

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
      title: "Outings",
      image:
        "https://media1.thrillophilia.com/about_us_media/instagram_posts/2_Pic.jpeg?w=300&dpr=1.5",
    },
    
  ];

  const amenities = [
    { icon: <FaMountain />, text: "Mountain View" },
    { icon: <FaWifi />, text: "Free Wi-Fi" },
    { icon: <FaRegClock />, text: "24/7 Reception" },
    { icon: <FaGamepad />, text: "In-house Activities" },
    { icon: <FaWarehouse />, text: "Storage Facility" },
    { icon: <FaShower />, text: "Shower" },
    { icon: <FaKey />, text: "Lockers" },
    { icon: <FaTv />, text: "Common Television" },
    { icon: <FaUsers />, text: "Common hangout area" },
    { icon: <FaLightbulb />, text: "Bedside Lamps" },
    // { icon: <FaTowel />, text: "Towels on rent" },
    { icon: <FaHotTub />, text: "Hot water" },
    { icon: <FaGlassWhiskey />, text: "Water Dispenser" },
    { icon: <FaCoffee />, text: "Cafe" },
    { icon: <FaUtensils />, text: "Breakfast (Extra)" },
    { icon: <FaBed />, text: "Linen Included" },
  ];
  

  
  return (
   <Layout>
     <div className="relative w-full py-6 px-4 mt-16 lg:mt-32">

      {/* Gallery Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* Main Large Image */}
        <div className="lg:col-span-2 row-span-3 relative group overflow-hidden">
          <img
            src="https://img.cdn.zostel.com/zostel/gallery/images/8OZJ7ErDTN-oTXNypnFdtw/zostel-bir-20-20201105103914.jpg?w=1280"
            alt="Main Gallery"
            className="w-full h-full object-cover object-center  transform group-hover:scale-105 transition-transform duration-300" 
          />
        </div>

        {/* Smaller Images */}
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full lg:h-36 h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold text-sm group-hover:text-primary transition-colors duration-300">
              {item.title} &rarr;
            </div>
          </div>
        ))}
      </div>


      {/* booking cart section */}
      <div className="mt-10">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-primary">Zostel Plus Bir</h1>
        <p className="font-sans text-sm font-regular text-[#4d585b]  mt-4">
          {showMore
            ? `There's a butterfly in Bir; it's us. Basking in the sunshine by daytime and glowing under the stars by dusk, Zostel Plus Bir hides away from the town's uproar. Your resting pad in the mountains overlooks an iconic expanse of forested mountains and rustic fields. Make the most of our teeming-with-life common areas while working, playing, and unwinding. The leaf-shaped cafe, the sunset tree deck, and the dainty streams around the hostel only add to your pleasures. On a usual day here, you’ll go paragliding, hike to waterfalls, and explore the town’s cafes and monasteries.`
            : `There's a butterfly in Bir; it's us. Basking in the sunshine by daytime and glowing under the stars by dusk, Zostel Plus Bir hides away from the town's uproar. Your resting pad in the mountains overlooks an iconic expanse of forested mountains...`}
          <button
            className="text-primary ml-2 underline"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </p>
      </div>

     {/* Main Section */}
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Room Cards */}
        <div className="col-span-2 space-y-4">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col  md:flex-row justify-between items-center rounded border shadow-lg hover:-translate-y-2 transition-all duration-500"
            >
               {/* Room Image */}
               <img
               src={room.image}
               alt={room.name}
               className="w-full h-60 md:h-40 md:w-40 object-cover rounded"
                />
              <div className="flex-1 p-4">
                <h3 className="text-lg font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                <FaUser className="" />  {/* Room Icon */}
                <span>x 1</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{room.description}</p>
                <p className=" font-bold mt-2">
                  ₹{room.price} / <span className='text-xs text-gray-800'> night</span>
                </p>
              </div>
              <div className="flex items-center space-x-2 px-4 pb-3">
                <button
                  className="bg-gray-300 px-3 py-1 rounded"
                  onClick={() => updateQuantity(room.id, false)}
                  disabled={room.quantity === 0}
                >
                  -
                </button>
                <span className="px-1">{room.quantity}</span>
                <button
                  className="bg-primary text-white px-3 py-1 rounded hover:bg-secordary"
                  onClick={() => {
                    updateQuantity(room.id, true);
                    alert.success("Room added to cart!");
                  }}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Summary */}
        <div className="bg-white p-4 rounded shadow-lg border max-h-fit">
        <h2 className="text-2xl font-bold text-primary flex items-center space-x-2">
    <span>Booking</span>
    <span className='text-black font-bold'>Summery</span>
  </h2>
          
          {cartItems.length > 0 ? (
            <>
              <ul className="mt-4 space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 mt-4 pt-4 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span>₹{tax}</span>
                </div>
                <div className="flex justify-between text-gray-800 font-semibold">
                  <span>Total:</span>
                  <span>₹{totalWithTax}</span>
                </div>
              </div>
              <button className="bg-primary text-white w-full mt-4 py-2 rounded hover:bg-secordary">
                Book Now
              </button>
            </>
          ) : (
            <>
           <div className="text-center">
            <img src="https://book.zostel.com/static/media/gray-zobu.018014d9.svg" alt="" className="h-40 w-32 text-center m-auto animate-pulse" text />
            
            <p className="text-gray-500 mt-4">No rooms selected yet.</p>
           </div>
            </>
          )}
        </div>
      </div>
    </div>
    

    {/* amenities section */}
    <div className="py-10 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center space-x-2 text-gray-700">
            <div className="text-primary text-md">{amenity.icon}</div>
            <span className="text-sm font-medium">{amenity.text}</span>
          </div>
        ))}
      </div>
    </div>

    </div>
   </Layout>
  );
};

export default Hotels;
