import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductCard = () => {
  const products = [
    {
      id: 1,
      image: "/product-1.png",
      alt: "product 1",
      name: "SNEAKERS 1",
      price: 65.0,
      description: "Running",
    },
    {
      id: 2,
      image: "/product-2.png",
      alt: "product 2",
      name: "SNEAKERS 2",
      price: 65.0,
      description: "Running",
    },
    {
      id: 3,
      image: "/product-3.png",
      alt: "product 3",
      name: "SNEAKERS 3",
      price: 100.0,
      description: "Running",
    },
    {
      id: 4,
      image: "/product-4.png",
      alt: "product 4",
      name: "SNEAKERS 4",
      price: 420.0,
      description: "Running",
    },
    {
      id: 5,
      image: "/product-5.png",
      alt: "product 5",
      name: "SNEAKERS 5",
      price: 200.0,
      description: "Running",
    },
  ];
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatch action to add the product to the cart
    dispatch(addToCart(product));
    alert(`${product.name} has been added to your cart.`);
  };
  return (
    <div className="grid 2xl:grid-col-5  lg:grid-cols-4 md:grid-cols-3 lg:gap-6 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-[295.6px] bg-white rounded-xl md:mx-0 mx-auto"
        >
          <img
            src={product.image}
            alt={product.alt}
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
  );
};

export default ProductCard;
