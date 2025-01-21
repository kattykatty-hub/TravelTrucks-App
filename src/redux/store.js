import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filtersSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favouritesReducer } from "./favouritesSlice";
import bookingsReducer from "./bookingSlice";

const persistedFavouritesReducer = persistReducer(
  {
    key: "favourites",
    storage,
  },
  favouritesReducer
);

const persistedBookingsReducer = persistReducer(
  {
    key: "bookings",
    storage,
  },
  bookingsReducer
);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favourites: persistedFavouritesReducer,
    bookings: persistedBookingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);