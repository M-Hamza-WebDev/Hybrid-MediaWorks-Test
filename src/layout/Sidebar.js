import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white w-[266px] flex flex-col border-r border-[#EFEFEF] p-6">
      {/* User Info Section */}

      <div className="flex items-center">
        <img src="/user.svg" alt="User" className="  object-cover mr-3" />
        <div>
          <h3 className="font-bold text-[#09090A]">Mark Wood</h3>
          <p className="text-[#1F1F22] text-sm">marki@demo.com</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-[44px]">
        <NavLink
          to="/dashboard"
          className="flex items-center  p-4 bg-[#89089F]  rounded-lg mb-6"
        >
          <img
            src="/dashboard.svg"
            alt="Dashboard Icon"
            className="  object-cover mr-4"
          />
          <span className="text-white">Dashboard</span>
        </NavLink>

        <NavLink
          to="/products"
          className="flex items-center  p-4 bg-white  rounded-lg mb-6"
        >
          <img
            src="/products.svg"
            alt="Products Icon"
            className="  object-cover mr-4"
          />
          <span className="text-[#09090A]">Products</span>
        </NavLink>

        <NavLink
          to="/notifications"
          className="flex items-center  p-4 bg-white  rounded-lg mb-6"
        >
          <img
            src="/notifications.svg"
            alt="Notifications Icon"
            className="  object-cover mr-4"
          />
          <span className="text-[#09090A]">Notifications</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className="flex items-center  p-4 bg-white  rounded-lg mb-6"
        >
          <img
            src="/analytics.svg"
            alt="Analytics Icon"
            className="  object-cover mr-4"
          />
          <span className="text-[#09090A]">Analytics</span>
        </NavLink>

        <NavLink
          to="/inventory"
          className="flex items-center  p-4 bg-white  rounded-lg "
        >
          <img
            src="/inventory.svg"
            alt="Inventory Icon"
            className="  object-cover mr-4"
          />
          <span className="text-[#09090A]">Inventory</span>
        </NavLink>
      </nav>

      {/* Logout Button */}
      <NavLink
        to="/logout"
        className="flex items-center  p-4 bg-white  rounded-lg "
      >
        <img
          src="/logout.svg"
          alt="Logout Icon"
          className="  object-cover mr-4"
        />
        <span className="text-[#09090A]">Logout</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
