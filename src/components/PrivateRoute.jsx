import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; 

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // Check user context

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
