import React, { createContext, useEffect, useReducer } from 'react';
import { node } from 'prop-types';

import reducer from '../store/reducers/basket';
import { createOrder } from '../gateway/client';
import { setOrderNumber } from '../store/actions/checkout';

export const CheckoutContext = createContext(null);

const CheckoutContextProvider = (props) => {
  const initialState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: {
      line1: '',
      line2: '',
      line3: '',
      town: '',
      county: '',
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

  const createNewOrder = (orderNumber) => {
    const items = state.items.map((i) => {
      return {
        productId: i.productId,
        priceId: i.priceId,
        price: i.price,
        quantity: i.count,
      };
    });

    const payload = {
      ...state,
      orderNumber,
      method: {
        ...state.method,
        date: new Date(state.method.date).toISOString(),
      },
      items,
    };

    createOrder(payload)
      .then((number) => {
        dispatch(setOrderNumber(number));
      })
      .catch((e) => console.log(e));
  };

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
    createNewOrder,
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
