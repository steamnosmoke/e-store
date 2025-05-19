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
      const productsData = Object.values(data);
      let newProducts = [];
      productsData.map((product, prodId) =>
        product.variants.map((variant, varId) => {
          newProducts.push({
            ...product,
            ...variant,
            objectId: String(prodId) + "x" + String(varId),
            variantId: varId,
          });
        })
      );
      return newProducts;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    categoryHome: "Phones",
    products: [],
    statusHome: "loading",
    statusProduct: "loading",
    errorHome: null,
    errorProduct: null,
    product: {},
    productID: "",
    color: "",
    memory: "",
  },
  reducers: {
    chooseCategory: (state, action) => {
      state.categoryHome =
        action.payload.charAt(0).toUpperCase() + action.payload.slice(1);
    },
    setProductId: (state, action) => {
      state.productID = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setMemory: (state, action) => {
      state.memory = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
      state.color = action.payload.color;
      state.memory = action.payload.memory;
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
      });
  },
});

export const { chooseCategory, setProductId, setColor, setMemory, setProduct } =
  productSlice.actions;
export default productSlice.reducer;
