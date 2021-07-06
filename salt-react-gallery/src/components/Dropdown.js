import React from 'react';

const Dropdown = ({sendDropdownText, getFromLocalStorage, query}) => {

  const pressedDropdown = e => {
    sendDropdownText(e.target.textContent);
  }

  const filterDropdown = () => {
    let filteredDropdown = getFromLocalStorage().search;
    filteredDropdown = filteredDropdown.filter(item => item.toLowerCase().startsWith(query.toLowerCase()));
    return filteredDropdown.slice(-5);
  }

  return (
    <ul className="dropdown-content">
      {filterDropdown().reverse().map((queries, index) => <li key={index} onClick={pressedDropdown}>{queries}</li>)}
    </ul>
  );
};

export default Dropdown;
