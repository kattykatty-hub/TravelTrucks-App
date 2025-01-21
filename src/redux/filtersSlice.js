import { createSlice } from "@reduxjs/toolkit";

const initialFilters = {
  location: "",
  form: null,
  equipment: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    currentFilters: { ...initialFilters },
  },
  reducers: {
    setCurrentFilters(state, action) {
      state.currentFilters = action.payload;
    },
    resetFilters(state) {
      state.currentFilters = { ...initialFilters };
    },
  },
});

export const { setCurrentFilters, resetFilters } = filtersSlice.actions;

export const selectCurrentFilters = (state) => state.filters.currentFilters;

export const filtersReducer = filtersSlice.reducer;
