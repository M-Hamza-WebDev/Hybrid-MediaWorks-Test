import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-100 w-[266px] flex flex-col border-r border-[#EFEFEF] p-6">
      {/* User Info Section */}

      <div className="flex items-center">
        <img src="/user.svg" alt="User" className="  object-cover mr-3" />
        <div>
          <h3 className="font-bold text-[#09090A]">Mark Wood</h3>
          <p className="text-[#1F1F22] text-sm">marki@demo.com</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-8 space-y-6">
        <NavLink
          to="/dashboard"
          className="flex items-center space-x-4 py-3 px-4 bg-purple-600 text-white rounded-md"
          activeClassName="bg-purple-700"
        >
          <span className="material-icons">dashboard</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/products"
          className="flex items-center space-x-4 py-3 px-4 text-gray-600 hover:bg-gray-200 rounded-md"
          activeClassName="bg-purple-600 text-white"
        >
          <span className="material-icons">inventory_2</span>
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/notifications"
          className="flex items-center space-x-4 py-3 px-4 text-gray-600 hover:bg-gray-200 rounded-md"
          activeClassName="bg-purple-600 text-white"
        >
          <span className="material-icons">notifications</span>
          <span>Notifications</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className="flex items-center space-x-4 py-3 px-4 text-gray-600 hover:bg-gray-200 rounded-md"
          activeClassName="bg-purple-600 text-white"
        >
          <span className="material-icons">analytics</span>
          <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/inventory"
          className="flex items-center space-x-4 py-3 px-4 text-gray-600 hover:bg-gray-200 rounded-md"
          activeClassName="bg-purple-600 text-white"
        >
          <span className="material-icons">inventory</span>
          <span>Inventory</span>
        </NavLink>
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-6">
        <NavLink
          to="/logout"
          className="flex items-center space-x-4 py-3 px-4 text-gray-600 hover:bg-gray-200 rounded-md"
        >
          <span className="material-icons">logout</span>
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
