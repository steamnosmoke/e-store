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
      const productsData = Object.values(data);
      let newProducts = [];
      productsData.map((product, prodId) =>
        product.variants.map((variant, varId) => {
          return newProducts.push({
            ...product,
            ...variant,
            objectId: String(prodId) + "x" + String(varId),
            variantId: varId,
          });
        })
      );
      return newProducts || [];
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
      console.log(data[0].filters);
      return Object.values(data[0].filters);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
export const fetchProductsByFilters = createAsyncThunk(
  "catalog/fetchProductsByFilters",
  async (filters, { rejectWithValue }) => {
    try {
      const url = `https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/products.json${
        filters.categoryCatalog
          ? `?orderBy="category"&equalTo="${filters.categoryCatalog}"`
          : ""
      }`;
      const { data } = await axios.get(url);
      const productsData = Object.values(data);
      let newProducts = [];
      productsData.map((product, prodId) =>
        product.variants.map((variant, varId) => {
          return newProducts.push({
            ...product,
            ...variant,
            objectId: String(prodId) + "x" + String(varId),
            variantId: varId,
          });
        })
      );
      return newProducts || [];
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    isFiltersOpened: true,
    categoryCatalog: localStorage.getItem("categoryCatalog") || "",
    categories: [],
    products: [],
    filters: [],
    statusCatalog: "loading",
    errorCatalog: null,
    count: 0,
  },
  reducers: {
    setFilterOpened: (state) => {
      state.isFiltersOpened = !state.isFiltersOpened;
    },
    chooseCategory: (state, action) => {
      state.categoryCatalog =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
      action.payload ? localStorage.setItem("categoryCatalog", action.payload) : localStorage.removeItem("categoryCatalog")
    },
    chooseFilter: (state, action) => {
      const filter = action.payload;
      const title = filter.title;
      const value = filter.value;
      const filterItem = state.filters.find((fil) => fil.title === title);
      if (filterItem) {
        const filterIndex = state.filters.findIndex(
          (fil) => fil.title === title
        );
        const mas = state.filters[filterIndex].values;
        const finded = mas.find((val) => val === value);
        if (finded) {
          mas.splice(mas.indexOf(finded), 1);
        } else {
          mas.push(value);
        }
      } else {
        state.filters.push({ title, values: [value] });
      }
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
        state.count = state.products.length;
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

export const { setFilterOpened, chooseCategory, calcCount, chooseFilter } =
  catalogSlice.actions;
export default catalogSlice.reducer;
