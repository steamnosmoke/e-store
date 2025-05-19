import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import bcrypt from "bcryptjs";

// 📦 Firebase URL
const DB_URL =
  "https://e-store-4ca3a-default-rtdb.europe-west1.firebasedatabase.app/users.json";

// 📥 Получаем user из localStorage при старте
const getUserFromStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : {};
  } catch (e) {
    return {};
  }
};

// 🔐 Регистрация
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { password, ...rest } = userData;
      const passwordHash = bcrypt.hashSync(password, 10);
      const newUser = { ...rest, passwordHash };

      const response = await axios.post(DB_URL, newUser);

      return { ...newUser, firebaseId: response.data.name };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 🔍 Авторизация
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const url = `${DB_URL}?orderBy="email"&equalTo="${encodeURIComponent(
        email
      )}"`;
      const response = await axios.get(url);
      const data = response.data;

      if (!data || Object.keys(data).length === 0) {
        return rejectWithValue("Пользователь не найден");
      }

      const [firebaseId, userData] = Object.entries(data)[0];

      const passwordMatch = bcrypt.compareSync(password, userData.passwordHash);
      if (!passwordMatch) {
        return rejectWithValue("Неверный пароль");
      }

      return { ...userData, firebaseId };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// 🔧 State
const initialState = {
  user: getUserFromStorage(),
  email: "",
  password: "",
  confirm: "",
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirm: (state, action) => {
      state.confirm = action.payload;
    },
    LogOut: (state) => {
      state.user = {};
      state.email = "";
      state.password = "";
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("user"); // 🧹 Очистка
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload)); // 💾 Сохраняем
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload)); // 💾 Сохраняем
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload;
        }
      );
  },
});

export const { setEmail, setPassword, setConfirm, setUser, LogOut } =
  authSlice.actions;
export default authSlice.reducer;
