import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Chitra Gurnani Daga",
      role: "The Show Runner",
      position: "CEO & Co-Founder",
      image: "https://media1.thrillophilia.com/about_us_media/masters/chitra_maam.png?w=160&dpr=1.1",
    },
    {
      name: "Abhishek Daga",
      role: "The Idea Box",
      position: "Co-Founder",
      image: "https://media1.thrillophilia.com/about_us_media/masters/abhishek.png?w=160&dpr=1.1",
    },
    {
      name: "Tarun Dadlani",
      role: "Life of The Party",
      position: "Vice President - Growth",
      image: "https://media1.thrillophilia.com/about_us_media/masters/tarun.png?w=160&dpr=1.1",
    },
    {
      name: "Abhishek Puri",
      role: "Man City Fan",
      position: "Vice President - Growth",
      image: "https://media1.thrillophilia.com/about_us_media/masters/abhishek_puri.png?w=160&dpr=1.1",
    },
    {
      name: "Rajdeep Mandrekar",
      role: "The Poker Guy",
      position: "Head of Engineering",
      image: "https://media1.thrillophilia.com/about_us_media/masters/rajdeep.png?w=160&dpr=1.1",
    },
    {
      name: "Girdhar Singh Sodha",
      role: "Heavy Driver",
      position: "SEO Manager",
      image: "https://media1.thrillophilia.com/about_us_media/masters/girdhar.png?w=160&dpr=1.1",
    },
    {
      name: "Ram Ratan Mishra",
      role: "Cognitive Maven",
      position: "Digital Marketing Manager",
      image: "https://media1.thrillophilia.com/about_us_media/masters/ram.png?w=160&dpr=1.1",
    },
    {
      name: "Chitransh Singh",
      role: "The Off-Roader",
      position: "Associate Vice President",
      image: "https://media1.thrillophilia.com/about_us_media/masters/chitransh.png?w=160&dpr=1.1",
    },
   
    
  ];

  return (
    <div className="px-4 md:px-16 lg:px-24 bg-white py-16">
      <div className="text-left mb-10">
        <h2 className="text-4xl font-bold text-secondaryblack">
          Meet the <span className="text-primary">Architects of Experiences</span>
        </h2>
        <p className="text-gray-600 font-light1 font-sans mt-2">
          We are a power-packed tribe of{" "}
          <span className="text-primary">800+</span> extraordinarily talented & passionate professionals
        </p>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
      <div className="grid grid-cols-5 min-w-[1000px] lg:min-w-full gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full hover:scale-125 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-4 text-[15px] font-sans font-regular1">{member.name}</h3>
            <p className="text-[#515151] text-[15px] font-light1 ">{member.role}</p>
            <p className="text-[#515151] text-[13px] font-light1">{member.position}</p>
           
          </div>
        ))}
      
          {/* Call to Action */}
      <div className="text-center mx-auto">
        <div className="flex justify-center items-center w-40 h-40">
          <div className="w-full h-full flex items-center justify-center rounded-full bg-primary">
            <p className="text-[15px] font-sans font-regular1 text-white">See yourself <br /> here?</p>
          </div>
        </div>
        <button className="mt-4 text-primary py-2 px-8 rounded-lg hover:text-textwhite hover:bg-primary border border-primary">
          Join Us!
        </button>
      </div>
      </div>
    </div>
    </div>
  );
};

export default TeamSection;
