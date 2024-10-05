import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        name: action.payload,
      };
    },
  },
});

export const { setFilter } = slice.actions;

export const selectFilter = (state) => state.filters.name;

export default slice.reducer;
