import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFavoriteRecipes } from "./recipes-api";

export const ownRecipe = createAsyncThunk(
  "recipes/ownRecipe",
  async (userRecipe, thunkAPI) => {
    try {
      const res = await fetchOwnRecipe(userRecipe);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);

export const getMyRecipes = createAsyncThunk(
  "recipes/myRecipes",
  async (_, thunkAPI) => {
    try {
      const res = await getOwnRecipes();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);

export const deleteMyRecipe = createAsyncThunk(
  "recipes/deleteMyRecipe",
  async (id, thunkAPI) => {
    try {
      const res = await deleteOwnRecipe(id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);

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
