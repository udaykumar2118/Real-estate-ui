import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // 🔐 later connect real auth

  if (!isAuthenticated) {
    return <Navigate to="/contact" replace />;
  }

  return children;
};

export default ProtectedRoute;
