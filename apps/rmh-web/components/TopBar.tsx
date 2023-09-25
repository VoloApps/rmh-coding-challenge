"use client";

import React from "react";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/features/authSlice";
import { Auth } from "aws-amplify";
import Image from "next/image";

const TopBar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="bg-white p-4 flex justify-between items-center flex-[0_0_60px]">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-8 mr-4"
          // Aspect Ratio
          height={32}
          width={130}
        />
        <h1 className="text-white text-lg font-bold">Right Move Health</h1>
      </div>
      {isAuthenticated ? (
        <div className="flex items-center">
          <button
            onClick={handleSignOut}
            className="text-white hover:underline cursor-pointer mr-4"
          >
            Sign Out
          </button>
          <Image
            src="/avatar.png"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
            width={40}
            height={40}
          />
        </div>
      ) : null}
    </header>
  );
};

export default TopBar;
