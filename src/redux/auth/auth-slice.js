import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { register, login } from "./authOperations";

const initialState = {
  user: null,
  token: null,
  loading: "idle", // 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.loading = "succeeded";
      state.error = null;
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload.error;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      state.loading = "succeeded";
      state.error = null;
      state.isLoggedIn = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload.error;
    }),
      builder.addCase(userUpdateData.pending, (state) => {
        state.loading = "pending";
      });
    builder.addCase(userUpdateData.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.loading = "succeeded";
      state.error = null;
      state.isLoggedIn = true;
    });
    builder.addCase(userUpdateData.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload.error;
    });
    builder.addCase(addToFavorites.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(addToFavorites.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        favorites: action.payload.data.user.favorites,
      };
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(addToFavorites.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload.error;
    });
    builder.addCase(deleteFromFavorites.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteFromFavorites.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        favorites: action.payload.data.user.favorites,
      };

      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(deleteFromFavorites.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload.error;
    });
  },
});

const persistConfig = {
  key: "authentication",
  storage,
};

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
