import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import BasketItem from '../../BasketItem/BasketItem';
import { BasketContext } from '../../../context/BasketContext';

const OrderSummaryWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 35%;
    margin: 10px 10px 10px 15px;
    margin-bottom: auto;
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
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
  border-bottom: 1px solid #cecbcbee;
`;

const OrderSummary = () => {
  const { items } = useContext(BasketContext);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(items);
  }, [items, setBasket]);

  return (
    <OrderSummaryWrapper>
      <Title>Order Summary</Title>
      {basket.map((i) => {
        return (
          <BasketItem
            productId={i.productId}
            priceId={i.priceId}
            count={i.count}
            name={i.name}
            price={i.price}
            size={i.size}
            measurement={i.measurement}
            total={i.total}
            key={i.priceId}
          />
        );
      })}
    </OrderSummaryWrapper>
  );
};

export default OrderSummary;
