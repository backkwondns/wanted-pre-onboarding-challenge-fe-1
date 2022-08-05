import React from 'react';
import { atomsInterface } from 'interfaces';
import styled from 'styled-components';
import { stringLib } from 'libs';

const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px var(--gray) solid;
  border-top: 0px;
  justify-content: space-between;
  p:first-child {
    padding-left: 10px;
  }
  p:last-child {
    padding-right: 10px;
    font-size: 15px;
  }
  :active {
    background-color: var(--gray);
    color: white;
  }
`;
const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 70%;
`;
function ListItem(props: atomsInterface.ListItemInterface): JSX.Element {
  const { item, onClickItem } = props;
  return (
    <ItemContainer className="List-Item" id={item.id} onClick={onClickItem}>
      <Text>{item.title}</Text>
      <Text>{stringLib.timeSimplify(item.updatedAt)}</Text>
    </ItemContainer>
  );
}

export default ListItem;
