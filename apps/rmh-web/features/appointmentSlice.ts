import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import { Appointment } from "@/components/Tabs";

// Define a type for the slice state
interface AppointmentState {
  selectedAppointment: Appointment | null;
}

// Define the initial state using that type
const initialState: AppointmentState = {
  selectedAppointment: null,
};

export const AppointmentSlice = createSlice({
  name: "Appointment",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSelectedAppointment: (state, action: PayloadAction<Appointment>) => {
      console.log(
        "In appointmentSlice.ts, setSelectedAppointment reducer to set the selected appointment",
        action
      );
      state.selectedAppointment = action.payload;
    },
  },
});

export const { setSelectedAppointment } = AppointmentSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectedAppointment = (state: RootState) =>
  state.appointment.selectedAppointment;

export default AppointmentSlice.reducer;
