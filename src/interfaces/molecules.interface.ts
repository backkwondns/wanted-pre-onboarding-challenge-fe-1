import React from 'react';
import { atomsInterface } from '.';

export interface InputAreaInterface {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface ButtonAreaInterface {
  onClick: () => void;
  navigator: string;
  location: string;
  submit: string;
}

export interface HeaderInterface {
  children: JSX.Element[] | JSX.Element;
}
export interface FooterInterface {
  children?: JSX.Element[] | JSX.Element;
}

export interface ListBodyInterface {
  items: atomsInterface.itemType[];
  onClickItem: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export interface DetailBodyInterface {
  item: atomsInterface.itemType;
  currentMode: 'New' | 'Old' | 'None';
  editMode: boolean;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
