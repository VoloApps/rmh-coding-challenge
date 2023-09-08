import { Fragment } from "react";type Tab = { label: string; content?: React.ReactNode; isActive: boolean };
type TabsProps = {
  tabs: Array<Tab>;
};

function Tabs(props: TabsProps) {
  const { tabs } = props;
  return (
    <div className="flex-col">
      <div className="flex flex-row w-full mt-2 ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={` p-3 w-full flex justify-center border-b-2 cursor-pointer ${
              tab.isActive
                ? "border-indigo-800 text-indigo-800 "
                : "border-gray-200 text-gray-600 "
            }`}
          >
            <p className="font-semibold text-sm">{tab.label}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full">
        {tabs.map((tab, index) => (
          <Fragment key={index}>{tab.isActive && tab.content}</Fragment>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
