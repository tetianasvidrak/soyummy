import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRecipeById } from "./recipe-api";

export const getRecipe = createAsyncThunk(
  "recipe/getRecipe",
  async (id, thunkAPI) => {
    try {
      const res = await getRecipeById(id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);
