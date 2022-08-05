import React from 'react';
import styled from 'styled-components';
import { moleculesInterface } from 'interfaces';
import { useNavigate } from 'react-router-dom';
import { Button } from 'atoms';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  button:first-child {
    margin-right: 5px;
  }
  button:last-child {
    margin-left: 5px;
  }
`;
function ButtonArea(props: moleculesInterface.ButtonAreaInterface): JSX.Element {
  const { onClick, navigator, location, submit } = props;
  const navigate = useNavigate();
  const onClickNavigator = () => {
    navigate(`${location}`);
  };
  return (
    <ButtonContainer>
      <Button width="full" color="gray" onClick={onClickNavigator}>
        {navigator}
      </Button>
      <Button width="full" onClick={onClick}>
        {submit}
      </Button>
    </ButtonContainer>
  );
}

export default ButtonArea;
