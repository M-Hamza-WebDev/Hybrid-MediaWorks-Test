import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { NavLink, useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", price: 100, description: "A great product" },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "Another great product",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    description: "Yet another great product",
  },
];

const ProductDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // Dispatch action to add the product to the cart
    dispatch(addToCart(product));
    alert(`${product.name} has been added to your cart.`);
  };
  const goToCart = () => {
    navigate("/cart"); // Navigate to Cart page
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
      <div className="flex">
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
      <h1>Product Dashboard</h1>
      <button onClick={goToCart}>Go to Cart</button>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
