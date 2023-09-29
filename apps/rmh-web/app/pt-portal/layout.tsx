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
      <div className="pt-layout">
        <section className="main-content">{children}</section>
      </div>
    </ReduxProvider>
  );
};

export default PTPortalLayout;
