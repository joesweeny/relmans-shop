import React from 'react';
import styled from 'styled-components';

import brand from '../../assets/logo.png';

const LogoWrapper = styled.img`
  max-width: 150px;
  padding: 10px;

  @media (min-width: 758px) {
    max-width: 200px;
  }
`;

const logo = () => {
  return <LogoWrapper src={brand} />;
};

export default logo;
