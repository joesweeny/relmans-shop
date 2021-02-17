import React, { useContext } from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

import CategoryMenuItem from './CategoryMenuItem/CategoryMenuItem';
import { CategoryContext } from '../../context/CategoryContext';

const CategoryMenuWrapper = styled.div`
  display: ${(props) => (props.open ? '-ms-flexbox' : 'none')};
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  position: fixed;
  width: 100vw;
  background-color: #3d604c;
  transition: transform 300ms;
  left: 0;

  @media (min-width: 756px) {
    width: 30vw;
  }

  @media (min-width: 1024px) {
    position: relative;
    width: 230px;
  }
`;

const CategoryMenu = (props) => {
  const { open } = props;
  const { categories, loading, error } = useContext(CategoryContext);

  return (
    <CategoryMenuWrapper open={open}>
      {categories.map((c) => {
        return <CategoryMenuItem id={c.id} name={c.name} key={c.id} />;
      })}
    </CategoryMenuWrapper>
  );
};

CategoryMenu.propTypes = {
  open: bool.isRequired,
};

export default CategoryMenu;
