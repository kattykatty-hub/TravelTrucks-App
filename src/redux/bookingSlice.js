import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
  },
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    removeBooking: (state, action) => {
      const index = state.bookings.findIndex(booking => booking.id === action.payload);
      if (index !== -1) {
        state.bookings.splice(index, 1);
      }
    },
  },
});

export const { addBooking, removeBooking } = bookingsSlice.actions;

export const selectBookings = (state) => state.bookings.bookings;
export const selectBooked = (state, id) =>
  state.bookings.bookings.find((booking) => booking.id === id) || null;

export default bookingsSlice.reducer;
