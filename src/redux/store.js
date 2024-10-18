import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedAuthReducer } from "./auth/auth-slice";
import { persistedRecipeReducer } from "./recipe/recipe-slice";
import { persistedShoppingListReducer } from "./shoppingList/shoppingList-slice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    recipe: persistedRecipeReducer,
    shoppingList: persistedShoppingListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
