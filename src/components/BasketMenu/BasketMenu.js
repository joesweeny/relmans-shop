import React, { useContext, useEffect, useState } from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import BasketItem from '../BasketItem/BasketItem';
import { BasketContext } from '../../context/BasketContext';

const BasketMenuWrapper = styled.div`
  display: ${(props) => (props.open ? '-ms-flexbox' : 'none')};
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  position: fixed;
  width: 100vw;
  background-color: #3d604c;
  transition: transform 300ms;
  right: 0;
  z-index: 1001;
  overflow-y: auto;

  @media (min-width: 756px) {
    width: 50vw;
  }

  @media (min-width: 1024px) {
    position: relative;
    width: 450px;
  }
`;

const BasketMenu = (props) => {
  const { open } = props;
  const { items } = useContext(BasketContext);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    setBasket(items);
  }, [items, setBasket]);

  const total = basket.reduce((prev, next) => prev + next.count, 0);

  return (
    <BasketMenuWrapper open={open}>
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
            key={i.priceId}
          />
        );
      })}
    </BasketMenuWrapper>
  );
};

BasketMenu.propTypes = {
  open: bool.isRequired,
};

export default BasketMenu;
