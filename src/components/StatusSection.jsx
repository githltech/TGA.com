import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatusSection = () => {
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, 
  });

  if (inView && !hasScrolledIntoView) {
    setHasScrolledIntoView(true);
  }

  return (
    <div
      className="relative w-full py-10 sm:py-20  bg-cover bg-center"
      style={{
        backgroundImage: "url('https://media1.thrillophilia.com/filestore/2lihqv4wpcc7uquoealydsvkr425_shutterstock_2110928681.jpg?w=340&dpr=2')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          WE'VE GOT NUMBERS
        </h1>
        <hr className="border-b-2 border-primary w-32 mb-8"></hr>

        {/* Statistics Section */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center"
        >
          {/* Item 1 */}
          <div>
            <div className="text-xl sm:text-3xl font-bold mb-1">
              {hasScrolledIntoView && (
                <CountUp start={0} end={32} duration={2} suffix="+" />
              )}
            </div>
            <p className="font-museo font-light text-xxs">Years Of Excellence</p>
          </div>

          {/* Item 2 */}
          <div>
            <div className="text-xl sm:text-3xl font-bold mb-1">
              {hasScrolledIntoView && (
                <CountUp start={0} end={100} duration={2} suffix="+" />
              )}
            </div>
            <p className="font-museo font-light text-xxs">Destinations</p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="text-xl sm:text-3xl font-bold mb-1">
              {hasScrolledIntoView && (
                <CountUp start={0} end={11} duration={2} suffix="+" />
              )}
            </div>
            <p className="font-museo font-light text-xxs">Offices</p>
          </div>

          {/* Item 4 */}
          <div>
            <div className="text-xl sm:text-3xl font-bold mb-1">
              {hasScrolledIntoView && (
                <CountUp start={0} end={200} duration={2} suffix="+" />
              )}
            </div>
            <p className="font-museo font-light text-xxs">Employees</p>
          </div>

          {/* Item 5 */}
          <div>
            <div className="text-xl sm:text-3xl font-bold mb-1">
              {hasScrolledIntoView && (
                <CountUp start={0} end={20000} duration={2} suffix="+" />
              )}
            </div>
            <p className="font-museo font-light text-xxs">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Request a Call Back */}
      {/* <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 rotate-90 bg-orange-500 text-white px-3 py-2 text-sm cursor-pointer">
        REQUEST A CALL BACK
      </div> */}
    </div>
  );
};

export default StatusSection;
