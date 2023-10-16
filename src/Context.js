import React, { createContext, useContext, useState } from 'react';

const Cart = createContext();

const initialState = {
  cart: [],
  total: ''
}

export const Context = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updateState = (newState) => {
    setState({ ...state, ...newState });
  };

  return (
    <Cart.Provider value={{ state, updateState }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};
