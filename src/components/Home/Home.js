import React from 'react';
import styled from 'styled-components';

import ImageCarousel from './ImageCarousel/ImageCarousel';

const HomeWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  @media (min-width: 758px) {
    padding: 20px;
  }
`;

const TopLayer = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <TopLayer>
        <ImageCarousel />
        <div />
      </TopLayer>
    </HomeWrapper>
  );
};

export default Home;
