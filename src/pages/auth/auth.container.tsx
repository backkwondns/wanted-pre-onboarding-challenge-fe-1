import React, { useState } from 'react';
import { authLib, fetchLib, stringLib } from 'libs';
import { authInterface } from 'interfaces';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Auth from './auth';

function AuthContainer(): JSX.Element {
  const [input, setInput] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setInput({ ...input, [name]: value });
  };

  const onClick = async () => {
    if (!stringLib.validationInput(input.email, input.password)) toast.error('유효하지 않은 입력입니다.');
    else {
      try {
        const response = await fetchLib.fetchPost<authInterface.userInfoInterface, authInterface.authResponseInterface>(
          'users/login',
          { ...input },
        );
        if (response.token) {
          toast.success('로그인 완료');
          authLib.setToken(response.token);
          navigate('/');
        } else toast.error(response.details);
      } catch (error: any) {
        toast.error(error.details);
      }
    }
  };
  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') onClick();
  };
  return <Auth onClick={onClick} onChangeInput={onChangeInput} onEnter={onEnter} />;
}

export default AuthContainer;
