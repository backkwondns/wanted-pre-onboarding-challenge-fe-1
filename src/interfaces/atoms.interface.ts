import React from 'react';
import { color } from './common';

export type itemType = { title: string; content: string; createdAt: string; updatedAt: string; id: string };
export interface ButtonInterface {
  width: 'full' | string;
  color?: color;
}

export interface IconButtonInterface {
  icon: JSX.Element;
  onClick: () => void;
}

export interface ListItemInterface {
  item: itemType;
  onClickItem: (event: React.MouseEvent<HTMLDivElement>) => void;
}
