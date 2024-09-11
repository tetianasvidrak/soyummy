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
