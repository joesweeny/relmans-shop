import React from 'react';
import styled from 'styled-components';

import CheckoutInput from '../CheckoutInput/CheckoutInput';

const ContactFormWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background-color: #eeeeee;
  padding: 0 10px 10px 10px;
`;

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px;

  @media (min-width: 1024px) {
    padding: 10px 30px 10px 30px;
  }
`;

const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <Row>
        <CheckoutInput
          update={() => {}}
          label="First Name*"
          width="95%"
          value=""
        />
        <CheckoutInput
          update={() => {}}
          label="Last Name*"
          width="95%"
          value=""
        />
      </Row>
      <Row>
        <CheckoutInput
          update={() => {}}
          label="Phone Number*"
          width="97%"
          value=""
        />
      </Row>
    </ContactFormWrapper>
  );
};

export default ContactForm;
