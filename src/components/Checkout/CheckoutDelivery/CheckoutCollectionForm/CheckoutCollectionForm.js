import React, { useContext } from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

import CheckoutButton from '../../CheckoutButton/CheckoutButton';
import CheckoutDate from '../CheckoutDate/CheckoutDate';
import CheckoutMethod from '../CheckoutMethod/CheckoutMethod';
import { CheckoutContext } from '../../../../context/CheckoutContext';
import { setDeliveryField } from '../../../../store/actions/checkout';

const CheckoutCollectionFormWrapper = styled.div`
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
  padding: 10px 0 0 0;

  span {
    font-size: 14px;
    color: #3d604c;
    font-weight: 600;
    margin: 5px 0 5px 0;
  }
`;

const Address = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 18px;
`;

const CheckoutCollectionForm = (props) => {
  const { isSelected, nextStep } = props;
  const { method, dispatch } = useContext(CheckoutContext);

  return (
    <CheckoutCollectionFormWrapper>
      {isSelected ? (
        <Info>
          <span>
            We are open Tuesday to Saturday.
            <br /> Please select a date and time to collect your order between
            11am and 3pm from:
          </span>
          <Address>
            <p>Relmans</p>
            <p>41 Middle Street</p>
            <p>Consett</p>
            <p>DH8 5QP</p>
          </Address>
          <CheckoutDate
            isCollection
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
    </CheckoutCollectionFormWrapper>
  );
};

CheckoutCollectionForm.propTypes = {
  isSelected: bool.isRequired,
  nextStep: func.isRequired,
};

export default CheckoutCollectionForm;
