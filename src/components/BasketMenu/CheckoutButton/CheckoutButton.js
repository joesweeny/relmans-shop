import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { func } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { BasketContext } from '../../../context/BasketContext';

const CheckoutButtonWrapper = styled(NavLink)`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 18px;
  background-color: white;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  text-transform: uppercase;
  color: #3d604c;
  font-weight: 600;
  border-bottom: 1px solid #cecbcbee;
  text-decoration: none;

  &:hover {
    color: #f1943c;
  }
`;

const CheckoutButton = (props) => {
  const { click } = props;
  const [total, setTotal] = useState(0);
  const { items } = useContext(BasketContext);

  useEffect(() => {
    const sum = items.reduce((prev, next) => prev + next.total, 0);
    setTotal(sum);
  }, [items]);

  return (
    <CheckoutButtonWrapper to="/checkout" onClick={() => click(false)}>
      Checkout £{(total / 100).toFixed(2)}
    </CheckoutButtonWrapper>
  );
};

CheckoutButton.propTypes = {
  click: func.isRequired,
};

export default CheckoutButton;
