"use client";

import Image from "next/image";
import { useState } from "react";

type MenuItem = {
  id: string;
  avatarURL: string;
  text: string;
  icon: string;
};

type SidebarMenuProps = {
  menuItems: MenuItem[];
};

export default function SidebarMenu({ menuItems }: SidebarMenuProps) {
  const [filter, setFilter] = useState("");

  const filteredMenuItems = menuItems.filter((item) =>
    item.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex flex-col space-y-2">
      {/* <input
        type="text"
        placeholder="Search client"
        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-4"
        onChange={(e) => setFilter(e.target.value)}
      /> */}

      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search client"
          className="mt-4 w-full px-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/search.svg"
            alt="Search Icon"
            className="w-5 h-5 text-gray-400"
          />
        </div>
      </div>

      {filteredMenuItems.map((item) => {
        return <SideBarItem key={item.id} {...item} />;
      })}
    </div>
  );
}

function SideBarItem({ avatarURL, text, icon }: MenuItem) {
  // sidebar item is a menu item with avatar text and icon side by side
  return (
    <div className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatarURL}
        alt="User Avatar"
        className="w-10 h-10 rounded-full"
      />

      <div className="flex flex-row items-center justify-between">
        <p className="text-sm w-32">{text}</p>

        <Image width={18} height={18} src={icon} alt="Menu Icon" className="" />
      </div>
    </div>
  );
}
