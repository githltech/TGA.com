import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useModal } from '../context/ModelContext';

const ProtectedRoute = ({ isAdmin, children }) => {
  const { loading, isAuthenticatedUser, user } = useSelector((state) => state.user);

  const {openModal} = useModal();

  if (loading) return <div>Loading...</div>; // Show loading feedback

  if (!isAuthenticatedUser) {
    openModal(); // Open modal when user is not authenticated
    return <Navigate to="/" />;
  }

  if (isAdmin && user.role !== "admin") {
    openModal(); // Open modal when admin is not authenticated
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
