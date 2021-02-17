import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

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

  return (
    <BasketMenuWrapper open={open}>Your basket is empty</BasketMenuWrapper>
  );
};

BasketMenu.propTypes = {
  open: bool.isRequired,
};

export default BasketMenu;
