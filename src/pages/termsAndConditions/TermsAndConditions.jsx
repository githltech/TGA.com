import React, { useState } from "react";
import Layout from "../../components/layout/Layout";

const TermsAndConditions = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    { id: "terms", label: "Terms & Conditions" },
    { id: "privacy", label: "Privacy Policy" },
  ];

  const content = {
    terms: `
      <h1 class='text-[2rem] font-bold text-[#515151]'>Terms & Conditions</h1>

      <p class="text-gray-500 font-light1 text-sm mb-4">Last updated: October 27, 2022</p>

      <p class= "text-gray-600 font-light1 font-sans text-[14px]">This web page represents a legal document that serves as the terms of use for our website (“Terms of Use”), www.TGA.com and any associated mobile application (collectively, “Website”), as owned and operated by 53Take off Pvt limited, Barasingha Private Limited, TGA Inc., TGA FZCO or TGA Travel Solutions (“TGA”).</p>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">53takeoffs and Barasingha are the supplier / sourcing partner company for TGA for diverse destinations, 53takeoffs and Barasingha does the fulfilment and contracting with the help of local suppliers across the globe and would operate certain stays and tours booked on TGA.</p>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">Capitalised terms, unless otherwise defined, have the meaning specified within the Definitions section below. This Terms of Use, and other posted guidelines within our Website, (collectively “Legal Terms”), constitute the entire and only agreement between you and TGA, and supersede all other agreements, representations, warranties and understandings with respect to our Website and the subject matter contained herein.</p>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">We may amend our Legal Terms at any time without specific notice to you. The latest copies of our Legal Terms will be posted on our Website, and you should review all Legal Terms prior to using our Website. After any revisions to our Legal Terms are posted, you agree to be bound to any such changes to them. Therefore, it is important for you to periodically review our Legal Terms to make sure you still agree to them.</p>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">By using our Website, you agree to fully comply with and be bound by our Legal Terms. Please review them carefully. If you do not accept our Legal Terms, do not access and use our Website.</p>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">If you do not accept our Legal Terms, you should not access our Website. If you have already accessed our Website and do not accept our Legal Terms, you should immediately discontinue use of our Website.</p>

      <h3 class="text-[1.17rem] font-bold text-[#515151] my-4">Definations</h3>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">The terms: “us” or “we” or “our” refers to TGA, the owner of the Website.

      </p>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">A “Member” is an individual that has registered with our Website to use our Website's features. A “supplier” is a Member of our Website that is a business offering tours, activities, and other travel-related goods and services to the general public and has registered with our Website to offer their goods/services. We refer to a Member who purchases goods/services from suppliers as a “Customer”.
      .</p>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">A “Profile” is an online collection of information provided by a Member about their business if a supplier, or generally about themselves if a Customer. A “User” is a collective identifier that refers to either a Visitor or a Member. A “Visitor” is someone who merely browses our Website.</p>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">All text, information, graphics, audio, video, and data offered through our Website, whether free to all or part of our paid features of our Website, are collectively known as our “Content”. We may refer to Content provided by our Members, whether as part of their Profile or in other postings to our Website, as “Member Content.” When we refer to our Website, our Content is included by reference.</p>


      <h3 class="text-[1.17rem] font-bold text-[#515151] my-4">Limited License</h3>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">TGA grants you a non-exclusive, non-transferable, revocable licence to access and use our Website strictly in accordance with our Legal Terms. Your use of our Website is solely for the purposes as provided herein.
      </p>

      <h3 class="text-[1.17rem] font-bold text-[#515151] my-4">Our Relationship to You</h3>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">TGA is strictly a venue that does NOT enter into any other relationship with you, other than that of an independent contractor. Our Legal Terms in no way create any agency, partnership, joint venture, employee-employer or franchisor-franchisee relationship between you and TGA, other Users, or our affiliates.
      .</p>


      <h3 class="text-[1.17rem] font-bold text-[#515151] my-4">Legal Compliance</h3>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">You agree to comply with all applicable domestic and international laws, statutes, ordinances, and regulations regarding your use of our Website. TGA reserves the right to investigate complaints or reported violations of our Legal Terms and to take any action we deem appropriate, including but not limited to cancelling your Member account, reporting any suspected unlawful activity to law enforcement officials, regulators, or other third parties and disclosing any information necessary or appropriate to such persons or entities relating to your profile, email addresses, usage history, posted materials, IP addresses and traffic information, as allowed under our Privacy Policy.</p>

      <h3 class="text-[1.17rem] font-bold text-[#515151] my-4">Eligibility and Registration for Membership</h3>

      <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">You may view some of our Content without becoming a Member of our Website. However, to use our Website, you may have to register and become a Member. Your membership is not transferable or assignable and is void where prohibited. You certify that you are at least 18 years of age or older. If you are between the ages of 13 and 18, you certify that you have your parent's permission to join our Website and become a Member. You may not access this website if you are under the age of 13.</p>

     
    `,
    privacy: `
    <h1 class='text-[2rem] font-bold text-[#515151]'>Terms & Conditions</h1>

    <p class="text-gray-500 font-light1 text-sm mb-4">Last updated: October 27, 2022</p>

    <p class= "text-gray-600 font-light1 font-sans text-[14px]">This privacy policy is for www.TGA.comand served by Thrillophiliatours and adventure pvt. ltd. and governs the privacy of its users who choose to use it.</p>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">The policy sets out the different areas where user privacy is concerned and outlines the obligations & requirements of the users, the website and website owners. Furthermore the way this website processes, stores and protects user data and information will also be detailed within this policy.</p>

    <h3 class="text-[1.17rem] font-bold text-[#515151] my-4">The Website</h3>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">This website and its owners take a proactive approach to user privacy and ensure the necessary steps are taken to protect the privacy of its users throughout their visiting experience. This website comply's to all India's national laws and requirements for user privacy.</p>


    <h3 class="text-[1.17rem] font-bold text-[#515151] my-4">Use Of Cookies</h3>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">This website uses cookies to better the users experience while visiting the website. Where applicable this website uses a cookie control system allowing the user on their first visit to the website to allow or disallow the use of cookies on their computer / device. This complies with recent legislation requirements for websites to obtain explicit consent from users before leaving behind or reading files such as cookies on a user's computer / device.</p>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">Cookies are small files saved to the user's computers hard drive that track, save and store information about the user's interactions and usage of the website. This allows the website, through its server to provide the users with a tailored experience within this website. Users are advised that if they wish to deny the use and saving of cookies from this website on to their computers hard drive they should take necessary steps within their web browsers security settings to block all cookies from this website and its external serving vendors.</p>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">This website uses tracking software to monitor its visitors to better understand how they use it. This software is provided by Google Analytics which uses cookies to track visitor usage. The software will save a cookie to your computers hard drive in order to track and monitor your engagement and usage of the website, but will not store, save or collect personal information. You can read Google's privacy policy here for further information [ http://www.google.com/privacy.html</p>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">Other cookies may be stored to your computers hard drive by external vendors when this website uses referral programs, sponsored links or adverts. Such cookies are used for conversion and referral tracking and typically expire after 30 days, though some may take longer. No personal information is stored, saved or collected.</p>

    <h3 class="text-[1.17rem] font-bold text-[#515151] my-4">Email Newsletter</h3>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">Although this website only looks to include quality, safe and relevant external links, users are advised adopt a policy of caution before clicking any external web links mentioned throughout this website. (External links are clickable text / banner / image links to other websites.)</p>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">The owners of this website cannot guarantee or verify the contents of any externally linked website despite their best efforts. Users should therefore note they click on external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.</p>

    <h3 class="text-[1.17rem] font-bold text-[#515151] my-4">External Links</h3>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">Although this website only looks to include quality, safe and relevant external links, users are advised adopt a policy of caution before clicking any external web links mentioned throughout this website. (External links are clickable text / banner / image links to other websites.)</p>

    <p class= "text-gray-600 font-light1 font-sans text-[14px] mt-4">The owners of this website cannot guarantee or verify the contents of any externally linked website despite their best efforts. Users should therefore note they click on external links at their own risk and this website and its owners cannot be held liable for any damages or implications caused by visiting any external links mentioned.

    </p>

    

    `,
  };

  return (
    <Layout>
      <div className=" py-8 px-4 md:px-16 lg:px-24 mt-28 ">
      <div className=" bg-white">
        {/* Tabs */}
        <div className="flex border-b border-t">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm font-medium px-4 py-2 focus:outline-none relative ${
                activeTab === tab.id ? "text-primary" : "text-gray-500"
              }`}
            >
              {tab.label}
              <div
                className={`absolute bottom-0  left-0 right-0 h-[1px] bg-primary transition-all duration-300 ${
                  activeTab === tab.id ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div
          className="mt-6 text-gray-700 leading-relaxed px-4"
          dangerouslySetInnerHTML={{ __html: content[activeTab] }}
        ></div>
      </div>
    </div>
    </Layout>
  );
};

export default TermsAndConditions;
