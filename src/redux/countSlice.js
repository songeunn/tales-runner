import { createSlice } from "@reduxjs/toolkit";

const COUNT_LIST = "COUNT_LIST";

const initialState = JSON.parse(localStorage.getItem(COUNT_LIST))
  ? JSON.parse(localStorage.getItem(COUNT_LIST))
  : [];

const countSlice = createSlice({
  name: "count",
  // initialState: [],
  initialState: initialState,
  reducers: {
    saveCount: (state, action) => {
      state = action.payload;
      return state;
    },
    upCount: (state, action) => {
      const { id, completeCount } = action.payload;
      const targetItem = state.find((item) => item.id === id);
      if (targetItem) {
        targetItem.done += 1;
        if (targetItem.done >= completeCount) {
          targetItem.done = completeCount;
        }
      }
      return state;
    },
    downCount: (state, action) => {
      const targetItem = state.find((item) => item.id === action.payload);
      if (targetItem) {
        targetItem.done -= 1;
        if (targetItem.done < 0) {
          targetItem.done = 0;
        }
      }
      return state;
    },
    upPercent: (state, action) => {
      const { id, completeCount } = action.payload;
      const targetItem = state.find((item) => item.id === id);
      if (targetItem) {
        targetItem.percent = targetItem.percent + 100 / completeCount;
        if (targetItem.percent > 99.9) {
          targetItem.percent = 100;
        }
      }
      return state;
    },
    downPercent: (state, action) => {
      const { id, completeCount } = action.payload;
      const targetItem = state.find((item) => item.id === id);
      if (targetItem) {
        targetItem.percent = targetItem.percent - 100 / completeCount;
        if (targetItem.percent < 0) {
          targetItem.percent = 0;
        }
      }
      return state;
    },
    resetCount: (state, action) => {
      const targetItem = state.find((item) => item.id === action.payload);
      if (targetItem) {
        targetItem.done = 0;
        targetItem.percent = 0;
      }
      return state;
    },
  },
});

export const {
  saveCount,
  upCount,
  downCount,
  upPercent,
  downPercent,
  resetCount,
} = countSlice.actions;

export default countSlice.reducer;
