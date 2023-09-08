import { useState } from "react";type Tab = { label: string; content?: React.ReactNode; badge?: number };
type TabsProps = {
  tabs: Array<Tab>;
};

function Tabs(props: TabsProps) {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex-col">
      <div className="flex flex-row w-full mt-2 ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={` p-3 w-full flex justify-center border-b-2 cursor-pointer ${
              activeTab === index
                ? "border-indigo-800 text-indigo-800 "
                : "border-gray-200 text-gray-600 "
            }`}
            onClick={() => setActiveTab(index)}
          >
            <p className="font-semibold text-sm">{tab.label}</p>
            {tab.badge && (
              <div className="ml-1 bg-red-500 rounded-full w-3 h-3 flex justify-center items-center">
                <p className="text-white" style={{ fontSize: 8 }}>
                  {tab.badge}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
