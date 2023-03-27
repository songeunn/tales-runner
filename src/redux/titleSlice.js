import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: [],
  reducers: {
    search: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { search } = titleSlice.actions;

export default titleSlice.reducer;
