import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Toggle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100px;
  padding-right: 15px;
`;

const Hamburger = styled.div`
  background-color: #909090;
  width: 30px;
  height: 3px;
  cursor: pointer;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #909090;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg)' : 'rotate(0deg)')};
    top: 10px;
  }
`;

const toggle = (props) => {
  const { open, clicked } = props;

  return (
    <Toggle onClick={clicked} role="button" tabIndex={0} onKeyDown={clicked}>
      {open ? <Hamburger open /> : <Hamburger />}
    </Toggle>
  );
};

toggle.propTypes = {
  open: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default toggle;
