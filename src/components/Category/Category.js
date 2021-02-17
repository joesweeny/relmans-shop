import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';

import Loader from '../Loader/Loader';

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Category = () => {
  const { id } = useParams();

  return (
    <CategoryWrapper>
      <Loader loading={false}>
        <p>Category {id}</p>
      </Loader>
    </CategoryWrapper>
  );
};

export default Category;
