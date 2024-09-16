import { createSlice } from "@reduxjs/toolkit";

export const filterSelect = (state) => state.filters.name;

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

export default slice.reducer;
