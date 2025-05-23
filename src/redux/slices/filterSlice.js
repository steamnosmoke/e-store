import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFilters = createAsyncThunk(
  "filters/fetchFilters",
  async (categoryFilters, { rejectWithValue }) => {
    try {
      const url = `https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/filters.json${
        categoryFilters
          ? `?orderBy="category"&equalTo="${categoryFilters}"`
          : ""
      }`;
      const { data } = await axios.get(url);
      const filtersData = Object.values(data);
      let newFilters = [];
      filtersData.map((product, prodId) =>
        product.variants.map((variant, varId) => {
          newFilters.push({
            ...product,
            ...variant,
            objectId: String(prodId) + "x" + String(varId),
            variantId: varId,
          });
        })
      );
      return newFilters;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);


export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    isFiltersOpened: true,
    categoryFilters: "Phones",
    categories: [],
    filters: [],
    statusFilters: "loading",
    statusHome: "loading",
    errorFilters: null,
    errorHome: null,
    count: 0,
  },
  reducers: {
    setFilterOpened: (state) => {
      state.isFiltersOpened = !state.isFiltersOpened;
    },
    chooseCategory: (state, action) => {
      state.categoryFilters =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка fetchFilters
      .addCase(fetchFilters.pending, (state) => {
        state.statusHome = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.statusHome = "succeeded";
        state.filters = action.payload;
        state.count = state.filters.length;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.statusHome = "failed";
        state.errorHome = action.payload;
      })
      // Обработка fetchFilters
      .addCase(fetchFilters.pending, (state) => {
        state.statusFilters = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.statusFilters = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.statusFilters = "failed";
        state.errorFilters = action.payload;
      });
  },
});

export const { setFilterOpened, chooseCategory, calcCount } = filtersSlice.actions;
export default filtersSlice.reducer;
