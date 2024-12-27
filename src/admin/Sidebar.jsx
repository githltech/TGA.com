import React, { useState } from "react";
import profilelogo from '../images/Profile.png'
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);

  const {user } = useSelector(
    (state) => state.user
  );

  const toggleProducts = () => {
    setProductsOpen(!isProductsOpen);
  };

  return (
    <div className="bg-primary text-white h-screen p-6 space-y-2 ">
      <Link to="/">
        <img src={user.avatar && user.avatar.url ? user.avatar.url : profilelogo} alt="Ecommerce" className="w-32 rounded shadow-sm shadow-pink-50" />
      </Link>
      <h3 className="my-2 md:text-sm text-[12px] p-2 shadow-md shadow-pink-50">Welcome: <span className=''>{user.name}</span></h3>

      <Link to="/admin/dashboard" className="flex items-center space-x-2 hover:bg-black text-sm font-museo font-bold1 p-2 rounded-md hover:shadow-2xl hover:shadow-pink-50">
        <DashboardIcon /> <p>Dashboard</p>
      </Link>

      <div>
        <div
          onClick={toggleProducts}
          className="flex items-center space-x-2 hover:bg-black text-sm font-bold1 p-2 rounded-md cursor-pointer hover:shadow-2xl hover:shadow-pink-50"
        >
          {isProductsOpen ? <ExpandMoreIcon /> : <ImportExportIcon />}
          <span className="">Hotels</span>
        </div>
        {isProductsOpen && (
          <div className="ml-4 space-y-2">
            <Link to="/admin/products" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md hover:shadow-2xl hover:shadow-purple-300 text-xs">
              <PostAddIcon /> <span>All</span>
            </Link>
            <Link to="/admin/product" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md hover:shadow-2xl hover:shadow-purple-300 text-xs">
              <AddIcon /> <span>Create</span>
            </Link>
          </div>
        )}
      </div>

      <Link to="/admin/orders" className="flex items-center space-x-2 hover:bg-black  p-2 rounded-md hover:shadow-2xl hover:shadow-pink-50 text-sm font-bold1">
        <ListAltIcon /> <p>Bookings</p>
      </Link>

      <Link to="/admin/users" className="flex items-center space-x-2 hover:bg-black p-2 rounded-md hover:shadow-2xl hover:shadow-pink-50 text-sm font-bold1">
        <PeopleIcon /> <p>Users</p>
      </Link>

      <Link to="/admin/reviews" className="flex items-center space-x-2 hover:bg-black p-2 rounded-md hover:shadow-2xl hover:shadow-pink-50 text-sm font-bold1">
        <RateReviewIcon /> <p>Reviews</p>
      </Link>
    </div>
  );
};

export default Sidebar;
