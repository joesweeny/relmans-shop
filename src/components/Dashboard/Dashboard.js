import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

import BasketMenu from '../BasketMenu/BasketMenu';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import Routes from '../Routes/Routes';
import ProductContextProvider from '../../context/ProductContext';

const DashboardWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  overflow-x: hidden;
`;

const Dashboard = (props) => {
  const { basketOpen, menuOpen } = props;

  return (
    <ProductContextProvider>
      <DashboardWrapper>
        <BrowserRouter>
          <CategoryMenu open={menuOpen} />
          <Routes />
          <BasketMenu open={basketOpen} />
        </BrowserRouter>
      </DashboardWrapper>
    </ProductContextProvider>
  );
};

Dashboard.propTypes = {
  basketOpen: bool.isRequired,
  menuOpen: bool.isRequired,
};

export default Dashboard;
