import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAuth } from "./auth-api";

import { setBearerToken } from "../../axios/axios";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const user = await fetchAuth(userData);
      setBearerToken(user.data.data.token);
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const user = await fetchSignIn(userData);
      setBearerToken(user.data.data.token);
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);

export const addToFavorites = createAsyncThunk(
  "auth/addToFavoriteRecipes",
  async (id, thunkAPI) => {
    try {
      const res = await addFavoriteRecipe(id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  "auth/deleteFromFavorites",
  async (id, thunkAPI) => {
    try {
      const res = await deleteFavoriteRecipe(id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);
