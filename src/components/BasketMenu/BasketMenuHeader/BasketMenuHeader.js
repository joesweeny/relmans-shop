import React from 'react';
import styled from 'styled-components';

const BasketMenuHeaderWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const BasketMenuHeader = () => {
  return (
    <BasketMenuHeaderWrapper>
      <div>Total money is</div>
      <div>Empty Basket</div>
    </BasketMenuHeaderWrapper>
  );
};

export default BasketMenuHeader;
