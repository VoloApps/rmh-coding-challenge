import { QueryAppointmentListQuery } from "@/app/generated-graphql-types/rmh";

export interface Client {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
}

export type AppointmentResult = QueryAppointmentListQuery["getAppointments"];
export type AppointmentList = Exclude<
  Exclude<AppointmentResult, null | undefined>["items"],
  null | undefined
>;
export type Appointment = Exclude<AppointmentList[number], null | undefined>;
