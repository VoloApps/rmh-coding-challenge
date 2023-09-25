"use client";

import { useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { FilterToggle } from "./FilterToggle";
import { Appointment } from "@/app/pt-portal/models";
import { filterAppointments } from "@/app/utils";
import { setAppointment } from "@/features/patientSlice";
import Image from "next/image";

type SearchListProps = {
  items: Appointment[];
  className?: string;
};

type AppointmentItemProps = {
  appointment: Appointment;
};

const AppointmentItem: React.FC<AppointmentItemProps> = ({ appointment }) => {
  const dispatch = useDispatch();

  const onDialogIconClick = () => {
    dispatch(setAppointment(appointment));
  };

  const { patientName } = appointment;
  return (
    <li className="flex gap-2 items-center p-4 h-[72px] justify-between w-full hover:bg-black/10">
      <div className="flex gap-2 items-center">
        <Image src="/avatar.png" alt="avatar" width="40" height="40" />
        <p className="text-black font-bold text-base leading-[18px]">
          {patientName}
        </p>
      </div>
      <button
        onClick={onDialogIconClick}
        className="rounded-full hover:bg-black/20 h-10 w-10 grid place-content-center"
      >
        <Image
          className="cursor-pointer"
          src="/dialog-icon.svg"
          alt="avatar"
          width="24"
          height="24"
        />
      </button>
    </li>
  );
};

export const SearchList: React.FC<SearchListProps> = ({ items, className }) => {
  const [isToday, setIsToday] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onFilterChange = useCallback((newIsToday: boolean) => {
    setIsToday(newIsToday);
  }, []);

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const filteredItems = useMemo(() => {
    return filterAppointments(items, isToday, searchText);
  }, [isToday, searchText, items]);

  return (
    <div className={`flex-col ${className}`}>
      <FilterToggle
        className="flex-none"
        isToday={isToday}
        onChange={onFilterChange}
      />
      <div className="m-4 p-2 border-[1px] border-borderGray rounded-lg flex flex-none gap-2">
        <Image src="/search.png" alt="search-icon" width="25" height="20" />
        <input
          className="text-black font-normal text-base leading-5 flex-1 p-1"
          type="search"
          placeholder="Search Client"
          onChange={onSearchTextChange}
        />
      </div>
      <ul className="min-h-0 flex flex-col flex-1 w-full overflow-auto">
        {filteredItems.map((appointment) => (
          <AppointmentItem
            key={appointment.patientName}
            appointment={appointment}
          />
        ))}
      </ul>
    </div>
  );
};
