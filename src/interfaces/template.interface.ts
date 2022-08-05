import React from 'react';
import { atomsInterface, moleculesInterface } from '.';

export interface AuthTemplateInterface
  extends moleculesInterface.ButtonAreaInterface,
    moleculesInterface.InputAreaInterface {
  title: string;
}
export interface HomeTemplateInterface {
  items: atomsInterface.itemType[];
  selectedItem: atomsInterface.itemType;
  onClickItem: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClickDelete: () => void;
  onClickSave: () => void;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
