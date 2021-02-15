import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import Navigation from './Navigation/Navigation';

const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #3d604c;
  height: 80px;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const toolbar = () => {
  return (
    <ToolbarWrapper>
      <Logo />
      <Navigation />
    </ToolbarWrapper>
  );
};

export default toolbar;
