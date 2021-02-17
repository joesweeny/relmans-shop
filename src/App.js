import React, { useState } from 'react';
import styled from 'styled-components';

import CategoryContextProvider from './context/CategoryContext';
import Dashboard from './components/Dashboard/Dashboard';
import Toolbar from './components/Toolbar/Toolbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
`;

const App = () => {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth > 1025);
  const [basketOpen, setBasketOpen] = useState(window.innerWidth > 1025);

  return (
    <CategoryContextProvider>
      <Container>
        <Toolbar
          basketOpen={basketOpen}
          menuOpen={menuOpen}
          clickBasket={setBasketOpen}
          clickMenu={setMenuOpen}
        />
        <Dashboard basketOpen={basketOpen} menuOpen={menuOpen} />
      </Container>
    </CategoryContextProvider>
  );
};

export default App;
