import React, { useEffect, useState } from "react";

const Timeline = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const timelineData = [
    {
      year: "2011",
      title: (
        <>
        Igniting a <span className="text-primary">Vision. </span> <br /> Infusing <span className="text-primary">Thrill.</span>
        </>
      ),
      description:
        "A shared dream of Chitra Gurnani Daga and Abhishek Daga, Thrillophilia was launched in 2011. Within just a year, what began as an online platform went on to become one of India’s most-loved adventure travel service providers. From 2011-13, Thrillophilia continued to expand its horizons and even ventured into the B2B space. The company served 1000+ corporate clients like Google, Cisco, SAP, Microsoft, Mercedes, and many prominent brands. We also catered to 300K+ travellers and positioned ourselves as a leader in corporate travel experiences.",
      image: "https://media1.thrillophilia.com/about_us_media/instagram_posts/5_Pic.jpg?w=300&dpr=1.5",
    },
    {
      year: "2014",
      title: "Investments & Breakthroughs",
      description:
        "This pivotal year witnessed strategic expansions as well as significant investments that provided Thrillophilia the boost it needed to become the market leader. In the next two years, we ventured into scaling activities and experiences, invested in technology, and launched a B2C app for bookings activities on the go. Over the next three years (2014-17) the growth rate spiked to 200% Year-on-Year. By late 2016, we shifted our base of operations from Bengaluru to Jaipur and expanded the team size to fulfil our growth objectives.",
      image: "https://media1.thrillophilia.com/about_us_media/instagram_posts/6_Pic.jpeg?w=300&dpr=1.5",
    },
    {
      year: "2017",
      title: "A Year of Innovation and Industry Recognition",
      description:
        "With a user base exceeding 3 million, Thrillophilia curated 12,500+ activities across 125+ destinations and emerged as a leader in India's activities & experiences travel market. We received widespread recognition and admiration within the travel industry. Responding to the growing demand for experiential travel, we selected a few Indian destinations to venture into the multi-day tour segment in next two years. The pilot tests fuelled our confidence for this promising category.",
      image: "https://media1.thrillophilia.com/about_us_media/instagram_posts/7_Pic.jpeg?w=300&dpr=1.5",
    },
    {
      year: "2020",
      title: "Thriving Together through an Apocalypse Called COVID",
      description:
        "During the Covid-19 outbreak, while the world stood still, we, at Thrillophilia, embarked on a journey of transformation overhauling our content and technology infrastructure. Our sustained efforts and never-say-die attitude eventually resulted in a 10x increase in the company’s revenue as compared to the pre-Covid years. Recognizing the evolving travel landscape post-pandemic, our team pioneered innovative concepts, leading to the creation of 53 TakeOffs—a house of digital-first travel brands and the current parent company of Thrillophilia. In FY 2022-23, Thrillophilia bought back its 30% stakes from the investors, which gave us complete autonomy and set the stage for a new chapter of innovation and growth.",
      image: "https://media1.thrillophilia.com/about_us_media/instagram_posts/8th_pic.jpg?w=300&dpr=1.5",
    },
    {
      year: "2023",
      title: "Scaling New Peaks of Excellence With Full Autonomy",
      description:
        "In 2023, Thrillophilia reached unprecedented heights, achieving remarkable milestones in user engagement and global outreach. This year, Thrillophilia entered the international multi-day tour market, opening a “world” of experiences and activities for our customers. We also established strategic partnerships with prestigious tourism boards of destinations like Dubai, Abu Dhabi, Thailand and many more. The introduction of international multi-day tours and the strategic partnerships resulted in a turnover of 500+ crore in 2023. Our next mission is to create a multi-billion dollar tourism business with 53 Takeoffs, establish more than 100 international brands, and generate over 25,000 crores in revenue by 2027.",
      image: "https://media1.thrillophilia.com/about_us_media/instagram_posts/10_Pic.jpeg?dpr=1.0&q=70&w=300",
    },
  ];

  return (
    <div className="relative bg-gray-100 py-16 px-4 md:px-16 lg:px-24">
      {/* Heading */}
      <h2 className="text-left text-4xl font-bold">
        Thrillophilia's <span className="text-primary">Journey</span>
      </h2>
      <h3 className="text-[15px] text-[#515151] font-sans font-medium mb-8">Traversing the Path of Adventure, One Remarkable Memory at a Time.</h3>


      {/* Timeline Container */}
      <div className="relative flex flex-col items-center">
        {/* Middle Line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 transform -translate-x-1/2"
          style={{
            background: `linear-gradient(to bottom, #1B4D3E ${scrollPercentage}%, #E5E7EB ${scrollPercentage}%)`,
          }}
        ></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center  w-full mb-16 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Circle and Year */}
            <div
              className="absolute hidden md:block left-1/2 transform -translate-x-1/2 items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-md"
              style={{
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <p className="font-bold ml-2 mt-3">{item.year}</p>
            </div>

            {/* Content */}
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? "order-2 md:order-1 md:pr-10" : "order-2 md:pl-10"
              }`}
            >
              <h3 className="text-2xl font-semibold text-gray-800 my-4">
                {item.title}
              </h3>
              <p className="text-[#202020] text-[15px] font-sans font-light1 leading-relaxed">{item.description}</p>
            </div>

            {/* Image */}
            <div
              className={`w-full md:w-1/2  ${
                index % 2 === 0 ? "order-1 md:order-2 md:pl-10" : "order-1 md:pr-10"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 md:h-72 object-cover object-center rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
