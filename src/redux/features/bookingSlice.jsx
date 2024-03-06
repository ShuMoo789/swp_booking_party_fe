// dùng để chưa thônh tin user

import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    selectPackage: (state, action) => {
      state.package = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const { selectPackage } = bookingSlice.actions;

export default bookingSlice.reducer;
