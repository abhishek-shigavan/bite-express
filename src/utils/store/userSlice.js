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
    updateAddressDetails: (state, action) => {
      state.addressDetails = action.payload;
    },
  },
});

export const { addUserDetails, addAddressDetails, updateAddressDetails } = userSlice.actions;
export default userSlice.reducer;
