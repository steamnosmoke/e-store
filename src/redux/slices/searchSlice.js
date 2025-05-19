import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    Searching: (state, action) => {
      state.value = action.payload;
    },

    ClearValue: (state) => {
      state.value = "";
    },
  },
});

export const { Searching, ClearValue } = searchSlice.actions;
export default searchSlice.reducer;
