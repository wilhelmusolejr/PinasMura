// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  user: {
    name: "",
    address: "",
  },
  checkOutStatus: "not_started",
  loading: true,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      let item = {
        id: action.payload.id,
        quantity: 1,
      };

      state.items.push(item);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      let item = state.items.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decreaseQuantity: (state, action) => {
      let item = state.items.find((item) => item.id === action.payload.id);
      item.quantity--;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  setCartItems,
  setLoading,
} = cartSlice.actions;
export default cartSlice.reducer;
