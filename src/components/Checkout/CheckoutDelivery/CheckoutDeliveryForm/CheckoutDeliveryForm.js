import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';

import CheckoutButton from '../../CheckoutButton/CheckoutButton';
import CheckoutDate from '../CheckoutDate/CheckoutDate';
import CheckoutMethod from '../CheckoutMethod/CheckoutMethod';
import PostcodeValidation from './PostcodeValidation/PostcodeValidation';
import { CheckoutContext } from '../../../../context/CheckoutContext';
import { setDeliveryField } from '../../../../store/actions/checkout';

const CheckoutDeliveryFormWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  text-align: center;
  background-color: #eeeeee;
`;

const Info = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  background-color: #eeeeee;
  padding: 10px 0 10px 0;

  span {
    font-size: 14px;
    color: #3d604c;
    font-weight: 600;
    margin: 5px 0 5px 0;
  }
`;

const CheckoutDeliveryForm = (props) => {
  const { nextStep } = props;
  const { method, address, dispatch } = useContext(CheckoutContext);
  const [isValid, setIsValid] = useState(address.postCode !== null);

  const isSelected = method.type === 'DELIVERY';

  return (
    <CheckoutDeliveryFormWrapper>
      <CheckoutMethod
        select={() => dispatch(setDeliveryField('type', 'DELIVERY'))}
        isSelected={isSelected}
        title="Delivery"
      />
      {!isValid && isSelected ? (
        <PostcodeValidation isValid={setIsValid} />
      ) : null}
      {isValid && isSelected ? (
        <Info>
          <span>Please select a date for delivery.</span>
          <span>Deliveries are made between 11am and 2pm</span>
          <CheckoutDate
            isCollection={false}
            selectedDate={method.date}
            setSelectedDate={(d) => dispatch(setDeliveryField('date', d))}
          />
          {method.date ? (
            <CheckoutButton
              click={() => nextStep(2)}
              color="#f1943c"
              size="18px"
            >
              Proceed to contact details
            </CheckoutButton>
          ) : null}
        </Info>
      ) : null}
    </CheckoutDeliveryFormWrapper>
  );
};

CheckoutDeliveryForm.propTypes = {
  nextStep: func.isRequired,
};

export default CheckoutDeliveryForm;
