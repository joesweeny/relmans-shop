import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  margin-top: 80px;
  height: 100%;
  width: 100vw;
  left: 0;
  background-color: #3d604c;
  transition: transform 300ms;

  @media (min-width: 758px) {
    width: 50vw;
  }

  @media (min-width: 956px) {
    width: 300px;
  }
`;

const Menu = (props) => {
  const { open } = props;

  return <MenuWrapper open={open}>Menu Items</MenuWrapper>;
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
