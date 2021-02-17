import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

import image from '../../assets/fruitveg.png';

const ProductWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  margin: 15px 10px 10px 10px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);

  img {
    width: 300px;
    height: 300px;
  }
`;

const Product = (props) => {
  const { id, measurement, name, size, status, price } = props;

  return (
    <ProductWrapper>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{status}</p>
      <p>
        {size} {measurement}
      </p>
      <p>£ {price}</p>
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
