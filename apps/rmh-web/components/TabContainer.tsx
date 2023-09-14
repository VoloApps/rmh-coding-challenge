import React, { useState, ReactNode } from 'react';
import TabButton from "@/components/TabButton";

interface TabContainerProps {
  tabs: string[],
  tabContent: ReactNode[],
  selectedIndex?: number
}
const TabContainer: React.FC<TabContainerProps> = ({tabs, tabContent, selectedIndex = 0}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(selectedIndex);

  return (
    <>
      <div className='flex'>
        {tabs.map((tab, i) => {
          return <TabButton key={tab} onClick={() => setCurrentIndex(i)} isSelected={i === currentIndex}>
            {tab}
          </TabButton>
        })}
      </div>
      {tabContent[currentIndex]}
    </>
  )
};

export default TabContainer;