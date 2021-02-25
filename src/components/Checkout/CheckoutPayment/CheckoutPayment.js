import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

import CheckoutButton from '../CheckoutButton/CheckoutButton';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle';
import { CheckoutContext } from '../../../context/CheckoutContext';

const CheckoutPaymentWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;

  p {
    width: 100%;
  }

  @media (min-width: 1024px) {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
    margin-bottom: auto;
  }

  .paypal {
    width: 100%;
  }
`;

const TotalDisplay = styled.p`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  padding: 10px 10px 30px 10px;

  @media (min-width: 1024px) {
    font-size: 50px;
  }
`;

const options = {
  'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
  'buyer-country': 'GB',
  currency: 'GBP',
  intent: 'capture',
  commit: true,
};

const CheckoutPayment = (props) => {
  const { nextStep } = props;
  const [total, setTotal] = useState(0);
  const { items } = useContext(CheckoutContext);

  useEffect(() => {
    const sum = items.reduce((prev, next) => prev + next.total, 0);
    setTotal(sum);
  }, [items]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'GBP',
            value: (total / 100).toString(),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      nextStep((prev) => prev + 1);
    });
  };

  return (
    <CheckoutPaymentWrapper>
      <CheckoutTitle>Payment</CheckoutTitle>
      <CheckoutButton
        click={() => nextStep((prev) => prev - 1)}
        color="#eeeeee"
        size="12px"
      >
        Back to delivery
      </CheckoutButton>
      <TotalDisplay>£{(total / 100).toFixed(2)}</TotalDisplay>
      <PayPalScriptProvider options={options}>
        <PayPalButtons
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
          className="paypal"
        />
      </PayPalScriptProvider>
    </CheckoutPaymentWrapper>
  );
};

CheckoutPayment.propTypes = {
  nextStep: func.isRequired,
};

export default CheckoutPayment;
