import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const DeliveryInfoWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  text-align: center;
  background-color: #eeeeee;

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

const DeliveryInfo = (props) => {
  const { method } = props;

  if (method === 'COLLECTION') {
    return (
      <DeliveryInfoWrapper>
        <span>
          Please select a date and time to collect your order between 11am and
          3pm from:
        </span>
        <Address>
          <p>Relmans</p>
          <p>41 Middle Street</p>
          <p>Consett</p>
          <p>DH8 5QP</p>
        </Address>
      </DeliveryInfoWrapper>
    );
  }

  return (
    <DeliveryInfoWrapper>
      <span>Please select a date for delivery.</span>
      <span>Deliveries are made between 11am and 2pm</span>
    </DeliveryInfoWrapper>
  );
};

DeliveryInfo.propTypes = {
  method: string.isRequired,
};

export default DeliveryInfo;
