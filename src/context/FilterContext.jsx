import React, { createContext, useState } from 'react';

const FilterContext = createContext();

  const FilterProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  const searchName = (searchTerm) => {
    setName(searchTerm);
  };

  const statusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <FilterContext.Provider value={{ name, status, searchName, statusChange }}>
      {children}
    </FilterContext.Provider>
  );
};

export {FilterProvider, FilterContext};