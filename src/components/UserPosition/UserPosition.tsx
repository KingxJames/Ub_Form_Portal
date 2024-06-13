import React, { useState } from 'react';
import './UserPosition.scss';

interface UserPositionProps {
  name: string;
  position: string;
  profilePicture: string;
}

export const UserPosition: React.FC<UserPositionProps> = ({ name, position, profilePicture }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="user-position">
      <div className="user-details">
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
      <div className="profile-picture" onClick={toggleDropdown}>
        <img src={profilePicture} alt={name} />
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li>Logout</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserPosition;
