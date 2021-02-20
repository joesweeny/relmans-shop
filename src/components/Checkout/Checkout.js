import React from 'react';
import styled from 'styled-components';

import CheckoutContextProvider from '../../context/CheckoutContext';
import CheckoutDelivery from './CheckoutDelivery/CheckoutDelivery';
import OrderSummary from './OrderSummary/OrderSummary';

const CheckoutWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    margin: 30px 10px 20px 10px;
  }
`;

const Checkout = () => {
  return (
    <CheckoutContextProvider>
      <CheckoutWrapper>
        <CheckoutDelivery />
        <OrderSummary />
      </CheckoutWrapper>
    </CheckoutContextProvider>
  );
};

export default Checkout;
