export interface Client {
    id: string;
    name: string;
}

export interface User {
    id: string;
    name: string;
}

export class Appointment {
    constructor (
        public appointmentDate: Date,
        public createdOn: Date,
        public duration: number,
        public patientName: string,
        public ptId: string,
        public zoomURL: string,
    ){} 
}
