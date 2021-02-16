import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from './components/Toolbar/Menu/Menu';
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
    <Container>
      <Toolbar
        basketOpen={basketOpen}
        menuOpen={menuOpen}
        clickBasket={setBasketOpen}
        clickMenu={setMenuOpen}
      />
      <Menu open={menuOpen} />
      Relmans Shop
    </Container>
  );
};

export default App;
