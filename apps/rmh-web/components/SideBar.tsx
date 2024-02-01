"use client";
import { User } from "@/app/pt-portal/models";
import Image from "next/image";
import { useMemo, useState } from "react";
import UsersList from "./UsersList";
import Tab from "./Tab";
const tabs = ["Upcoming Appointments", "Past Appointments"];

const useFinalUsers = (search: string, users: User[]) =>
  useMemo(() => {

    return search.trim().length > 0
      ? users.filter((user) =>
          user.patientName.toLowerCase().startsWith(search)
        )
      : users;
  }, [search, users]);

const SideBar = ({
  users,
}: {
  users: User[];
}) => {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const finalUsers = useFinalUsers(search, users);

  return (
    <div className="h-full bg-white w-100 p-0.5 rounded-t-lg">
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
          className="border-[1px] border-[#C3C6CC] w-full p-2 rounded-lg placeholder:text-[#6B6F7B]  pl-14"
          placeholder="Search Client"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
          <UsersList users={finalUsers} />
    </div>
  );
};

export default SideBar;
