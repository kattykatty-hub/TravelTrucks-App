import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
  timeout: 10000,
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (payload, thunkAPI) => {
    try {
      const response = await apiClient.get("/campers", {
        params: payload,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.response ? error.response.status : 500,
      });
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/getById",
  async (camperId, thunkAPI) => {
    try {
      const response = await apiClient.get(`/campers/${camperId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.response ? error.response.status : 500,
      });
    }
  }
);

export default { fetchCampers, fetchCamperById };