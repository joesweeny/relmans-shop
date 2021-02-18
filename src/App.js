import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import BasketContextProvider from './context/BasketContext';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);

  return (
    <CategoryContextProvider>
      <BasketContextProvider>
        <Container>
          <BrowserRouter>
            <Toolbar
              basketOpen={basketOpen}
              menuOpen={menuOpen}
              clickBasket={setBasketOpen}
              clickMenu={setMenuOpen}
            />
            <Dashboard
              basketOpen={basketOpen}
              menuOpen={menuOpen}
              clickMenu={() => setMenuOpen(false)}
            />
          </BrowserRouter>
        </Container>
      </BasketContextProvider>
    </CategoryContextProvider>
  );
};

export default App;
