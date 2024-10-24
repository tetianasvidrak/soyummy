import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFavoriteRecipes } from "./recipes-api";

export const favoriteRecipes = createAsyncThunk(
  "recipes/favoriteRecipes",
  async (_, thunkAPI) => {
    try {
      const res = await getFavoriteRecipes();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);
