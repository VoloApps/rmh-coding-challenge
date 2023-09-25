import { SearchList } from "./SearchList";
import { getClient } from "@/app/graphql-clients";
import { QueryAppointmentListDocument } from "@/app/generated-graphql-types/rmh";
import { transformAppointments } from "@/app/utils";

type SideBarProps = {};

/**
 * Questions:
 * Should switching the tab result in resetting the state of the search bar?
 *      - The search bar should be shared between the all lists and today list, so the search is performed on both side
 *      - Switch between the tabs should not reset the search bar
 */

/**
 * Components:
 *  - SideBar - SSR (Data should be fetched from here)
 *      - Header - SSR
 *      - SearchList (Client) - States (isToday, searchText)
 *          - Tab Filter (Client)
 *          - SearchBox (Client) -
 *          - ResultList (Client)
 */
/**
 * Server Components for Patient Portal Side Bar
 * @returns
 */
export const SideBar: React.FC<SideBarProps> = async () => {
  const { data, error } = await getClient().query(
    QueryAppointmentListDocument,
    {}
  );

  if (error) {
    <div>Error Occurred</div>;
  }

  const appointments = transformAppointments(data);

  return (
    <aside className="flex flex-col w-[400px] h-full border-r-[1px] bg-white rounded-2xl">
      <h2 className="text-black leading-4 p-6 text-[22px] font-bold flex flex-none">
        My Appointments
      </h2>
      <SearchList className="flex flex-1 min-h-0" items={appointments} />
    </aside>
  );
};
