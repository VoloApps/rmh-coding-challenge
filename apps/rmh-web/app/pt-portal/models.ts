export interface Client {
    id: string;
    name: string;
}

export interface User {
    ptId: string;
    appointmentDate: string;
    createdOn: string;
    duration: number;
    patientName: string;
    zoomUrl: string;
}
