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

    updateInfo: (state, action) => {
      state.information = action.payload;
    },

    selectService: (state, action) => {
      console.log(action.payload);
      if (!state.services) {
        state.services = [];
      }

      const index = state.services.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);

      if (index >= 0) {
        state.services[index] = action.payload;
      } else {
        state.services.push(action.payload);
      }

      return state;
    },

    deleteService: (state, action) => {
      state.services.splice(action.payload, 1);
    },
    reset: (state, action) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  reset,
  selectPackage,
  updateInfo,
  selectService,
  deleteService,
} = bookingSlice.actions;

export default bookingSlice.reducer;
