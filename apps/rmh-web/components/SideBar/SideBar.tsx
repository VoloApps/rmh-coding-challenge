import { SearchList } from "./SearchList";
import { getPatientList } from "./action";
import { result } from "./mockData";

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
 *
 */

export const SideBar: React.FC<SideBarProps> = async () => {
  const patientList = await getPatientList();
  //   const data = result.data.getAppointments.items;

  return (
    <aside className="flex flex-col flex-[0_0_400px] h-full border-r-[1px] bg-white rounded-2xl">
      <h2 className="text-black leading-4 p-6 text-[22px] font-bold flex-[0_0_64px]">
        My Appointments
      </h2>
      <SearchList items={patientList} />
    </aside>
  );
};
