import React from 'react';
import styled from 'styled-components';

import Toolbar from './components/Toolbar/Toolbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
`;

const App = () => {
  return (
    <Container>
      <Toolbar />
      Relmans Shop
    </Container>
  );
};

export default App;
