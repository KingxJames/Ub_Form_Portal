import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useMediaQuery from '@mui/material/useMediaQuery';
import './SearchBar.scss';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  showIconOnly: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, showIconOnly }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        {!showIconOnly && (
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder=""
          />
        )}
      </div>
    </form>
  );
};

export default SearchBar;
