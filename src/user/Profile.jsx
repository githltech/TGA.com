import React, { useEffect } from 'react';
import MetaData from '../components/layout/Metadata';
import { useSelector } from 'react-redux';
import Loader from '../components/layout/Loader';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import profilelogo from '../images/Profile.png'


const Profile  = () =>{

    const navigate = useNavigate();
    const {user,loading,isAuthenticatedUser} = useSelector((state)=>state.user);

    const avatarUrl = user?.avatar?.url || profilelogo;  // Agar avatar URL undefined ho toh default URL use hoga


    useEffect(()=>{
        
        if(isAuthenticatedUser === false){
            navigate('/login');
        }
    },[navigate,isAuthenticatedUser]);

    return (
        <>
        <Layout>
            <div className="px-4 mt-32">
            {loading ? (
            <Loader />
          ) : (
            <>
              <MetaData title={`${user.name}'s Profile`} />
              <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6 border border-gray-400">
                  <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
                    <Link
                      to="/me/update"
                      className=" px-2 py-1 border border-transparent text-sm font-medium shadow-sm text-white bg-primary hover:bg-secordary focus:outline-none"
                    >
                      Edit Profile
                    </Link>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <img
                      src={avatarUrl}
                      alt={user.name}
                      className="h-24 w-24 rounded-full object-cover border-[1px] border-indigo-500"
                    />
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold text-gray-900 capitalize">{user.name}</h2>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-sm text-gray-500">Joined On: {String(user.createdAt).substring(0,10)}</p>
                    </div>
                  </div>
    
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-700">Full Name</h3>
                      <p className="mt-2 text-gray-600 capitalize">{user.name}</p>
                    </div>
    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-700">Email</h3>
                      <p className="mt-2 text-gray-600">{user.email}</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-700">Phone</h3>
                      <p className="mt-2 text-gray-600"><span>{user.countryCode}</span>{user.mobileNumber}</p>
                    </div>
    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="text-lg font-medium text-gray-700">Joined On</h3>
                      <p className="mt-2 text-gray-600">{String(user.createdAt).substring(0,10)}</p>
                    </div>
                  </div>
    
                  <div className="flex space-x-4">
                    <Link
                      to="/orders"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font- shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                    >
                      My Bookings
                    </Link>
                    <Link
                      to="/password/update"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium shadow-sm text-white bg-primary hover:bg-secordary focus:outline-none"
                    >
                      Change Password
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
            </div>
        </Layout>    
        </>
      );
};

export default Profile;