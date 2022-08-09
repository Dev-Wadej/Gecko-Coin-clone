import { createContext, useContext } from 'react';
import { useState } from 'react';

const PaginatedContext = createContext({
  paginatenumber: null,
  setpaginatenumber: () => {},
});

export const PaginatedProvider = ({ children }) => {
  const [paginatenumber, setpaginatenumber] = useState(1);
  const value = {
    paginatenumber,
    setpaginatenumber,
  };
  return (
    <PaginatedContext.Provider value={value}>
      {children}
    </PaginatedContext.Provider>
  );
};

export const usePaginate = () => {
  const context = useContext(PaginatedContext);
  if (!context) {
    throw new Error(
      'useAddProduct must be used within a AddProductProvider'
    );
  }
  return context;
};
