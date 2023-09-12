import React from 'react'

interface tabsProps {
  tabs?: string[];
  selectedIndex?: number;
}
export const Tabs = ({
  tabs=["Today's", "All"],
  selectedIndex=0,
}: tabsProps) => {
  return (
    <div className='flex w-full'>
        {tabs.map((tab, index) => {
          return (
            <div className={`flex-1 py-4 px-14 text-xs bg-white ${selectedIndex == index ? "border-b-2 border-blue-400" : ""}`}>
              {tab}
            </div>
          )
        })}
    </div>
  )
}
