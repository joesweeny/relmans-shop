import React, { useState } from 'react';
import styled from 'styled-components';

import CheckoutDate from './CheckoutDate/CheckoutDate';
import CheckoutMethod from './CheckoutMethod/CheckoutMethod';
import DeliveryInfo from './DeliveryInfo';

const CheckoutDeliveryWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 10px;

  @media (min-width: 1024px) {
    width: 35%;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
    margin-bottom: auto;
  }
`;

const Title = styled.p`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeeee;
  text-transform: uppercase;
  padding: 10px;
  color: #3d604c;
  font-weight: 600;
  font-size: 14px;
`;

const Continue = styled.p`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1943c;
  text-transform: uppercase;
  padding: 10px;
  color: #291212;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

const CheckoutDelivery = () => {
  const [method, setMethod] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <CheckoutDeliveryWrapper>
      <Title>Select a delivery option</Title>
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
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : null}
      {selectedDate ? <Continue>Continue</Continue> : null}
    </CheckoutDeliveryWrapper>
  );
};

export default CheckoutDelivery;
