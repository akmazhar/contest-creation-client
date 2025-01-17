import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    return <progress className="progress loading loading-spinner text-accent"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"
  state={location.pathname}
  
   />;
};

export default PrivetRoute;