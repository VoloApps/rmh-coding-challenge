export interface Client {
    id: string;
    name: string;
}

export interface User {
    id: string;
    name: string;
}

export interface Appointment {
    appointmentDate: string;
    createdOn: string;
    duration: number;
    patientName: string;
    ptId: string;
    zoomUrl: string;
}

export interface AppointmentResponse {
    data: {
        getAppointments: {
            items: Appointment[];
        }
    }
}
