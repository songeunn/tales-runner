import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";
import countReducer from "./countSlice";

export const store = configureStore({
  reducer: {
    title: titleReducer,
    count: countReducer,
  },
});
