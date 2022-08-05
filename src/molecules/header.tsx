import React from 'react';
import styled from 'styled-components';
import { moleculesInterface } from 'interfaces';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px var(--gray) solid;
  border-radius: 10px 10px 0px 0px;
  flex-direction: row-reverse;
  button:first-child {
    border-radius: 0px 10px 0px 0px;
  }
  button:nth-child(4) {
    border-radius: 10px 0px 0px 0px;
  }
`;

function Header(props: moleculesInterface.HeaderInterface): JSX.Element {
  const { children } = props;
  return <Wrapper className="Header">{children}</Wrapper>;
}

export default Header;
