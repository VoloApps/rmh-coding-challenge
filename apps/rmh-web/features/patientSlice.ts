import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import type { Appointment } from "@/app/pt-portal/models";

// Define a type for the slice state
interface PatientSlice {
  appointment: Appointment | null;
}

// Define the initial state using that type
const initialState: PatientSlice = {
  appointment: null,
};

export const PatientSlice = createSlice({
  name: "Patient",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointment = action.payload;
    },
  },
});

export const { setAppointment } = PatientSlice.actions;

export default PatientSlice.reducer;
