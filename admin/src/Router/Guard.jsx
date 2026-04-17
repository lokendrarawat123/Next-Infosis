import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Guard = ({ children }) => {
  const { isAuth, user } = useSelector((state) => state.user);
  if (!isAuth) return <Navigate to="/" replace />;
  if (user?.role === "manager") return <Navigate to="/manager/dashboard" replace />;
  return children;
};
