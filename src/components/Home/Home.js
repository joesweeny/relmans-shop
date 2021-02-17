import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div>Images</div>
      <div>Featured Items</div>
      <div>Categories</div>
    </HomeWrapper>
  );
};

export default Home;
