import React from 'react';
import styled from 'styled-components';

const AboutUsWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <div>This is the about us page</div>
    </AboutUsWrapper>
  );
};

export default AboutUs;
