import React from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import CheckoutCollectionForm from './CheckoutCollectionForm/CheckoutCollectionForm';
import CheckoutDeliveryForm from './CheckoutDeliveryForm/CheckoutDeliveryForm';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle';

const CheckoutDeliveryWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
    margin-bottom: auto;
  }
`;

const CheckoutDelivery = (props) => {
  const { nextStep } = props;

  return (
    <CheckoutDeliveryWrapper>
      <CheckoutTitle>Select a delivery option</CheckoutTitle>
      <CheckoutCollectionForm nextStep={nextStep} />
      <CheckoutDeliveryForm nextStep={nextStep} />
    </CheckoutDeliveryWrapper>
  );
};

CheckoutDelivery.propTypes = {
  nextStep: func.isRequired,
};

export default CheckoutDelivery;
