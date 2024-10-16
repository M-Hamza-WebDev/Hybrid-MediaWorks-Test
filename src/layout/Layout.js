// src/components/Layout.js

import React from "react";
import Sidebar from "./Sidebar"; // Import your Sidebar

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        {children}  {/* Content from each route */}
      </div>
    </div>
  );
};

export default Layout;
