import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import brand from '../../assets/relmanslogo.png';

const LogoWrapper = styled.img`
  max-width: 150px;
  padding: 10px;

  @media (min-width: 758px) {
    max-width: 200px;
  }
`;

const logo = () => {
  return (
    <NavLink to="/">
      <LogoWrapper src={brand} />
    </NavLink>
  );
};

export default logo;
