import React, { createContext, useMemo, useState } from 'react';
import { node } from 'prop-types';

export const CheckoutContext = createContext(null);
export const CheckoutActionContext = createContext(null);

const CheckoutContextProvider = (props) => {
  const { children } = props;
  const [method, setMethod] = useState(null);
  const [date, setDate] = useState(null);

  const store = useMemo(
    () => ({
      date,
      method,
    }),
    [date, method]
  );

  const actions = useMemo(
    () => ({
      setDate,
      setMethod,
    }),
    [setDate, setMethod]
  );

  return (
    <CheckoutContext.Provider value={store}>
      <CheckoutActionContext.Provider value={actions}>
        {children}
      </CheckoutActionContext.Provider>
    </CheckoutContext.Provider>
  );
};

CheckoutContextProvider.propTypes = {
  children: node.isRequired,
};

export default CheckoutContextProvider;
