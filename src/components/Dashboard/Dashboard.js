import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';

import CategoryMenu from '../CategoryMenu/CategoryMenu';

const DashboardWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
`;

const Dashboard = (props) => {
  const { basketOpen, menuOpen } = props;

  return (
    <DashboardWrapper>
      <CategoryMenu open={menuOpen} />
      <p>Tab 2</p>
      <p>Tab 3</p>
    </DashboardWrapper>
  );
};

Dashboard.propTypes = {
  basketOpen: bool.isRequired,
  menuOpen: bool.isRequired,
};

export default Dashboard;
