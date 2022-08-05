import React from 'react';

export interface AuthInterface {
  onClick: () => void;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
export type SignUpInterface = AuthInterface;
export interface userInfoInterface {
  email: string;
  password: string;
}

export interface authResponseInterface {
  message: string;
  token: string;
  details?: string;
}
export type signUpResponseInterface = authResponseInterface;
export type tokenType = string;
