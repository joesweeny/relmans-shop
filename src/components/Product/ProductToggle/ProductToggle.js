import React, { useState } from 'react';
import styled from 'styled-components';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductToggleWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
  background-color: ${(props) => (props.count > 0 ? '#f1943c' : '#3d604c')};
  align-items: center;
  border-radius: 0 0 10px 10px;
  font-weight: 600;
  height: 100%;

  p {
    font-size: 22px;
  }

  svg {
    cursor: pointer;
    color: white;

    &:hover {
      color: #eeeeee;
    }
  }

  @media (min-width: 1024px) {
    padding: 10px 20px 10px 20px;

    p {
      font-size: 30px;
    }
  }
`;

const ProductToggle = () => {
  const [count, setCount] = useState(0);

  const remove = () => {
    if (count <= 1) {
      setCount(0);
      return;
    }

    setCount((prev) => prev - 1);
  };

  return (
    <ProductToggleWrapper count={count}>
      <FontAwesomeIcon
        icon={faMinusCircle}
        size="2x"
        onClick={() => remove()}
      />
      <p>{count === 0 ? null : count}</p>
      <FontAwesomeIcon
        icon={faPlusCircle}
        size="2x"
        onClick={() => setCount((prev) => prev + 1)}
      />
    </ProductToggleWrapper>
  );
};

export default ProductToggle;
