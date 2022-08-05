import React from 'react';
import styled from 'styled-components';
import { moleculesInterface } from 'interfaces';

const Wrapper = styled.div`
  width: 100%;
  min-height: 31.5px;
  border: 1px var(--gray) solid;
  border-top: 0px;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row-reverse;
  button:first-child {
    border-radius: 0px 0px 10px 0px;
  }
`;

function Footer(props: moleculesInterface.FooterInterface): JSX.Element {
  const { children } = props;
  return <Wrapper className="Footer">{children}</Wrapper>;
}

export default Footer;
