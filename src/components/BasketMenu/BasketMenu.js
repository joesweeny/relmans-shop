import React, { useContext } from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

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

  @media (min-width: 756px) {
    width: 50vw;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

const BasketMenu = (props) => {
  const { open } = props;
  const { items } = useContext(BasketContext);

  const total = items.reduce((prev, next) => prev + next.count, 0);

  return (
    <BasketMenuWrapper open={open}>
      {total > 0
        ? `You have ${total} items in your basket`
        : 'Your basket is empty'}
    </BasketMenuWrapper>
  );
};

BasketMenu.propTypes = {
  open: bool.isRequired,
};

export default BasketMenu;
