import React, { useContext } from 'react';
import styled from 'styled-components';

import { CheckoutContext } from '../../../../context/CheckoutContext';
import CheckoutInput from '../CheckoutInput/CheckoutInput';

const DeliveryAddressWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background-color: #eeeeee;
  padding: 0 10px 10px 10px;
`;

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px;

  @media (min-width: 1024px) {
    padding: 10px 30px 10px 30px;
  }
`;

const DeliveryAddress = () => {
  const { address } = useContext(CheckoutContext);

  return (
    <DeliveryAddressWrapper>
      <Row>
        <CheckoutInput
          update={() => {}}
          label="Address Line 1*"
          width="97%"
          value={address.line1 ?? ''}
        />
      </Row>
      <Row>
        <CheckoutInput
          update={() => {}}
          label="Address Line 2"
          width="97%"
          value={address.line2 ?? ''}
        />
      </Row>
      <Row>
        <CheckoutInput
          update={() => {}}
          label="Address Line 3"
          width="97%"
          value={address.line3 ?? ''}
        />
      </Row>
      <Row>
        <CheckoutInput
          update={() => {}}
          label="Town"
          width="97%"
          value={address.town ?? ''}
        />
      </Row>
      <Row>
        <CheckoutInput
          update={() => {}}
          label="County"
          width="95%"
          value={address.county ?? ''}
        />
        <CheckoutInput
          update={() => {}}
          label="Post Code*"
          width="95%"
          value={address.postCode ?? ''}
        />
      </Row>
    </DeliveryAddressWrapper>
  );
};

export default DeliveryAddress;
