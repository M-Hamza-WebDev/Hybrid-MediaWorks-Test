import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { NavLink } from "react-router-dom";

const products = [
  { id: 1, name: "SNEAKERS", price: 65.0, description: "Running" },
  {
    id: 2,
    name: "SNEAKERS",
    price: 65.0,
    description: "Running",
  },
  {
    id: 3,
    name: "SNEAKERS",
    price: 65.0,
    description: "Running",
  },
  {
    id: 4,
    name: "SNEAKERS",
    price: 65.0,
    description: "Running",
  },
  {
    id: 5,
    name: "SNEAKERS",
    price: 65.0,
    description: "Running",
  },
];

const ProductDashboard = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch action to add the product to the cart
    dispatch(addToCart(product));
    alert(`${product.name} has been added to your cart.`);
  };

  return (
    <div>
      <NavLink
        to="/cart"
        className="flex justify-center items-center  p-2 bg-white  rounded-[99px] w-full max-w-[156.67px] h-[56px] ml-auto"
      >
        <img src="/cart.svg" alt="Cart Icon" className="  object-cover mr-4" />
        <span className="text-[#09090A]">My Cart</span>
      </NavLink>
      <div className="flex my-6">
        <img
          src="/Essential-Items.png"
          alt="Essential Items"
          className=" w-[68%] rounded-3xl mr-6 "
        />
        <img
          src="/50-percent-off.png"
          alt="50 percent off"
          className="w-[30%] "
        />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="max-w-[295.6px] bg-white rounded-xl">
            <img
              src="/product-1.png"
              alt="Product 1"
              className="bg-white rounded-t-xl py-[14px] px-[22px]"
            />
            <div className="flex ">
              <button
                className="text-[13px] text-center font-bold text-white bg-[#111111] py-[17px] w-full"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
              <button
                className="text-[13px] text-center font-bold text-white bg-[#89089F] py-[17px] w-full"
                onClick={() => handleAddToCart(product)}
              >
                QUICK VIEW
              </button>
            </div>
            <div className="px-3 py-4 rounded-b-xl">
              <div className="pb-3 border-b border-[#C0C0C0] flex justify-between items-center">
                <h2 className="text-[20px] text-black font-bold">
                  {product.name}
                </h2>
                <div className="flex items-center ">
                  <img
                    src="/favourite.svg"
                    alt="Favourite Product"
                    className=""
                  />
                  <span className="text-[20px] text-black font-bold ml-2">
                    ${product.price}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-[17.41px] text-black">
                  {product.description}
                </span>
                <img src="/ratings.svg" alt="Ratings" className="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
