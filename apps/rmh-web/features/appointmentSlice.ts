import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/lib/store"
import { Appointment } from "@/components/Appointments"

// Define a type for the slice state
interface AppointmentData {
    data: Appointment
}

// Define the initial state using that type
const initialState: AppointmentData = {
    data: {
        appointmentDate: '2023-10-13T06:12:40+04:00',
        createdOn: "2023-10-14T08:13:27+04:00",
        duration: 60,
        patientName: "Mcintyre Hodge",
        ptId: "6b87d552-a2fe-465a-998c-1b288fee212f",
        zoomUrl: "https://zoom.us/rightmovehealth/patient"
    }
}

export const AppointmentSlice = createSlice({
    name: "Auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setAppointmentData: (state, action: PayloadAction<Appointment>) => {
            state.data = action.payload
        }
    },
})

export const {
    setAppointmentData
} = AppointmentSlice.actions

export default AppointmentSlice.reducer;
