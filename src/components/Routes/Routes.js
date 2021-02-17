import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../Home/Home';

const RoutesWrapper = styled.div`
  flex: 1;
`;

const Routes = () => (
  <RoutesWrapper>
    <Switch>
      <Route path="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </RoutesWrapper>
);

export default Routes;
