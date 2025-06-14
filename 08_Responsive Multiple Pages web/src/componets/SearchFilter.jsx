import React from 'react';

const SearchFilter = (props) => {
  const { search, setsearch, filter, setfilter } = props;

  const handlevaluechange = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setfilter(e.target.value);
  };

  return (
    <div className="search-filter-container">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handlevaluechange}
        className="search-input"
      />

      <select
        value={filter}
        onChange={handleInputChange}
        className="filter-select"
      >
        <option value="All">All</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchFilter;
