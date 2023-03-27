import { configureStore } from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";

export const store = configureStore({
  reducer: {
    title: titleReducer,
  },
});
