import React, { useContext } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import CheckoutButton from '../CheckoutButton/CheckoutButton';
import CheckoutTitle from '../CheckoutTitle/CheckoutTitle';
import ContactForm from './ContactForm/ContactForm';
import DeliveryAddress from './DeliveryForm/DeliveryAddress';
import { CheckoutContext } from '../../../context/CheckoutContext';

const CheckoutCustomerFormWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background-color: #eeeeee;

  @media (min-width: 1024px) {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
    margin-bottom: auto;
  }
`;

const CheckoutCustomerForm = (props) => {
  const { nextStep } = props;
  const { method } = useContext(CheckoutContext);

  return (
    <CheckoutCustomerFormWrapper>
      <CheckoutTitle>Enter contact details</CheckoutTitle>
      <CheckoutButton
        click={() => nextStep((prev) => prev - 1)}
        color="#eeeeee"
        size="12px"
      >
        Back to delivery
      </CheckoutButton>
      <ContactForm />
      {method.type === 'DELIVERY' ? <DeliveryAddress /> : null}
      <CheckoutButton
        click={() => nextStep((prev) => prev + 1)}
        color="#f1943c"
        size="18px"
      >
        Proceed to payment
      </CheckoutButton>
    </CheckoutCustomerFormWrapper>
  );
};

CheckoutCustomerForm.propTypes = {
  nextStep: func.isRequired,
};

export default CheckoutCustomerForm;
