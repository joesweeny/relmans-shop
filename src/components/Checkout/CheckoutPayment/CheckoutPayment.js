import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import Loader from 'react-loader-spinner';

import CheckoutButton from '../CheckoutButton/CheckoutButton';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle';
import PaymentTotal from './PaymentTotal/PaymentTotal';
import { CheckoutContext } from '../../../context/CheckoutContext';
import { setDeliveryField } from '../../../store/actions/checkout';

const CheckoutPaymentWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;

  p {import DeliveryTotal from './PaymentTotal/DeliveryTotal/DeliveryTotal';

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

const Loading = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: #3d604c;
  font-size: 14px;
  font-weight: 600;

  p {
    padding: 10px;
    font-size: 16px;
    text-align: center;
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
  const [delivery, setDelivery] = useState(0);
  const [loading, setLoading] = useState(false);
  const { items, method, createNewOrder, dispatch } = useContext(
    CheckoutContext
  );

  useEffect(() => {
    const sum = items.reduce((prev, next) => prev + next.total, 0);
    if (method.type === 'DELIVERY' && sum < 2500) {
      dispatch(setDeliveryField('fee', 250));
      setDelivery(250);
    }

    if (method.type === 'COLLECTION') {
      dispatch(setDeliveryField('fee', 0));
      setDelivery(0);
    }
    setTotal(sum);
  }, [items, dispatch, method.type]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'GBP',
            value: ((total + delivery) / 100).toString(),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    setLoading(true);

    return actions.order.capture().then((details) => {
      createNewOrder(details.id);
      setLoading(false);
      nextStep((prev) => prev + 1);
    });
  };

  return (
    <CheckoutPaymentWrapper>
      <CheckoutTitle>Payment</CheckoutTitle>
      {!loading ? (
        <CheckoutButton
          click={() => nextStep((prev) => prev - 1)}
          color="#eeeeee"
          size="12px"
        >
          Back to customer details
        </CheckoutButton>
      ) : null}
      {loading ? (
        <Loading>
          <Loader type="Watch" color="#3d604c" height={100} width={100} />
          <p>Processing your order...please do not refresh the page</p>
        </Loading>
      ) : (
        <PaymentTotal fee={delivery} total={total} type={method.type} />
      )}
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
