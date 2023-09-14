import { useEffect, useState } from "react";
import { Appointment } from "./Appointments"
import { AppointmentsCard } from "./AppointmentCard";

interface AppointmentListProps {
    appointments: Appointment[];
}
export const AppointmentsList = ({ appointments }: AppointmentListProps) => {
    const [sortedAppointments, setSortedAppointments] = useState<Appointment[]>([]);
    useEffect(() => {
        appointments.sort((a, b) => {
            return new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime()
        })
        setSortedAppointments(appointments);
    }, [appointments]);

    return (

        <ul className='flex flex-col'>
            {sortedAppointments.map((appt) => {
                return (
                    <AppointmentsCard appointment={appt} />
                )
            })}
        </ul>

    )

}