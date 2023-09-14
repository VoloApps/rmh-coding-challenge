import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"

// Define a type for the slice state
interface AppointmentState {
  selectedUser: string | null;
}

// Define the initial state using that type
const initialState: AppointmentState = {
  selectedUser: null,
}

export const AppointmentSlice = createSlice({
  name: "Appointments",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSelectedUser: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload
    }
  },
})

export const {
  setSelectedUser
} = AppointmentSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getSelectedUser = (state: RootState) => state.appt.selectedUser;

export default AppointmentSlice.reducer
