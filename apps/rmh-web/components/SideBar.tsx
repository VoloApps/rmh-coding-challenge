"use client";
import { User } from "@/app/pt-portal/models";
import Image from "next/image";
import { useMemo, useState } from "react";

import UsersList from "./UsersList";
import Tab from "./Tab";

const tabs = ["Today's", "All"];

const useFinalUsers = (activeIndex: number, search: string, users: User[]) =>
  useMemo(() => {
    const userFilter = (user: User) =>
      new Date(user.appointmentDate).getTime() > new Date().getTime();
    const filteredUsers = activeIndex === 0 ? users.filter(userFilter) : users;

    return search.trim().length > 0
      ? filteredUsers.filter((user) =>
          user.patientName.toLowerCase().startsWith(search)
        )
      : filteredUsers;
  }, [activeIndex, search, users]);

const SideBar = ({
  isLoading,
  users,
}: {
  isLoading: boolean;
  users: User[];
}) => {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const finalUsers = useFinalUsers(activeIndex, search, users);

  return (
    <div className="h-full bg-white w-100">
      <div className="font-bold text-[#343741] text-[22px] p-6">
        My Appointments
      </div>
      <div className="grid grid-cols-2 text-center">
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            isActive={activeIndex === index}
            setActive={() => setActiveIndex(index)}
            text={tab}
          />
        ))}
      </div>
      <div className="p-4 relative">
        <Image
          src="/search-icon.svg"
          height={20}
          width={20}
          alt="search icon"
          className="absolute top-1/2 left-[34px] -translate-y-1/2"
        />
        <input
          className="border border-[1px] border-[#C3C6CC] w-full p-2 rounded-lg placeholder:text-[#6B6F7B]  pl-14"
          placeholder="Search Client"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        {isLoading ? (
          <div className="px-4">loading...</div>
        ) : (
          <UsersList users={finalUsers} />
        )}
      </div>
    </div>
  );
};

export default SideBar;
