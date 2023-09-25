"use client";
import "../globals.css";

import React from "react";
import ReduxProvider from "@/components/redux-provider";

interface PTPortalLayoutProps {
  children: React.ReactNode;
}

const PTPortalLayout: React.FC<PTPortalLayoutProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <div className="pt-layout h-screen">
        <section className="main-content h-screen">{children}</section>
      </div>
    </ReduxProvider>
  );
};

export default PTPortalLayout;
