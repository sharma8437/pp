import React from 'react';
import './searchBar.css';
import search from "../../assets/icons/search.svg";

const SearchBar = ({ name = 'Search...', width = '200px', height = '20px' ,paddingLeft='10px',marginTop='4px'}) => {
  return (
    <div className="search-bar"  style={{ marginTop}}>
      <input 
        type="text" 
        name="search" 
        className="search-input" 
        placeholder={name}
        style={{ width, height,paddingLeft }}
      />
      <span className="search-icon"  style={{ paddingLeft }}>
        <img src={search} alt="Search Icon" />
      </span>
    </div>
  );
}

export default SearchBar;
