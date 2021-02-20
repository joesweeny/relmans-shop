import React, { useContext } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import CheckoutButton from '../CheckoutButton/CheckoutButton';
import CheckoutDate from './CheckoutDate/CheckoutDate';
import CheckoutMethod from './CheckoutMethod/CheckoutMethod';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle';
import DeliveryInfo from './DeliveryInfo';
import {
  CheckoutContext,
  CheckoutActionContext,
} from '../../../context/CheckoutContext';

const CheckoutDeliveryWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 1024px) {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
    margin-bottom: auto;
  }
`;

const CheckoutDelivery = (props) => {
  const { nextStep } = props;
  const { date, method } = useContext(CheckoutContext);
  const { setDate, setMethod } = useContext(CheckoutActionContext);

  return (
    <CheckoutDeliveryWrapper>
      <CheckoutTitle>Select a delivery option</CheckoutTitle>
      <CheckoutMethod
        select={() => setMethod('Collection')}
        selectedMethod={method}
        title="Collection"
      />
      <CheckoutMethod
        select={() => setMethod('Delivery')}
        selectedMethod={method}
        title="Delivery"
      />
      {method ? <DeliveryInfo method={method} /> : null}
      {method ? (
        <CheckoutDate
          isCollection={method === 'Collection'}
          selectedDate={date}
          setSelectedDate={setDate}
        />
      ) : null}
      {date ? (
        <CheckoutButton click={() => nextStep(2)} color="#f1943c" size="18px">
          Proceed to contact details
        </CheckoutButton>
      ) : null}
    </CheckoutDeliveryWrapper>
  );
};

CheckoutDelivery.propTypes = {
  nextStep: func.isRequired,
};

export default CheckoutDelivery;
