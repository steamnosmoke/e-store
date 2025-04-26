import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (categoryHome, { rejectWithValue }) => {
    try {
      const url = `https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/products.json${
        categoryHome ? `?orderBy="category"&equalTo="${categoryHome}"` : ""
      }`;
      const { data } = await axios.get(url);
      return Object.values(data);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (productID, { rejectWithValue }) => {
    try {
      const url = `https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/products/${productID-1}.json`;
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);


export const productSlice = createSlice({
  name: "product",
  initialState: {
    categoryHome: "",
    products: [],
    statusHome: "loading",
    statusProduct: "loading",
    errorHome: null,
    errorProduct: null,
    product: {},
    productID: "",
    color: 0,
    memory: 0,
  },
  reducers: {
    chooseCategory: (state, action) => {
      state.categoryHome =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
    },
    setProductId: (state, action) => {
      state.productID = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setMemory: (state, action) => {
      state.memory = action.payload;
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
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.statusHome = "failed";
        state.errorHome = action.payload;
      })
      // Обработка fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.statusProduct = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.statusProduct = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.statusProduct = "failed";
        state.errorProduct = action.payload;
      });
  },
});

export const { chooseCategory, setProductId, setProduct, setColor, setMemory } =
  productSlice.actions;
export default productSlice.reducer;
