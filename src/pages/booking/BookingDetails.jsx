import React,{useState} from 'react';
import Layout from '../../components/layout/Layout';
import WhyTga from '../../components/WhyTga';

const faqs = [
    {
      question: `Arrival in Dubai | Dhow Marina Cruise Experience`,
      answer: "In the morning, board your flight from Delhi airport to reach Dubai. Upon arriving at the airport, you will be driven to your hotel for check-in. Later, enjoy a romantic evening under Dubai's skyline as you get transferred from your hotel to Marina Harbour to board the Dhow Marina Cruise. Admire the beauty of Dubai City from the water and capture the moment with your partner. Also, savour a delicious meal as you enjoy the famous Tanoura Dance Show before getting driven back to your hotel.",
    },
    {
      question: "Desert Safari Experience",
      answer: "Today, spend the morning at leisure and explore some of the famous places in the city, like the AYA Universe, Miracle Garden, and Dubai Fountain, among others. Later, prepare yourself for an amazing adventure and board the transfer for the Dubai Desert Safari experience. Engage in activities like sandboarding and dune bashing, followed by a delicious BBQ dinner under the starlit sky, and watch the Tanoura Dance Show. After an amazing day, get driven back to the hotel for an overnight stay.",
    },
    {
      question: "Day Trip to Dubai Parks & Resorts",
      answer: "Yes, we encourage client involvement to ensure that the content aligns with their vision and goals.",
    },
    {
      question: "Dubai Sightseeing Tour | Visit to Burj Khalifa",
      answer: "We offer competitive pricing without compromising on quality, making our services accessible to a wide range of clients.",
    },
  ];


  const inclusions = [
    "4 nights stay in Dubai with breakfast",
    "Real Madrid World, Motiongate & Legoland Tickets At Dubai Parks & Resorts – One Park Pass – MOTIONGATE on a Shared basis and ticket",
    "Dubai Half Day City Tour",
    "Dubai Desert Safari with BBQ Dinner – All-In-One-Package on a Shared basis",
    "Dhow Cruise Dubai Marina – Marina Dinner Cruise on a Shared basis",
    "Burj Khalifa 124th & 125th Floor Tickets, Dubai on a Shared basis and ticket",
    "Airport transfer from Dubai International Airport to Deluxe Hotel",
    "Airport transfer from Dubai International Airport",
    "Daily Breakfast",
    "International flight tickets",
  ];

  const exclusions = [
    "Expenses of a personal nature.",
    "Meals not mentioned in the itinerary or inclusions",
    "Lunch",
    "Dinner",
    "Visa Charges",
    "Travel Insurance",
  ];

  const reviews = [
    {
      id: 1,
      name: "Kashyapi Agarwal",
      date: "16 Feb 2020",
      booked: "Dubai Luxurious Retreat | Sky-High Views and Desert Dunes",
      review:
        "Recommended since the tour was interesting plus a satisfying one, Our group was happy with overall planned as it was fulfilling right from the start till the end of it...All these 5 days we just had fun throughout...",
      rating: "5.0/5",
    },
    {
      id: 2,
      name: "Eekalabhya Bharadwaj",
      date: "08 Jan 2020",
      booked: "Dubai Luxurious Retreat | Sky-High Views and Desert Dunes",
      review:
        "We really appreciate the tour we had recently with Thrillophilia this is our first-time experience and we were glad that it went out as we expected from it which is greatly recommended while working around our budget...",
      rating: "5.0/5",
    },
    {
      id: 3,
      name: "Adhrit Mahajan",
      date: "02 Jan 2019",
      booked: "Dubai Luxurious Retreat | Sky-High Views and Desert Dunes",
      review:
        "We really appreciate the tour we had recently with Thrillophilia this is our first-time experience and we were glad that it went out as we expected from it which is greatly recommended while working around our budget...",
      rating: "5.0/5",
    },
    {
      id: 4,
      name: "Aagam Rana",
      date: "12 Jun 2021",
      booked: "Dubai Luxurious Retreat | Sky-High Views and Desert Dunes",
      review:
        "We really appreciate the tour we had recently with Thrillophilia this is our first-time experience and we were glad that it went out as we expected from it which is greatly recommended while working around our budget...",
      rating: "5.0/5",
    },
  ];

  const ratingData = [
    { stars: 5, percentage: 73, count: "39.6K" },
    { stars: 4, percentage: 16, count: "8.8K" },
    { stars: 3, percentage: 7, count: "1.5K" },
    { stars: 2, percentage: 2, count: "117" },
    { stars: 1, percentage: 1, count: "156" },
  ];


  const reviewswithimg = [
    {
      name: "Nethala Vijay Venkata Rathnam",
      reviewDate: "02 Jun 2023",
      booking: "Romantic Escape to Dubai | Love Amidst the Dunes",
      description:
        "Dear all, thank you for all the services you and your team provided during our stay in Dubai. This was my 1st trip to Dubai, and we really enjoyed our trip. Except for the day tour which was not satisfactory, remaining all went well. Thanks to driver Waseem, Ayub, Rehmat. Pick-up was always on time.",
      rating: 5.0,
      images: [
        {
           src: "https://media1.thrillophilia.com/filestore/0ngg6o4e68yfnt4xrlfhmldv5g9y_bbafe06dc9924f01b5eda8afbc52f716.jpg?w=200&dpr=1.5", 
           alt: "Image 1"
           },
        { 
          src: "https://media1.thrillophilia.com/filestore/qmt3lozxzdx5iq53srrhz8bms0nb_330B95E6-3D93-489F-9484-10DEC879A6F6.jpeg?w=200&dpr=1.5",
           alt: "Image 2"
           },
        {
           src: "https://media1.thrillophilia.com/filestore/w0nhg8xt782ruytsmhqvl3g5t5zo_IMG20230530171244.jpg?w=200&dpr=1.5",
            alt: "Image 3" 
          },
        { 
          src: "https://media1.thrillophilia.com/filestore/0ngg6o4e68yfnt4xrlfhmldv5g9y_bbafe06dc9924f01b5eda8afbc52f716.jpg?w=200&dpr=1.5",
           alt: "Image 4"
           },
        { 
          src: "https://media1.thrillophilia.com/filestore/ajuyhcw2nrxk5ppw8adu2whhsr1t_IMG-20230927-WA0041.jpg?w=200&dpr=1.5",
           alt: "Image 5" 
          },
          { 
            src: "https://media1.thrillophilia.com/filestore/ajuyhcw2nrxk5ppw8adu2whhsr1t_IMG-20230927-WA0041.jpg?w=200&dpr=1.5",
             alt: "Image 5" 
            },
      ],
     
    },
    {
      name: "Vinaya Arasu",
      reviewDate: "04 Oct 2023",
      booking: "Wonders of Dubai | Journey through Jewels of the Emirates",
      description:
        "A mesmerizing trip to Dubai was very well organized by the thrillophilia team. Our heartfelt thanks to Destination Expert Chirayu Sharma and Yash for their continuous support for our memorable trip. Itinerary was well-planned and executed by the team.",
      rating: 5.0,
      images: [
        { 
          src: "https://media1.thrillophilia.com/filestore/xqqaw3x7kd5wtndtm3bf92qi9klp_IMG20230316195303.jpg?w=200&dpr=1.5",
           alt: "Image 6"
           },
        {
           src: "https://media1.thrillophilia.com/filestore/8uj2doehpdxha854n28ecgq6gj70_IMG20230316193728.jpg?w=200&dpr=1.5",
            alt: "Image 7"
           },
        { 
          src: "https://media1.thrillophilia.com/filestore/vosksm0c4b4apcuctlh30k0o5phb_IMG20230316193617.jpg?w=200&dpr=1.5"
          , alt: "Image 8"
         },
        {
           src: "https://media1.thrillophilia.com/filestore/txja786rbmtj2ijbva9zd5qfqaet_IMG20230316184106.jpg?w=200&dpr=1.5",
            alt: "Image 9" 
          },
        {
           src: "https://media1.thrillophilia.com/filestore/vodqfz1420v7m46zjirr1rz2np60_WhatsApp%20Image%202023-11-22%20at%209.10.53%20PM.jpeg?w=200&dpr=1.5",
            alt: "Image 10"
           },
           {
            src: "https://media1.thrillophilia.com/filestore/vodqfz1420v7m46zjirr1rz2np60_WhatsApp%20Image%202023-11-22%20at%209.10.53%20PM.jpeg?w=200&dpr=1.5",
             alt: "Image 10"
            },
      ],
    },
    {
      name: "Bipin Arasu",
      reviewDate: "04 Oct 2023",
      booking: "Wonders of Dubai | Journey through Jewels of the Emirates",
      description:
        "A mesmerizing trip to Dubai was very well organized by the thrillophilia team. Our heartfelt thanks to Destination Expert Chirayu Sharma and Yash for their continuous support for our memorable trip. Itinerary was well-planned and executed by the team.",
      rating: 5.0,
      images: [
        { 
          src: "https://media1.thrillophilia.com/filestore/95pyxfuem57lhbh3ahfeiafbhgg6_IMG_4103.jpeg?w=200&dpr=1.5",
           alt: "Image 6"
           },
        {
           src: "https://media1.thrillophilia.com/filestore/nlzey4eo4rk0dy960aef1v5h1tmd_IMG_4077.jpeg?w=200&dpr=1.5",
            alt: "Image 7"
           },
        { 
          src: "https://media1.thrillophilia.com/filestore/nm4wqh3ca0sui4adfmfkfyrgkdeu_IMG_4074.jpeg?w=200&dpr=1.5"
          , alt: "Image 8"
         },
        {
           src: "https://media1.thrillophilia.com/filestore/8i0umm3n6l1qkmzpxpf53mpsap8h_5E5A145E-222C-4179-A896-B066B145B966.jpeg?w=200&dpr=1.5",
            alt: "Image 9" 
          },
        {
           src: "https://media1.thrillophilia.com/filestore/vodqfz1420v7m46zjirr1rz2np60_WhatsApp%20Image%202023-11-22%20at%209.10.53%20PM.jpeg?w=200&dpr=1.5",
            alt: "Image 10"
           },
           {
            src: "https://media1.thrillophilia.com/filestore/8i0umm3n6l1qkmzpxpf53mpsap8h_5E5A145E-222C-4179-A896-B066B145B966.jpeg?w=200&dpr=1.5",
             alt: "Image 10"
            },
      ],
    },
  ];
  


const BookingDetails = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

  return (
   <Layout>
     <div className="px-4 lg:px-24 mt-16 lg:mt-40">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-2 space-y-6">
          {/* Image Grid */}
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-3">
              <img
                src="https://media1.thrillophilia.com/filestore/qyaa856dclqtoomnbg3up4pf8o1h_shutterstock_2433435685.jpg?w=580&dpr=2"
                alt="Main"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 grid grid-rows-2 gap-2">
              <img
                src="https://media1.thrillophilia.com/filestore/91auwe9632in9yhrixuqzuznmolq_1556193320_marina2.jpg?w=240&dpr=2"
                alt="Thumb 1"
                className=" w-full h-full object-cover"
              />
              <img
                src="https://media1.thrillophilia.com/filestore/la5r98xm1gqp3awsmpjz4g8htga2_42258957.jpg?w=240&dpr=2"
                alt="Thumb 2"
                className=" w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title and Features */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Romantic Dubai Retreat with FREE Parks & Resorts Tickets
            </h1>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="text-gray-500 text-sm">(4.7/5)</span>
            </div>
            <div className="flex items-center md:space-x-4 space-x-2 mt-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] md:text-sm">
                Transfer Included
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] md:text-sm">
                Stay Included
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-[10px] md:text-sm">
                Breakfast Included
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-[10px] md:text-sm">
                Sightseeing Included
              </span>
            </div>
          </div>

          {/* Trip Options */}
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-800">Choose Trip Duration</h2>
            <div className="flex space-x-4">
              <div className="border border-gray-300 rounded-lg p-4 text-center">
                <p className="text-lg font-bold">4 days</p>
                <p className="text-gray-500">₹20,000</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 text-center">
                <p className="text-lg font-bold">6 days</p>
                <p className="text-gray-500">₹25,000</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-4 text-center">
                <p className="text-lg font-bold">8 days</p>
                <p className="text-gray-500">₹30,000</p>
              </div>
            </div>
          </div>

          {/* Trip Highlights */}
          <div>
            <h2 className="text-lg font-medium text-gray-800">Trip Highlights</h2>
            <ul className="list-disc pl-6 text-gray-600 mt-2 space-y-2">
              <li>
                Experience the magic of Dubai with your partner under the starlit desert sky, with luxurious dinners and breathtaking views, offering Dubai's captivating beauty.
              </li>
              <li>Ascend to one of the most stunning buildings in Dubai and the world's tallest building, Burj Khalifa, and take-in the views of the city's skyline from its 124th floor.</li>

              <li>Spend some quality time with your partner on the traditional Dhow Marina Cruise as you savour a delicious dinner and admire the beauty of the glittering city-skyline.</li>

              <li>Experience the thrill of dune bashing in Dubai's vast desert against the backdrop of stunning golden landscapes, creating an unforgettable adventure.</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-4 rounded-lg shadow-xl border h-full max-h-fit">
          <h2 className="text-lg font-bold text-gray-800">₹52,750</h2>
          <p className="text-sm text-gray-500 line-through">₹60,000</p>
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secordary"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Itinerary</h2>
        <div className=" border-gray-200 pt-4">
        {faqs.map((faq, index) => (
            <div key={index} className="border px-4 py-1 m-3 border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 text-gray-600 font-museo font-bold1  hover:text-primary focus:outline-none flex justify-between"
              >
                {faq.question}
                <span>{openIndex === index ? <>&#9650;</> : <>&#9660;</>}</span>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 text-sm pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 mt-4 border bg-white shadow-md rounded-md">
      <h2 className="text-lg font-medium text-gray-800 mb-4">What's inside the package?</h2>
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Inclusions */}
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-3">Inclusions</h3>
          <ul className="space-y-2">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-green-500 font-bold text-lg">✅</span>
                <p className="text-gray-700 text-[15px]">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-3">Exclusions</h3>
          <ul className="space-y-2">
            {exclusions.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-red-500  text-lg">x</span>
                <p className="text-gray-700 text-[15px]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-6 pt-6">
      {/* Rating Summary */}
      <div className="bg-white border rounded-lg p-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-green-500">4.7</h1>
          <p className="text-gray-600">From 65+ countries</p>
        </div>
        <div className="mt-4">
          {ratingData.map((bar, index) => (
            <div key={index} className="flex items-center gap-3 mb-2">
              <span className="text-sm font-medium">{bar.stars} ★</span>
              <div className="relative flex-1 h-2 bg-gray-200 rounded-full">
                <div
                  className="absolute top-0 left-0 h-2 bg-orange-400 rounded-full"
                  style={{ width: `${bar.percentage}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{bar.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Reviews */}
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex items-start bg-white border rounded-lg p-4 gap-4"
          >
            <img
              src="https://media1.thrillophilia.com/filestore/45g0oea469wixcafjjr51u9r5ffs_profile_image.jpg?w=400&h=300&dpr=1.5"
              alt={review.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800">{review.name}</h3>
              <p className="text-sm text-gray-500">Reviewed: {review.date}</p>
              <p className="text-sm text-gray-500">
                Booked: <span className="font-medium">{review.booked}</span>
              </p>
              <p className="text-sm text-gray-700 mt-2">{review.review}</p>
              <a
                href="/"
                className="text-sm text-primary font-medium mt-1 inline-block"
              >
                Read More
              </a>
            </div>
            <span className="text-green-500 font-bold text-lg">
            ★{review.rating}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="py-6">
      {reviewswithimg.map((review, index) => (
        <div
          key={index}
          className="border rounded-lg shadow-md p-4 mb-6 bg-white"
        >
          {/* Reviewer Details */}
          <div className="flex items-center mb-4">
            <div className=" mr-4">
              <img src="https://media1.thrillophilia.com/filestore/7jep0tyhv760imw424ri5rqemzor_profile_image.jpg?w=400&h=300&dpr=2" alt="" className='w-12 h-12 rounded-full' />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">{review.name}</h3>
              <p className="text-sm text-gray-500">Reviewed: {review.reviewDate}</p>
            </div>
          </div>

          {/* Booking Info */}
          <p className="mb-2 text-sm">
            Booked:{" "}
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-700"
            >
              {review.booking}
            </a>
          </p>

          {/* Description */}
          <p className="text-sm text-gray-700">{review.description}</p>
          

          {/* Images */}
          <div className="flex mt-4 overflow-x-auto scrollbar-hide w-full">
            {review.images.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className="w-44 h-40 object-cover rounded-md mr-2"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
    <WhyTga/>
   </Layout>
  );
};

export default BookingDetails;
