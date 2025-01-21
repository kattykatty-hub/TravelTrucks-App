import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "./campersOps";

const initialState = {
  items: [],
  total: 0,
  currentPage: 1,
  loading: false,
  error: null,
  isPageLoad: true,
  camper: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items =
          state.isPageLoad || state.currentPage === 1
            ? action.payload.items
            : state.items.concat(action.payload.items);
        state.total = action.payload.total;
        state.isPageLoad = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isPageLoad = false;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage, resetItems } = campersSlice.actions;

export const selectCampers = (state) => state.campers.items;
export const selectTotal = (state) => state.campers.total;
export const selectCurrentPage = (state) => state.campers.currentPage;
export const selectError = (state) => state.campers.error;
export const selectLoading = (state) => state.campers.loading;
export const selectIsPageLoad = (state) => state.campers.isPageLoad;
export const selectCamper = (state) => state.campers.camper;

export const campersReducer = campersSlice.reducer;
