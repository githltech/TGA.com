import React from "react";
import { NavLink } from "react-router-dom";

const TabContent = () => {
  const tabs = [
    { name: "Explore", path: "/explore" },
    { name: "Dubai", path: "/dubai" },
    { name: "Singapore", path: "/singapore" },
    { name: "North East India", path: "/north-east-india" },
    { name: "Thailand", path: "/thailand" },
    { name: "Kashmir", path: "/kashmir" },
    { name: "Switzerland", path: "/switzerland" },
  ];

  return (
    <div className="overflow-x-auto bg-gray-100 border-b">
      <div className="flex items-center justify-start space-x-36 px-4 py-2">
        {tabs.map((tab, index) => (
          <NavLink
            key={index}
            to={tab.path}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold border-b-2 border-orange-500 py-2 whitespace-nowrap"
                : "text-gray-700 py-2 whitespace-nowrap"
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TabContent;
