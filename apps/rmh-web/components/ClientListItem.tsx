import React from 'react';
import {useDispatch} from "react-redux";
import {setSelectedUser} from "@/features/appointmentSlice";

interface ClientListItemProps {
  avatar?: string;
  isSelected?: boolean;
  name: string;
}
const ClientListItem: React.FC<ClientListItemProps> = ({ avatar = '/user.jpeg', isSelected = false, name}) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (isSelected) {
      dispatch(setSelectedUser(''));
    } else {
      dispatch(setSelectedUser(name));
    }
  }

  return (
    <li className={`flex flex-row items-center gap-4 w-full p-4 ${isSelected ? 'bg-[#EFF3FC]' : ''}`} onClick={onClickHandler}>
      <img src={avatar} alt={name} className="h-10 w-10 rounded-full" />
      <span className={`mr-auto ${isSelected ? 'font-bold' : ''}`}>{name}</span>
      <button type="button">
        <img src='/chat.svg' alt='A chat bubble' />
      </button>
    </li>
  )
};

export default ClientListItem;