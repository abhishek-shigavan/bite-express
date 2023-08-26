import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantSlice from "./restaurantSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
    user: userSlice,
  },
});

export default appStore;
