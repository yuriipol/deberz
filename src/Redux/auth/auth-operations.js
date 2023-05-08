import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, logout, singUp } from "../../Shared/api";

export const loginOperation = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const signUpOperation = createAsyncThunk(
  "auth/signUp",
  async (data, { rejectWithValue }) => {
    try {
      const result = await singUp(data);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOutOperation = createAsyncThunk(
  "auth/logOut",
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
