import { createSlice } from "@reduxjs/toolkit";

export const filterSelect = (state) => state.filter.name;

const slice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { setFilter } = slice.actions;

export default slice.reducer;
