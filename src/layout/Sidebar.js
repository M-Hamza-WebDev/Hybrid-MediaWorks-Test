import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve the user from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedInUser);
  }, []);
  return (
    <>
      <div className="h-screen bg-white w-[266px] xl:flex hidden xl:flex-col border-r border-[#EFEFEF] p-6">
        {/* User Info Section */}

        <div className="flex items-center">
          <img src="/user.svg" alt="User" className="  object-cover mr-3" />
          <div>
            <h3 className="font-bold text-[#09090A]">
              {user?.username || "Mark Wood"}
            </h3>
            <p className="text-[#1F1F22] text-sm break-all">
              {user?.email || "marki@demo.com"}
            </p>
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
          to="/signin"
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
      <svg
        className={`xl:hidden block  ${
          location.pathname.includes("/product")
            ? "md:top-11 top-7 md:left-10 left-4"
            : "md:top-[68px] top-[52px] right-10"
        } absolute`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </>
  );
};

export default Sidebar;
