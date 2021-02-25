import React, { createContext, useEffect, useReducer } from 'react';
import { node } from 'prop-types';

import reducer from '../store/reducers/basket';

export const CheckoutContext = createContext(null);

const CheckoutContextProvider = (props) => {
  const initialState = {
    orderNumber: null,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: {
      line1: '',
      line2: '',
      line3: '',
      town: '',
      city: '',
      postCode: '',
    },
    method: {
      type: '',
      date: null,
      fee: 0,
    },
    items: JSON.parse(localStorage.getItem('relmansshop')) || [],
  };

  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('relmansshop', JSON.stringify(state.items));
  }, [state.items]);

  const store = {
    orderNumber: state.orderNumber,
    firstName: state.firstName,
    lastName: state.lastName,
    phone: state.phone,
    email: state.email,
    address: state.address,
    method: state.method,
    items: state.items,
    dispatch,
  };

  return (
    <CheckoutContext.Provider value={store}>
      {children}
    </CheckoutContext.Provider>
  );
};

CheckoutContextProvider.propTypes = {
  children: node.isRequired,
};

export default CheckoutContextProvider;
