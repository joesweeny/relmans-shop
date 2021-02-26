import React from 'react';
import styled from 'styled-components';

import CategoryDisplay from './CategoryDisplay/CategoryDisplay';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import InformationButtons from './InformationDisplay/InformationButtons';

const HomeWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <ImageCarousel />
      <CategoryDisplay />
      <InformationButtons />
    </HomeWrapper>
  );
};

export default Home;
