import React from 'react';
import './searchBar.css';
import search from "../../assets/icons/search.svg";

const SearchBar = ({name='Search...'}) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        name="search" 
        className="search-input" 
        placeholder={name}
      />
      <span className="search-icon">
        <img src={search} alt="Search Icon" />
      </span>
    </div>
  );
}

export default SearchBar;
