import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getShoppingList,
  addToShoppingList,
  removeFromShoppingList,
} from "./shoppingList-api";

export const receiveShoppingList = createAsyncThunk(
  "recipe/getShoppingList",
  async (_, thunkAPI) => {
    try {
      const res = await getShoppingList();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);

export const addIngredientToShoppingList = createAsyncThunk(
  "recipe/addToShoppingList",
  async (data, thunkAPI) => {
    try {
      const res = await addToShoppingList(data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);

export const deleteFromShoppingList = createAsyncThunk(
  "recipe/deleteFromShoppingList",
  async (data, thunkAPI) => {
    try {
      const res = await removeFromShoppingList(data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: error.response.data.message,
      });
    }
  }
);
