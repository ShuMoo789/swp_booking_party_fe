import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import authenSlice from "./features/authenSlice";
import bookingSlice from "./features/bookingSlice";

const rootReducer = combineReducers({
  booking: bookingSlice,
  authen: authenSlice,
  // total: totalPriceSlice,
});

export default rootReducer;
