import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "catalog/fetchProducts",
  async (categoryCatalog, { rejectWithValue }) => {
    try {
      const url = `https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/products.json${
        categoryCatalog
          ? `?orderBy="category"&equalTo="${categoryCatalog}"`
          : ""
      }`;
      const { data } = await axios.get(url);
      return Object.values(data);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const fetchFilters = createAsyncThunk(
  "catalog/fetchFilters",
  async (categoryCatalog, { rejectWithValue }) => {
    try {
      const url = `https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/categories.json${
        categoryCatalog ? `?orderBy="name"&equalTo="${categoryCatalog}"` : ""
      }`;
      const { data } = await axios.get(url);
      return Object.values(data);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    isFiltersOpened: true,
    categoryCatalog: "",
    categories: [],
    products: [],
    statusCatalog: "loading",
    statusHome: "loading",
    errorCatalog: null,
    errorHome: null,
    count: "",
  },
  reducers: {
    setFilterOpened: (state) => {
      state.isFiltersOpened = !state.isFiltersOpened;
    },
    chooseCategory: (state, action) => {
      state.categoryCatalog =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.statusHome = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.statusHome = "succeeded";
        state.products = action.payload;
        const len = state.products.length;

      if (len === 0) {
        state.count = "Ничего не найдено";
      } else {
        const lastDigit = len % 10;
        const lastTwoDigits = len % 100;
        
        if (lastDigit === 1 && lastTwoDigits !== 11) {
          state.count = `${len} товар`;
        } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
          state.count = `${len} товара`;
        } else {
          state.count = `${len} товаров`;
        }
      }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.statusHome = "failed";
        state.errorHome = action.payload;
      })
      // Обработка fetchFilters
      .addCase(fetchFilters.pending, (state) => {
        state.statusCatalog = "loading";
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.statusCatalog = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.statusCatalog = "failed";
        state.errorCatalog = action.payload;
      });
  },
});

export const { setFilterOpened, chooseCategory, calcCount } = catalogSlice.actions;
export default catalogSlice.reducer;
