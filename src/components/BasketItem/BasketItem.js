import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

import BasketToggle from './BasketToggle/BasketToggle';
import displayMeasurement from '../../utility/measurement';
import image from '../../assets/fruitandveg.jpg';

const BasketItemWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;

  img {
    width: 70px;
    height: 70px;
  }
`;

const NameMeasurement = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 20px;
  width: 100%;

  padding: 0 5px 0 5px;
`;

const Name = styled.p`
  font-size: 12px;
  text-align: left;
  font-weight: 600;
  color: #3d604c;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const PriceMeasurement = styled.div`
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Price = styled.span`
  font-size: 12px;

  @media (min-width: 1024px) {
    font-size: 14px;
    padding: 5px 0 5px 0;
  }
`;

const Measurement = styled.p`
  font-size: 10px;
  text-align: left;

  @media (min-width: 1024px) {
    font-size: 12px;
  }
`;

const Total = styled.p`
  font-size: 16px;
  text-align: right;
  width: 50%;
  padding-right: 20px;
  color: #3d604c;
  font-weight: 600;
`;

const BasketItem = (props) => {
  const { count, name, price, priceId, productId, size, measurement } = props;

  return (
    <BasketItemWrapper>
      <img src={image} alt={name} />
      <NameMeasurement>
        <Name>{name}</Name>
        <PriceMeasurement>
          <Price>£ {(price / count / 100).toFixed(2)} / </Price>
          <Measurement>{displayMeasurement(measurement, size)}</Measurement>
        </PriceMeasurement>
      </NameMeasurement>
      <Total>£ {(price / 100).toFixed(2)}</Total>
      <BasketToggle
        productId={productId}
        priceId={priceId}
        name={name}
        price={price}
        size={size}
        measurement={measurement}
      />
    </BasketItemWrapper>
  );
};

BasketItem.propTypes = {
  productId: string.isRequired,
  priceId: string.isRequired,
  count: number.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  size: number.isRequired,
  measurement: string.isRequired,
};

export default BasketItem;
