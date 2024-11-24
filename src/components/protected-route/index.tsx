// src/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useGoogleAuth } from "../../context/auth";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { user } = useGoogleAuth();

  return user ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
