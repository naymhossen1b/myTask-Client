/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();

  const location = useLocation();

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivateRoute;
