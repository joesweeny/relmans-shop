import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';
import { faBars, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../Logo/Logo';

const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #3d604c;
  height: 60px;
  width: 100vw;
  font-size: 16px;

  svg {
    cursor: pointer;
    margin-left: 15px;
    margin-right: 15px;

    &:hover {
      transform: scale(1.3);
    }

    @media (min-width: 758px) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  img {
    display: none;
  }

  @media (min-width: 758px) {
    height: 80px;
    font-size: 20px;

    img {
      display: flex;
    }
  }
`;

const Toolbar = (props) => {
  const { basketOpen, clickBasket, clickMenu, menuOpen } = props;

  return (
    <ToolbarWrapper>
      <FontAwesomeIcon
        color={menuOpen ? '#f1943c' : '#ffffff'}
        icon={faBars}
        size="2x"
        onClick={() => clickMenu(!menuOpen)}
      />
      <Logo />
      <FontAwesomeIcon
        color={basketOpen ? '#f1943c' : '#ffffff'}
        icon={faShoppingBasket}
        size="2x"
        onClick={() => clickBasket(!basketOpen)}
      />
    </ToolbarWrapper>
  );
};

Toolbar.propTypes = {
  basketOpen: bool.isRequired,
  clickBasket: func.isRequired,
  menuOpen: bool.isRequired,
  clickMenu: func.isRequired,
};

export default Toolbar;
