import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const DB_URL =
  "https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app";

const getUserId = () => {
  return JSON.parse(localStorage.getItem("user")).firebaseId;
};
const getOrders = async (userId) => {
  const url = `${DB_URL}/users/${userId}/orders.json`;
  const response = await axios.get(url);
  return response;
};

export const addToOrders = createAsyncThunk(
  "orders/addToOrders",
  async (cart, { rejectWithValue }) => {
    try {
      const userId = await getUserId();
      const url = `${DB_URL}/users/${userId}/orders.json`;
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");
      const date = `${year}-${month}-${day}`;
      const newOrder = {
        items: { ...cart },
        totalPriceWithDiscount: 79,
        totalPriceWithoutDiscount: 0,
        totalDiscount: 0,
        value: 0,
        date,
        status: "assembling",
      };
      cart.map((el) => {
        newOrder.totalPriceWithDiscount += el.total;
        newOrder.totalPriceWithoutDiscount += el.subTotal;
        newOrder.totalDiscount += el.discount;
        newOrder.value += el.count;
      });
      await axios.post(url, newOrder);
      return newOrder;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const fetchOrders = createAsyncThunk(
  "orders/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const userId = getUserId();
      const response = await getOrders(userId);
      const orders = response.data
        ? Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }))
        : [];
      return orders;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  orders: [],
  status: "idle",
  error: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Add to orders
      .addCase(addToOrders.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addToOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.push(action.payload);
      })
      .addCase(addToOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка добавления товара";
      })

      //Fetch orders
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка при загрузке корзины";
      });
  },
});

export const { setActiveItem } = ordersSlice.actions;
export default ordersSlice.reducer;
