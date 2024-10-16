// src/components/Layout.js

import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex mx-auto container max-w-[1920px]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className=" flex-1 md:p-[40px] p-4 bg-gray-100 min-h-screen">
        {children} {/* Content from each route */}
      </div>
    </div>
  );
};

export default Layout;
