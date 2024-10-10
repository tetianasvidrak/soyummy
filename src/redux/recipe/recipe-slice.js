import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getRecipe } from "./recipeOperations";

const initialState = {
  recipe: null,
  loading: "idle", // 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRecipe.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getRecipe.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.recipe = action.payload.data.recipe;
      state.error = null;
    });
    builder.addCase(getRecipe.rejected, (state, action) => {
      state.loading = "failed";
      state.recipe = action.payload.error;
    });
  },
});

const persistConfig = {
  key: "recipe",
  storage,
};

export const persistedRecipeReducer = persistReducer(
  persistConfig,
  recipeSlice.reducer
);
