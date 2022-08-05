import { atomsInterface } from 'interfaces';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background-color: var(--invisible);
  svg {
    fill: var(--primary);
    display: inline-block;
    vertical-align: center;
  }
  :hover {
    background-color: var(--gray);
    svg {
      fill: white;
    }
  }
  :active {
    background-color: white;
    svg {
      fill: var(--gray);
    }
  }
`;
function IconButton(props: atomsInterface.IconButtonInterface): JSX.Element {
  const { icon, onClick } = props;
  return <Button onClick={onClick}>{icon}</Button>;
}

export default IconButton;
