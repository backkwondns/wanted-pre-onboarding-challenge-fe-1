import React from 'react';
import { InputArea, ButtonArea } from 'molecules';
import { templateInterface } from 'interfaces';
import styled from 'styled-components';
import { String } from 'atoms';
import { authLib } from 'libs';
import { Navigate } from 'react-router-dom';

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
function AuthTemplate(props: templateInterface.AuthTemplateInterface) {
  const { onChangeInput, onEnter, onClick, title, navigator, location, submit } = props;
  return (
    <FlexBox>
      {authLib.getToken() !== null ? <Navigate to="/" /> : null}
      <String>{title}</String>
      <div>
        <InputArea onChangeInput={onChangeInput} onEnter={onEnter} />
        <ButtonArea onClick={onClick} navigator={navigator} location={location} submit={submit} />
      </div>
    </FlexBox>
  );
}

export default AuthTemplate;
