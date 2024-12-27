import React, { useEffect } from "react";
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { Line, Doughnut } from 'react-chartjs-2';
import { useSelector, useDispatch } from "react-redux";
// import {getAdminProducts } from "../../actions/ProductAction";
import {Chart as ChartJS, LinearScale,CategoryScale, PointElement,LineElement,ArcElement,Title,Tooltip,Legend,Filler } from 'chart.js';
import { getAllUsers } from "../actions/UserAction";
// import { getallOrders } from "../../actions/OrderAction";
import MetaData from "../components/layout/Metadata";
import { FaRupeeSign, FaList, FaBed } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";




ChartJS.register(LinearScale,CategoryScale,PointElement,LineElement,ArcElement,Title,Tooltip,Legend, Filler);

const AdminDashboard = () => {

    // const {products} = useSelector(state => state.products);  
    const {users} = useSelector(state => state.allUsers);
    // const {orders} = useSelector(state => state.allOrders);


    const dispatch = useDispatch();

    //let outOfStock = 0;

    // products && products.forEach((item)=>{
    //     if(item.Stock === 0){
    //         outOfStock += 1;
    //     };
    // });

    useEffect(()=>{
        // dispatch(getAdminProducts());
        // dispatch(getallOrders());
        dispatch(getAllUsers());
    },[dispatch]);

  //let totalAmount = 0;

  // orders &&
  //   orders.forEach((item) => {
  //     totalAmount += item.totalPrice;
  //   });


  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "Total Amount",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: true,
        data: [0, 108976],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "In Stock"],
    datasets: [
      {
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
        data: [9 , 20],
      },
    ],
  };

  return (
    <>
     <MetaData title="TGA Dashboard"/>
    <div className="flex">
      <Sidebar />
      <div className="flex-grow sm:p-6 p-2 bg-gray-100">
        <h2 className="text-sm md:text-2xl font-sans font-bold1 text-gray-700 mb-6">Welcome To TGA Admin Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

          {/* total sales */}
          <Link to=''>
         <div className="flex bg-white p-1 rounded shadow border border-gray-300 items-center gap-2">
          <div className="bg-green-500 text-white px-6 py-3 rounded">
          <FaRupeeSign className=""/>
          </div>
         <div className="">
            <p className="text-gray-600 text-sm">Total Sales</p>
            <h3 className="text-sm font-bold">₹ 45000</h3>
          </div>
         </div>
         </Link>

         {/* today sales */}
         <Link to=''>
         <div className="flex bg-white p-1 rounded shadow border border-gray-300 items-center gap-2">
          <div className="bg-yellow-500 text-black px-6 py-3 rounded">
          <FaRupeeSign className=""/>
          </div>
         <div className="">
            <p className="text-gray-600 text-sm">Today Sale</p>
            <h3 className="text-sm font-bold">₹ 5000</h3>
          </div>
         </div>
         </Link>

         {/* categories */}
         <Link to=''>
         <div className="flex bg-white p-1 rounded shadow border border-gray-300 items-center gap-2">
          <div className="bg-blue-500 text-white px-6 py-3 rounded">
          <FaList className=""/>
          </div>
         <div className="">
            <p className="text-gray-600 text-sm">Categories</p>
            <h3 className="text-sm font-bold">6</h3>
          </div>
         </div>
         </Link>

         {/* total users  */}
         <Link to="/admin/users">
         <div className="flex bg-white p-1 rounded shadow border border-gray-300 items-center gap-2">
          <div className="bg-yellow-400 text-black px-6 py-3 rounded">
          <FaUsers className=""/>
          </div>
         <div className="">
              <p className="text-gray-600 text-sm">Users</p>
              <h3 className="text-sm font-bold">{users && users.length }</h3>
          </div>
         </div>
         </Link>

          {/* Total Bookings */}
          <Link to="" className="">
          <div className=" flex bg-white p-1 rounded shadow border border-gray-300 items-center gap-2">
          <div className="bg-green-500 text-white px-6 py-3 rounded">
          <FaBed className=""/>
          </div>
           <div className="">
              <p className="text-gray-600 text-sm">Total Bookings</p>
              <h3 className="text-sm font-bold"> 3247</h3>
           </div>
          </div>
          </Link>


          {/* Today Bookings */}
          <Link to="" className="">
          <div className=" flex bg-white p-1 rounded shadow border border-gray-300 items-center gap-2">
          <div className="bg-yellow-500 text-black px-6 py-3 rounded">
          <FaBed className=""/>
          </div>
           <div className="">
              <p className="text-gray-600 text-sm">Today Bookings</p>
              <h3 className="text-sm font-bold"> 34</h3>
           </div>
          </div>
          </Link>

          {/* Total Failed Bookings */}
          <Link to="" className="">
          <div className=" flex bg-white p-1 rounded shadow border border-gray-300 items-center gap-2">
          <div className="bg-red-500 text-white px-6 py-3 rounded">
          <MdErrorOutline className=""/>
          </div>
           <div className="">
              <p className="text-gray-600 text-sm">Total Failed Bookings</p>
              <h3 className="text-sm font-bold"> 20</h3>
           </div>
          </div>
          </Link>

         {/* Today Failed Bookings */}
         <Link to=''>
          <div className=" flex bg-white p-1 rounded shadow border border-gray-300 items-center gap-2">
          <div className="bg-red-500 text-black px-6 py-3 rounded">
          <MdErrorOutline className=""/>
          </div>
           <div className="">
              <p className="text-gray-600 text-sm">Today Failed Bookings</p>
              <h3 className="text-sm font-bold"> 34</h3>
           </div>
          </div>
          </Link>

        </div>

        {/* Line Chart */}
        <div className="bg-white sm:p-6 p-2 rounded-lg shadow mb-6 border border-gray-400">
          <h3 className="sm:text-lg text-xs font-bold mb-4">Total Amount Overview</h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              <Line
                data={lineState}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      type: 'category',
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white sm:p-6 p-2 rounded-lg shadow border border-gray-400">
          <h3 className="sm:text-lg text-xs font-bold mb-4">Stock Overview</h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              <Doughnut
                data={doughnutState}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminDashboard;
