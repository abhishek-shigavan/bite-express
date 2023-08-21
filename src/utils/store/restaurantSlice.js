import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant details",
  initialState: {
    restaurantMeta: [],
  },
  reducers: {
    addRestaurantInfo: (state, action) => {
      state.restaurantMeta.push(action.payload);
    },
    clearRestaurantInfo: (state) => {
      state.restaurantMeta.length = 0
    },
  },
});

export const { addRestaurantInfo, clearRestaurantInfo } = restaurantSlice.actions;
export default restaurantSlice.reducer;
