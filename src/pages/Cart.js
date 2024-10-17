import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  // clearCart,
} from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };

  return (
    <div className="bg-white w-full rounded-3xl p-6">
      {cartItems.length === 0 ? (
        <div className="flex items-center">
          <img
            src="/back-arrow.svg"
            alt="Back Arrow"
            onClick={() => navigate("/products")}
            className="cursor-pointer"
          />
          <p className="font-semibold text-[22px] text-[#1E1E1E]">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <>
          <div>
            <div className="flex items-center pb-6 border-b border-[#D0CFCF] max-w-[608px] w-full mb-6">
              <img
                src="/back-arrow.svg"
                alt="Back Arrow"
                onClick={() => navigate("/products")}
                className="cursor-pointer"
              />
              <h2 className="font-semibold text-[22px] text-[#1E1E1E]">
                Shopping Continue
              </h2>
            </div>
            <h2 className="text-[20px] font-bold text-black">Shopping Cart</h2>
            <p className="text-sm text-[#1E1E1E] mb-6">
              You have {totalQuantity} item in your cart
            </p>
            <div className=" md:space-y-6 space-y-4">
              {cartItems.map((item) => (
                <div className="md:flex md:justify-between border border-[#EDEDED] rounded-2xl p-6 ">
                  <div key={item.id} className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-[120px] h-[120px] mr-[18px]"
                    />
                    <div>
                      <h3 className="text-[20px] font-bold text-black ">
                        {item.name}
                      </h3>
                      <p className="text-[17px] text-black mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center md:justify-normal justify-center md:mt-0 mt-4">
                    <div className="flex items-center">
                      <p className="text-[22px] text-[#393939] font-semibold mr-[6px]">
                        {item.quantity}
                      </p>
                      <div>
                        <img
                          src="/increase.svg"
                          alt="increase"
                          className="cursor-pointer"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        />
                        <img
                          src="/increase.svg"
                          alt="decrease"
                          className="rotate-180 mt-1 cursor-pointer"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        />
                      </div>
                    </div>
                    <h3 className="text-black text-[20px] font-bold ml-[44px] mr-[34px]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </h3>
                    <img
                      src="/delete.svg"
                      alt="delete"
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>Unit Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Total Price for this Product: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>{" "}
                <div>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </button>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>Total Quantity: {totalQuantity}</p>
          <p>Total Cart Price: ${totalPrice.toFixed(2)}</p>
          <button onClick={handleClearCart}>Clear Cart</button> */}
        </>
      )}
    </div>
  );
};

export default Cart;
