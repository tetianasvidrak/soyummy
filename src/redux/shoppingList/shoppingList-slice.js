import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  receiveShoppingList,
  addIngredientToShoppingList,
  deleteFromShoppingList,
} from "./shoppingListOperations";

const initialState = {
  shoppingList: [],
  loading: "idle", // 'idle' | 'pending' | 'succeeded' | 'failed'
  error: null,
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(receiveShoppingList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(receiveShoppingList.fulfilled, (state, action) => {
      state.shoppingList = action.payload.data.shoppingList;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(receiveShoppingList.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload.error;
    });
    builder.addCase(addIngredientToShoppingList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(addIngredientToShoppingList.fulfilled, (state, action) => {
      state.shoppingList = action.payload.data.shoppingList;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(addIngredientToShoppingList.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload.error;
    });
    builder.addCase(deleteFromShoppingList.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(deleteFromShoppingList.fulfilled, (state, action) => {
      state.shoppingList = action.payload.data.shoppingList;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(deleteFromShoppingList.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload.error;
    });
  },
});

const persistConfig = {
  key: "shoppingList",
  storage,
};

export const persistedShoppingListReducer = persistReducer(
  persistConfig,
  shoppingListSlice.reducer
);
