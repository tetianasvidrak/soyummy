import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoriteRecipes, ownRecipe } from "./recipesOperations";

const initialState = {
  recipes: null,
  token: null,
  loading: "idle", // 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null,
  isLoggedIn: false,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(ownRecipe.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(ownRecipe.fulfilled, (state, action) => {
      state.recipes = action.payload.data.data;
      state.loading = "succeeded";
      state.error = null;
      state.isLoggedIn = true;
    });
    builder.addCase(ownRecipe.rejected, (state, action) => {
      state.loading = "failed";
      state.recipes = action.payload.error;
    });
    builder.addCase(favoriteRecipes.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(favoriteRecipes.fulfilled, (state, action) => {
      state.recipes = action.payload.data.recipe;
      state.loading = "succeeded";
      state.error = null;
      state.isLoggedIn = true;
    });
    builder.addCase(favoriteRecipes.rejected, (state, action) => {
      state.loading = "failed";
      state.recipes = action.payload.error;
    });
  },
});

const persistConfig = {
  key: "recipes",
  storage,
};

export const persistedRecipesReducer = persistReducer(
  persistConfig,
  recipesSlice.reducer
);
