import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const CategoryMenuItemWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  border-bottom: 1px solid #cecbcbee;
  color: #3d604c;
  font-weight: 600;

  p {
    padding-left: 15px;
  }
`;

const CategoryImage = styled.img`
  width: 70px;
  height: 70px;
`;

const CategoryMenuItem = (props) => {
  const { id, name } = props;

  return (
    <CategoryMenuItemWrapper>
      <CategoryImage
        src={`https://relmans.s3.eu-west-2.amazonaws.com/categories/${id}.jpg`}
        alt={name}
      />
      <p>{name}</p>
    </CategoryMenuItemWrapper>
  );
};

CategoryMenuItem.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
};

export default CategoryMenuItem;
