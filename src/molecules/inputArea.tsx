import React from 'react';
import styled from 'styled-components';
import { moleculesInterface } from 'interfaces';
import { Input } from 'atoms';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

function InputArea(props: moleculesInterface.InputAreaInterface): JSX.Element {
  const { onChangeInput, onEnter } = props;
  return (
    <InputContainer>
      <Input placeholder="Email" name="email" onChange={onChangeInput} />
      <Input type="password" placeholder="Password" name="password" onChange={onChangeInput} onKeyPress={onEnter} />
    </InputContainer>
  );
}

export default InputArea;
