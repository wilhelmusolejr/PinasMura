// src/redux/cartSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../config";

const user_id = 1;

const initialState = {
  items: loadFromLocalStorage() || [],
  order_items: [],
  total: 0,
  user: {
    name: "",
    address: "",
  },
  checkOutStatus: "not_started",
  loading: true,
  error: null,
  order_number: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.items = [...state.items, ...action.payload.product];
    },

    addItem: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!itemExists) {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];

        // Save updated state to localStorage
        saveToLocalStorage(state.items);
      }
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
    submitOrder: (state, action) => {
      console.log(action.payload);

      state.loading = false;
      state.checkOutStatus = "success";
      state.order_number = action.payload.id;
      state.order_items = state.items;
      state.items = [];

      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCartAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    builder
      .addCase(submitOrderAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitOrderAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.checkOutStatus = "success";
        state.order_number = action.payload.id;
      })
      .addCase(submitOrderAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",

  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user_id,
          product_id: data.id,
          quantity: 1,
        }),
      });

      const product = await response.json();

      return product; // Return the products data if the request is successful
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message); // Pass the error message to the rejected case
    }
  },
);

export const submitOrderAsync = createAsyncThunk(
  "cart/submitOrderAsync",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/order/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, user_id: user_id }),
      });

      const order = await response.json();

      console.log(order);

      return order;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);

function loadFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : null;
}

function saveToLocalStorage(state) {
  localStorage.setItem("cart", JSON.stringify(state));
}

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  setCartItems,
  submitOrder,
  setLoading,
} = cartSlice.actions;
export default cartSlice.reducer;
