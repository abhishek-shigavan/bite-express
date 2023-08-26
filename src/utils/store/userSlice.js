import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    addressDetails: [],
  },
  reducers: {
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    addAddressDetails: (state, action) => {
      state.addressDetails.push(action.payload);
    },
    removeAddressDetails: (state, action) => {
      state.addressDetails.splice(action.payload, 1)
    },
    updateAddressDetails: (state, action) => {
      state.addressDetails[action.payload.index] = action.payload.item;
    },
  },
});

export const { addUserDetails, addAddressDetails, removeAddressDetails, updateAddressDetails } = userSlice.actions;
export default userSlice.reducer;
