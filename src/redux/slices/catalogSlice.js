import { createSlice } from "@reduxjs/toolkit";

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    isFiltersOpened: true,
    isFiltersOpened: true,
    isFiltersOpened: true,
    isFiltersOpened: true,
    isFiltersOpened: true,
    category: "",
  },
  reducers: {
    setFilterOpened: (state) => {
      state.isFiltersOpened = !state.isFiltersOpened;
    },
  },
});

export const { setFilterOpened } = catalogSlice.actions;
export default catalogSlice.reducer;
