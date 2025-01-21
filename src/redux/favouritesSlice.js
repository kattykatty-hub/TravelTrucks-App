import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteIds: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      if (!state.favouriteIds.includes(action.payload)) {
        state.favouriteIds.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      state.favouriteIds = state.favouriteIds.filter(
        (favouriteId) => favouriteId !== action.payload
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export const selectFavourites = (state) => state.favourites.favouriteIds;
export const selectIsInside = (state, id) => state.favourites.favouriteIds.includes(id);

export const favouritesReducer = favouritesSlice.reducer;