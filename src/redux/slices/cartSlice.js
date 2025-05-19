import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const DB_URL =
  "https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app";

const getUserId = () => {
  return JSON.parse(localStorage.getItem("user")).firebaseId;
};
const getCart = async (userId) => {
  const url = `${DB_URL}/users/${userId}/cart.json`;
  const response = await axios.get(url);
  return response;
};
const calcNumbers = (product) => {
  const subtotal = product.count * product.variant.price;
  const discount = product.count * product.variant.discount;
  const total = subtotal - discount;
  return [subtotal, discount, total];
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (item, { rejectWithValue }) => {
    try {
    console.log(item)
      const userId = await getUserId();
      const response = await getCart(userId);
      const cartData = response.data ? response.data : {};

      const existingEntry = Object.entries(cartData).find(
        ([_, value]) =>
          value.productId === item.productId &&
          (value.variantId || null) === (item.variantId || null)
      );
      if (existingEntry) {
        const [key, value] = existingEntry;
        const updatedCount = value.count + 1;
        const updatedTotal =
          value.total + (value.variant.price - value.variant.discount);
        const updatedDiscount = updatedCount * value.variant.discount;
        const updatedSubTotal = updatedCount * value.variant.price;
        const updatedItem = {
          ...value,
          count: updatedCount,
          total: updatedTotal,
          discount: updatedDiscount,
          subTotal: updatedSubTotal,
        };
        await axios.patch(
          `${DB_URL}/users/${userId}/cart/${key}.json`,
          updatedItem
        );

        return updatedItem;
      } else {
        const total = item.variant.price - item.variant.discount;
        const discount = item.variant.discount;
        const subTotal = item.variant.price;
        const newItem = {
          ...item,
          count: 1,
          total,
          discount,
          subTotal,
        };
        const postRes = await axios.post(
          `${DB_URL}/users/${userId}/cart.json`,
          newItem
        );

        return {
          ...newItem,
          id: postRes.data.name,
        };
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (product, { rejectWithValue }) => {
    try {
      const userId = await getUserId();
      const url = `${DB_URL}/users/${userId}/cart/${product.id}.json`;
      await axios.delete(url);
      return { ...product, count: 0 };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const plusItem = createAsyncThunk(
  "cart/plus",
  async (product, { rejectWithValue }) => {
    try {
      const userId = await getUserId();
      const updatedCount = product.count + 1;

      const [subTotal, discount, total] = calcNumbers({
        ...product,
        count: updatedCount,
      });

      const updatedItem = {
        ...product,
        count: updatedCount,
        subTotal,
        discount,
        total,
      };

      await axios.patch(
        `${DB_URL}/users/${userId}/cart/${product.id}.json`,
        updatedItem
      );

      return updatedItem;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const minusItem = createAsyncThunk(
  "cart/minus",
  async (product, { rejectWithValue }) => {
    try {
      const userId = await getUserId();
      const url = `${DB_URL}/users/${userId}/cart/${product.id}.json`;
      if (product.count > 1) {
        const updatedCount = product.count - 1;
        const [subTotal, discount, total] = calcNumbers({...product, count: updatedCount});
        const updatedItem = {
          count: updatedCount,
          total,
          discount,
          subTotal,
        };

        await axios.patch(url, updatedItem);
        return { ...product, count: updatedCount };
      } else {
        await axios.delete(url);
        return { ...product, count: 0 };
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const fetchCart = createAsyncThunk(
  "cart/fetch",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await getCart(userId);
      const cart = response.data
        ? Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }))
        : [];
        console.log(cart)
      return cart;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  cart: [],
  status: "idle",
  error: null,
  activeItem: {},
  total: 0,
  discount: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Add to cart
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedItem = action.payload;
        const index = state.cart.findIndex(
          (item) => item.id === updatedItem.id
        );
        index !== -1
          ? (state.cart[index] = updatedItem)
          : state.cart.push(updatedItem);
        state.activeItem = updatedItem;

        state.subTotal += updatedItem.subTotal
        state.total += updatedItem.total
        state.discount += updatedItem.discount
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка добавления товара";
      })

      //Fetch cart
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка при загрузке корзины";
      })

      //Remove product
      .addCase(removeFromCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const removedItem = action.payload;
        const index = state.cart.findIndex(
          (item) => item.id === removedItem.id
        );
        if (index !== -1) {
          state.cart.splice(index, 1);
        }
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка при удалении товара";
      })

      //Plus product
      .addCase(plusItem.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(plusItem.fulfilled, (state, action) => {
        const updatedItem = action.payload;
        const index = state.cart.findIndex(
          (item) => item.id === updatedItem.id
        );
        state.cart[index] = updatedItem;
      })
      .addCase(plusItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка при добавлении товара";
      })

      //Minus product
      .addCase(minusItem.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(minusItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        const removedItem = action.payload;
        const index = state.cart.findIndex(
          (item) => item.id === removedItem.id
        );
        (index !== -1 && removedItem.count === 0) ||
        removedItem.count === undefined
          ? state.cart.splice(index, 1)
          : (state.cart[index].count = removedItem.count);
      })
      .addCase(minusItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка при удалении товара";
      });
  },
});

export const { setActiveItem } = cartSlice.actions;
export default cartSlice.reducer;
