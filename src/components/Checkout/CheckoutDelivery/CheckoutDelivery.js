import React, { useContext } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import CheckoutButton from '../CheckoutButton/CheckoutButton';
import CheckoutDate from './CheckoutDate/CheckoutDate';
import CheckoutMethod from './CheckoutMethod/CheckoutMethod';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle';
import DeliveryInfo from './DeliveryInfo';
import { CheckoutContext } from '../../../context/CheckoutContext';
import { setDeliveryField } from '../../../store/actions/checkout';

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
  const { method, dispatch } = useContext(CheckoutContext);

  return (
    <CheckoutDeliveryWrapper>
      <CheckoutTitle>Select a delivery option</CheckoutTitle>
      <CheckoutMethod
        select={() => dispatch(setDeliveryField('type', 'COLLECTION'))}
        selectedMethod={method.type}
        title="Collection"
      />
      <CheckoutMethod
        select={() => dispatch(setDeliveryField('type', 'DELIVERY'))}
        selectedMethod={method.type}
        title="Delivery"
      />
      {method.type ? <DeliveryInfo method={method.type} /> : null}
      {method.type ? (
        <CheckoutDate
          isCollection={method.type === 'COLLECTION'}
          selectedDate={method.date}
          setSelectedDate={(d) => dispatch(setDeliveryField('date', d))}
        />
      ) : null}
      {method.date ? (
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
