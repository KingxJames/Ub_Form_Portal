import React, { useState } from 'react';

import './UserPosition.scss';

interface UserPositionProps {
  name: string;
  position: string;
  profilePicture: string;
}

let items = [
  {
      text: 'Cut',
  },
  {
      text: 'Copy',
  },
  {
      text: 'Paste',
  }
];

export const UserPosition: React.FC<UserPositionProps> = ({ name, position, profilePicture }) => {

  // const createHandleMenuClick = (menuItem: string) => {
  //   return () => {
  //     console.log(`Clicked on ${menuItem}`);
  //   };
  // };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // const handleLogout = () => {
  //   // Implement your logout logic here
  //   console.log('Logged out');
  // };

  return (
    <div className="user-position">
      <div className="user-details">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <div className="profile-picture" onClick={toggleDropdown}>
        <img src={profilePicture} alt={name} />
        {/* <DropDownButtonComponent id="element" items={items}> Clipboard </DropDownButtonComponent> */}
      </div>
    </div>
  );
};
export default UserPosition;