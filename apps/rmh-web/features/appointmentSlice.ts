import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";

export const AppointmentSlice = createSlice({
  name: "Appointment",
  initialState: {},
  reducers: {
    selectAppointment: (state, action) => {
      state = action.payload;
    },
  },
});

export const selectAppointment = (state: RootState) => state.appointment;

export default AppointmentSlice.reducer;
