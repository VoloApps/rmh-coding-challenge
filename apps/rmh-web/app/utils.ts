import { Appointment, AppointmentList } from "@/app/pt-portal/models";
import { QueryAppointmentListQuery } from "@/app/generated-graphql-types/rmh";

/**
 * Checking if the date is today
 * @param dateString
 * @returns
 */
const isTodayDate = (dateString: string) => {
  const today = new Date();
  const date = new Date(dateString);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

/**
 * Check if the appointment is matched with the search term
 * @param searchTerm
 * @param appointment
 * @returns
 */
const isMatchedSearchTerm = (searchTerm: string, appointment: Appointment) => {
  return (appointment.patientName ?? "")
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
};

/**
 * Check if the appointment is matched with the search term and is today
 * @param appointments
 * @param isToday
 * @param searchTerm
 * @returns
 */
export const filterAppointments = (
  appointments: Appointment[] = [],
  isToday: boolean,
  searchTerm: string = ""
) => {
  const filterAppointmentsByDate = isToday
    ? appointments.filter((appointment) =>
        isTodayDate(appointment.appointmentDate)
      )
    : appointments;

  return searchTerm === ""
    ? filterAppointmentsByDate
    : filterAppointmentsByDate.filter((appointment) =>
        isMatchedSearchTerm(searchTerm, appointment)
      );
};

/**
 * Transform the appointment list from the API to the Appointment model
 * @param result
 * @returns
 */
export const transformAppointments = (
  result: QueryAppointmentListQuery | undefined
): Appointment[] => {
  if (!result?.getAppointments?.items) {
    return [];
  }

  const appointments: AppointmentList = result?.getAppointments?.items ?? [];

  return appointments.filter((item) => item != null) as Appointment[];
};
