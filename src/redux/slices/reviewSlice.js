import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const DB_URL =
  "https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/products";

// Отправка отзыва (оставляем как есть)
export const postComment = createAsyncThunk(
  "review/postComment",
  async (review, { rejectWithValue }) => {
    try {
      const { productId, ...comment } = review;
      const response = await axios.post(
        `${DB_URL}/${productId - 1}/reviews.json`,
        comment
      );
      return { id: response.data.name, ...comment }; // Firebase возвращает ID в response.data.name
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Получение отзывов
export const fetchReviews = createAsyncThunk(
  "review/fetchReviews",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${DB_URL}/${productId - 1}/reviews.json`
      );
      return response.data
        ? Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }))
        : [];
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  comment: "",
  reviews: [],
  status: "idle",
  error: null,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.comment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Обработка отправки отзыва
      .addCase(postComment.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.status = "succeded";

        // Добавляем новый отзыв в массив (если нужно)
        state.reviews.push({
          id: action.payload.id, // ID из Firebase
          ...action.payload, // Остальные данные отзыва
        });
      })
      .addCase(postComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Ошибка при отправке отзыва";
      })

      // Можно добавить обработку для получения отзывов (fetchReviews)
      .addCase(fetchReviews.pending, (state) => {
        state.status = "loading";

        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "succeded";

        state.reviews = action.payload; // Обновляем весь список
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.payload || "Ошибка при загрузке отзывов";
      });
  },
});

export const { setComment } = reviewSlice.actions;
export default reviewSlice.reducer;
