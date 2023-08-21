import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantSlice from "./restaurantSlice";

const appStore = configureStore({
    reducer: {
        cart: cartSlice,
        restaurant: restaurantSlice,
    }
})

export default appStore