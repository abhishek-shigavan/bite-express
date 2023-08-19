import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log(action.payload)
    },
    clearCart: (state) => {
      state.cartItems.length = 0
    },
  },
});

export const { addItemToCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
