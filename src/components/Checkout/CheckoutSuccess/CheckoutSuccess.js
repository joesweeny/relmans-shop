import React, { useContext } from 'react';
import styled from 'styled-components';

import CheckoutTitle from '../CheckoutTitle/CheckoutTitle';
import { CheckoutContext } from '../../../context/CheckoutContext';

const CheckoutSuccessWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;
`;

const CheckoutSuccess = () => {
  const { orderNumber } = useContext(CheckoutContext);

  return (
    <CheckoutSuccessWrapper>
      <CheckoutTitle>Order Confirmation</CheckoutTitle>
      Thank you for your order. Your order number is {orderNumber}
    </CheckoutSuccessWrapper>
  );
};

export default CheckoutSuccess;
