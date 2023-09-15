import SidebarMenu from "@/components/sidebar";
import { getAppointments } from "../_services/appointments";
import Tabs from "@/components/tabs";

export default async function AppointmentList() {
  const data = await getAppointments();

  if (!data)
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        No appointment found
      </div>
    );

  // sort appointments desc by date
  const appointments = data.sort((a, b) => {
    return (
      new Date(b.appointmentDate).getTime() -
      new Date(a.appointmentDate).getTime()
    );
  });

  // build menu items
  const menuItems = appointments.map((appointment, index) => ({
    id: index.toString(),
    text: appointment.patientName,
    avatarURL: "/avatar.png",
    icon: "/chat.svg",
  }));

  return (
    <div className="m-4">
      <h1 className="text-xl font-bold">My Appointments</h1>
      <Tabs
        defaultTab="today"
        items={[
          {
            id: "today",
            text: "Today's",
            component: <SidebarMenu menuItems={menuItems} />,
            isActive: true,
          },
          { id: "all", text: "All", component: <div>TODO</div> },
        ]}
      />
    </div>
  );
}
