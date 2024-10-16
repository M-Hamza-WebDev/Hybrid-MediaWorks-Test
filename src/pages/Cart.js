import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
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

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>Unit Price: ${item.price}</p> {/* Display unit price */}
                <p>Quantity: {item.quantity}</p>
                <p>
                  Total Price for this Product: $
                  {(item.price * item.quantity).toFixed(2)}
                </p>{" "}
                {/* Display total price for this product */}
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
          <button onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
