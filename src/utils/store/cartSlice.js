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
      state.cartItems.splice(action.payload, 1)
    },
    updateItemQuantity: (state, action) => {
      const updatedItem = {
        ...action.payload.item,
        quantity: action.payload.quantity
      }

      state.cartItems[action.payload.itemIndex] = updatedItem
    },
    clearCart: (state) => {
      state.cartItems.length = 0
    },
  },
});

export const { addItemToCart, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
