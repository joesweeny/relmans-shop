import React from 'react';
import styled from 'styled-components';
import { arrayOf, number, shape, string } from 'prop-types';

import Product from '../Product/Product';

const ProductListWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ProductList = (props) => {
  const { products } = props;

  console.log(products);

  return (
    <ProductListWrapper>
      {products.map((p) => {
        return p.prices.map((pr) => {
          return (
            <Product
              id={p.id}
              name={p.name}
              status={p.status}
              price={pr.value}
              size={pr.size}
              measurement={pr.measurement}
            />
          );
        });
      })}
    </ProductListWrapper>
  );
};

ProductList.propTypes = {
  products: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      status: string.isRequired,
      price: number.isRequired,
    })
  ).isRequired,
};

export default ProductList;
