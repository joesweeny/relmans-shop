import React, { createContext, useEffect, useMemo, useReducer } from 'react';
import { node } from 'prop-types';

import reducer from '../store/reducers/basket';

export const BasketContext = createContext(null);

const BasketContextProvider = (props) => {
  const { children } = props;
  const [items, dispatch] = useReducer(
    reducer,
    [],
    (initial) => JSON.parse(localStorage.getItem('relmansshop')) || initial
  );

  console.log(items);

  useEffect(() => {
    localStorage.setItem('relmansshop', JSON.stringify(items));
  }, [items]);

  const store = useMemo(
    () => ({
      items,
      dispatch,
    }),
    []
  );

  return (
    <BasketContext.Provider value={store}>{children}</BasketContext.Provider>
  );
};

BasketContextProvider.propTypes = {
  children: node.isRequired,
};

export default BasketContextProvider;
