import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

import displayMeasurement from '../../utility/measurement';
import image from '../../assets/fruitandveg.jpg';

const ProductWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  margin: 10px 5px 5px 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  font-size: 12px;
  width: 150px;

  img {
    width: 150px;
    height: 125px;
  }
`;

const Title = styled.p`
  text-align: center;
  background-color: #ffffff;
  padding: 5px;
  color: #3d604c;
  font-weight: 600;
  border-bottom: 1px solid #cecbcbee;
  border-radius: 10px 10px 0 0;
`;

const PriceMeasurement = styled.div`
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: center;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #cecbcbee;
  background-color: #ffffff;
`;

const Price = styled.span`
  padding: 5px;
  color: #3d604c;
  font-weight: 600;
  font-size: 20px;
`;

const Measurement = styled.span`
  color: black;
  font-weight: 600;
  font-size: 10px;
`;

const Status = styled.div`
  text-align: center;
  background-color: #ffffff;
  color: ${(props) => (props.status === 'IN_STOCK' ? 'green' : 'red')};
  font-weight: 600;
`;

const Product = (props) => {
  const { id, measurement, name, size, status, price } = props;

  return (
    <ProductWrapper>
      <Title>{name}</Title>
      <img src={image} alt={name} />
      <PriceMeasurement>
        <Price>£ {(price / 100).toFixed(2)}</Price>
        <Measurement>/ {displayMeasurement(measurement, size)}</Measurement>
      </PriceMeasurement>
      <Status status={status}>{status.replace(/[_-]/g, ' ')}</Status>
    </ProductWrapper>
  );
};

Product.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  status: string.isRequired,
  price: number.isRequired,
  size: number.isRequired,
  measurement: string.isRequired,
};

export default Product;
