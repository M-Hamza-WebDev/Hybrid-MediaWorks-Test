import React from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/products/ProductCard";

const ProductDashboard = () => {
  return (
    <div>
      <NavLink
        to="/cart"
        className="flex justify-center items-center  p-2 bg-white  rounded-[99px] w-full md:max-w-[156.67px] max-w-[140px] md:h-[56px] h-[46px] ml-auto"
      >
        <img src="/cart.svg" alt="Cart Icon" className="  object-cover mr-4" />
        <span className="text-[#09090A]">My Cart</span>
      </NavLink>
      <div className="md:flex my-6">
        <img
          src="/Essential-Items.png"
          alt="Essential Items"
          className=" md:w-[68%] md:h-full h-[200px] rounded-3xl md:mr-6 md:mb-0 mb-6  "
        />
        <img
          src="/50-percent-off.png"
          alt="50 percent off"
          className="md:w-[30%]  "
        />
      </div>

      <ProductCard />
    </div>
  );
};

export default ProductDashboard;
