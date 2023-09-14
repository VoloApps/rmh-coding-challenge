import React from 'react';

interface ClientListItemProps {
  avatar?: string;
  isSelected?: boolean;
  name: string;
}
const ClientListItem: React.FC<ClientListItemProps> = ({ avatar = '/user.jpeg', isSelected = false, name}) => {

  return (
    <li className="flex flex-row items-center gap-4 w-full p-4">
      <img src={avatar} alt={name} className="h-10 w-10 rounded-full" />
      <span className='mr-auto'>{name}</span>
      <button type="button">
        <img src='/chat.svg' alt='A chat bubble' />
      </button>
    </li>
  )
};

export default ClientListItem;