import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  isDarkMode: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;

const persistConfig = {
  key: "darkMode",
  storage,
};

export const persistedDarkModeReducer = persistReducer(
  persistConfig,
  darkModeSlice.reducer
);
