import React from 'react';
import styled from 'styled-components';

const FAQWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FAQ = () => {
  return (
    <FAQWrapper>
      <div>This is the FAQ page</div>
    </FAQWrapper>
  );
};

export default FAQ;
