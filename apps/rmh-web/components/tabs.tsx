"use client";

import { useState } from "react";

type TabItem = {
  id: string;
  text: string;
  isActive?: boolean;
  component: React.ReactNode;
};

type TabsProps = {
  items: TabItem[];
  defaultTab: string;
};

export default function Tabs({ items, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const activeComponent =
    items.find((item) => item.id === activeTab)?.component || null;

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {items.map((item) => {
            return (
              <li key={item.id} className="mr-2">
                <Tab
                  id={item.id}
                  text={item.text}
                  isActive={item.id === activeTab}
                  onClick={() => setActiveTab(item.id)}
                  component={item.component}
                />
              </li>
            );
          })}
        </ul>
      </div>
      {activeComponent}
    </div>
  );
}

function Tab({ text, isActive, onClick }: TabItem & { onClick: () => void }) {
  return (
    <button
      className={`inline-block 
        p-4 border-b-2 
        border-transparent 
        border: border-gray-200
        rounded-t-lg
         ${
           isActive
             ? "active text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
             : ""
         }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
