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
  console.log(response.data);
  return response;
};

export const addToWishlist = createAsyncThunk(
  "wishlist/addToWishlist",
  async (item, { rejectWithValue }) => {
    try {
      console.log(item);
      const userId = await getUserId();
      console.log(userId);

      const response = await getWishlist(userId);
      const wishlistData = response.data ? response.data : {};
      const existingEntry = Object.entries(wishlistData).find(
        ([_, value]) =>
          value.productId === item.productId &&
          (value.variantId || null) === (item.variantId || null)
      );
      if (existingEntry) {
        const [key, _] = existingEntry;
        console.log(key);
        await axios.delete(`${DB_URL}/users/${userId}/wishlist/${key}.json`);
        return item;
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
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getWishlist(userId);
      const wishlist = response.data
        ? Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }))
        : [];
      console.log(wishlist);
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
          // Если товар уже есть — удаляем его из локального состояния
          state.wishlist.splice(index, 1);
        } else {
          // Если товара нет — добавляем его
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

export const {} = wishlistSlice.actions;
export default wishlistSlice.reducer;
