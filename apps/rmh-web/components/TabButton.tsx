import React, {MouseEventHandler, ReactNode} from 'react';

interface TabButtonProps {
  isSelected: boolean,
  onClick: MouseEventHandler;
  children: ReactNode;
}
const TabButton: React.FC<TabButtonProps> = ({isSelected = false, onClick, children}) => {
  return (
    <button type='button' onClick={onClick} className={`flex-1 h-11 font-bold border-solid border-b-2 ${isSelected ? 'border-[#2B478B] text-[#2B478B]' : 'border-[#C3C6CC]'}`}>
      {children}
    </button>
  )
};

export default TabButton;