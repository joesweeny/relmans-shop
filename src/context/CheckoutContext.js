import React, { createContext, useMemo, useState } from 'react';
import { node } from 'prop-types';

export const CheckoutContext = createContext(null);
export const CheckoutActionContext = createContext(null);

const CheckoutContextProvider = (props) => {
  const { children } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState({});
  const [postCode, setPostCode] = useState(null);
  const [phone, setPhone] = useState(null);
  const [method, setMethod] = useState(null);
  const [date, setDate] = useState(null);

  const store = useMemo(
    () => ({
      address,
      date,
      firstName,
      lastName,
      method,
      phone,
      postCode,
    }),
    [address, date, firstName, lastName, method, phone, postCode]
  );

  const actions = useMemo(
    () => ({
      setAddress,
      setDate,
      setFirstName,
      setLastName,
      setMethod,
      setPostCode,
      setPhone,
    }),
    [
      setAddress,
      setDate,
      setFirstName,
      setLastName,
      setMethod,
      setPostCode,
      setPhone,
    ]
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
