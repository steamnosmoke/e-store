import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (category, { rejectWithValue }) => {
    try {
      const {data} = await axios.get(`https://6803741a0a99cb7408ec07d0.mockapi.io/products?${category ? `filter=category&category=${category}` : ''}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products:[],
    filters:[],
    category: "",
    status:'loading',
    error:null,
  },
  reducers: {
    chooseCategory:(state,action)=>{
      state.category = action.payload;
    }
    
  },
  extraReducers: (builder) => {
    builder
      // Обработка fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      
  },
});

export const { chooseCategory } = productSlice.actions;
export default productSlice.reducer;
