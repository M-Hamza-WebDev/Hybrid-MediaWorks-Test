import { createSlice } from '@reduxjs/toolkit';

// Function to get the current user's cart key in localStorage
const getCartKey = (username) => `cart_${username}`;

// Function to load the cart from localStorage for a specific user
const loadCartFromLocalStorage = (username) => {
  const cartKey = getCartKey(username);
  return JSON.parse(localStorage.getItem(cartKey)) || [];
};

// Function to save the cart to localStorage for a specific user
const saveCartToLocalStorage = (username, cartItems) => {
  const cartKey = getCartKey(username);
  localStorage.setItem(cartKey, JSON.stringify(cartItems));
};

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
  currentUser: null, // Track the current logged-in user
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
      const cartItems = loadCartFromLocalStorage(action.payload);
      state.cartItems = cartItems;
      state.totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
      state.totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    addToCart(state, action) {
      if (!state.currentUser) return; // Prevent adding items without a logged-in user
      const item = action.payload;
      const existingItem = state.cartItems.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;

      saveCartToLocalStorage(state.currentUser, state.cartItems); // Save cart for this user
    },

    removeFromCart(state, action) {
      if (!state.currentUser) return;
      const itemId = action.payload;
      const existingItem = state.cartItems.find(item => item.id === itemId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
      }

      saveCartToLocalStorage(state.currentUser, state.cartItems); // Save cart for this user
    },

    increaseQuantity(state, action) {
      if (!state.currentUser) return;
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }

      saveCartToLocalStorage(state.currentUser, state.cartItems); // Save cart for this user
    },

    decreaseQuantity(state, action) {
      if (!state.currentUser) return;
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }

      saveCartToLocalStorage(state.currentUser, state.cartItems); // Save cart for this user
    },

    clearCart(state) {
      if (!state.currentUser) return;
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      saveCartToLocalStorage(state.currentUser, state.cartItems); // Clear cart for this user
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, setUser } = cartSlice.actions;

export default cartSlice.reducer;
