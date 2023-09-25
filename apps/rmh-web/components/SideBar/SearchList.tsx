"use client";

import { useState, useCallback, useMemo } from "react";
import { FilterToggle } from "./FilterToggle";
import { Appointment } from "./mockData";
import debounce from "lodash.debounce";
import Image from "next/image";

type SearchListProps = {
  items: Appointment[];
};

type AppointmentItemProps = {
  appointment: Appointment;
};

const AppointmentItem: React.FC<AppointmentItemProps> = ({ appointment }) => {
  const { patientName } = appointment;
  return (
    <li className="flex gap-2 items-center p-4 h-[72px] justify-between w-full">
      <div className="flex gap-2 items-center">
        <Image src="/avatar.png" alt="avatar" width="50" height="50" />
        <p className="text-black">{patientName}</p>
      </div>
      <Image
        className="cursor-pointer"
        src="/dialog-icon.svg"
        alt="avatar"
        width="20"
        height="20"
      />
    </li>
  );
};

export const SearchList: React.FC<SearchListProps> = ({ items }) => {
  const [isToday, setIsToday] = useState(true);
  const [searchText, setSearchText] = useState("");

  const onFilterChange = useCallback((newIsToday: boolean) => {
    setIsToday(newIsToday);
  }, []);

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const isTodayDate = (dateString: string) => {
    const today = new Date();
    const date = new Date(dateString);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const filteredItems = useMemo(() => {
    if (!isToday) {
      return items;
    }

    if (!searchText) {
      return items.filter((item) => isTodayDate(item.appointmentDate));
    }

    return items.filter(
      (item) =>
        isTodayDate(item.appointmentDate) &&
        item.patientName.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [isToday, searchText, items]);

  return (
    <div className="flex flex-1 flex-col gap-1">
      <FilterToggle isToday={isToday} onChange={onFilterChange} />
      <div className="m-4 p-2 border-[1px] border-borderGray rounded-lg flex-[0_0_40px]">
        <input
          className="text-black font-normal text-base leading-5 "
          type="search"
          placeholder="Search Client"
          onChange={onSearchTextChange}
        />
      </div>
      <div className="flex flex-1 overflow-scroll">
        <ul className="h-full overflow-scroll w-full">
          {filteredItems.map((appointment) => (
            <AppointmentItem key={appointment.ptId} appointment={appointment} />
          ))}
        </ul>
      </div>
    </div>
  );
};
