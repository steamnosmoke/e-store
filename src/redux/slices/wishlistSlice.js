import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const DB_URL =
  "https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app";

const getUserId = () => {
  return JSON.parse(localStorage.getItem("user")).firebaseId;
};
const getWishlist = async (userId) => {
  const url = `${DB_URL}/users/${userId}/wishlist.json`;
  const response = await axios.get(url);
  return response;
};

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (item, { rejectWithValue }) => {
    try {
      const userId = await getUserId();

      const response = await getWishlist(userId);
      const wishlistData = response.data ? response.data : {};
      const existingEntry = Object.entries(wishlistData).find(
        ([_, value]) =>
          value.productId === item.productId &&
          (value.variantId || null) === (item.variantId || null)
      );
      if (existingEntry) {
        const [key] = existingEntry;
        await axios.delete(`${DB_URL}/users/${userId}/wishlist/${key}.json`);
        return { ...item, id: key };
      } else {
        const postRes = await axios.post(
          `${DB_URL}/users/${userId}/wishlist.json`,
          item
        );
        return {
          ...item,
          id: postRes.data.name,
        };
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const userId = getUserId();
      const response = await getWishlist(userId);
      const wishlist = response.data
        ? Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }))
        : [];
      return wishlist;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  wishlist: [],
  status: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Add to wishlist
      .addCase(addToWishlist.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.wishlist.findIndex(
          (item) =>
            item.productId === action.payload.productId &&
            item.variantId === action.payload.variantId
        );

        if (index !== -1) {
          state.wishlist.splice(index, 1);
        } else {
          state.wishlist.push(action.payload);
        }
      })

      .addCase(addToWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка добавления товара";
      })

      //Fetch wishlist
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.wishlist = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка при загрузке корзины";
      });
  },
});

export default wishlistSlice.reducer;
