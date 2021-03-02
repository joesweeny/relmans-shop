import React, { useLayoutEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import AboutUs from '../AboutUs/AboutUs';
import Category from '../Category/Category';
import Checkout from '../Checkout/Checkout';
import FAQ from '../FAQ/FAQ';
import Home from '../Home/Home';

const RoutesWrapper = styled.div`
  flex: 1;
`;

const Routes = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <RoutesWrapper>
      <Switch>
        <Route path="/category/:id" component={Category} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/about" component={AboutUs} />
        <Route path="/faq" component={FAQ} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </RoutesWrapper>
  );
};

export default Routes;
