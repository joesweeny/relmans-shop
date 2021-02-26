import React from 'react';
import styled from 'styled-components';

import CategoryDisplay from './CategoryDisplay/CategoryDisplay';
import ImageCarousel from './ImageCarousel/ImageCarousel';

const HomeWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <ImageCarousel />
      <CategoryDisplay />
    </HomeWrapper>
  );
};

export default Home;
