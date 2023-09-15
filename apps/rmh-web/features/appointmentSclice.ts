import { createSlice } from "@reduxjs/toolkit";

export const AppointmentSlice = createSlice({
  name: "Appointment",
  initialState: {},
  reducers: {
    selectAppointment: (state, action) => {
      return action.payload;
    },
  },
});

export const { selectAppointment } = AppointmentSlice.actions;
