import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ProductDashboard from "../pages/ProductDashboard";
import Cart from "../pages/Cart";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "../layout/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/products"
        element={
          <Layout>
            <PrivateRoute>
              <ProductDashboard />
            </PrivateRoute>
          </Layout>
        }
      />
      <Route
        path="/cart"
        element={
          <Layout>
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
