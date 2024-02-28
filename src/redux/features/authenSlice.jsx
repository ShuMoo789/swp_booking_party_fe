// dùng để chưa thônh tin user

import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const authenSlice = createSlice({
  name: "authen",
  initialState,
  reducers: {
    login: (store, action) => {
      const userData = action.payload;
      store = userData;
      return store;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authenSlice.actions;

export default authenSlice.reducer;
