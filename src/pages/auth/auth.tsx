import React from 'react';
import { authInterface } from 'interfaces';
import { AuthTemplate } from 'templates';

function Auth(props: authInterface.AuthInterface): JSX.Element {
  const { onClick, onChangeInput, onEnter } = props;
  return (
    <AuthTemplate
      onClick={onClick}
      title="로그인"
      navigator="회원가입"
      location="/signup"
      submit="로그인"
      onChangeInput={onChangeInput}
      onEnter={onEnter}
    />
  );
}

export default Auth;
