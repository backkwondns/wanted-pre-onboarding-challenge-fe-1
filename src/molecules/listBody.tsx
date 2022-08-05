import React from 'react';
import { moleculesInterface } from 'interfaces';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { ListItem } from 'atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;
const NoItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  border: 1px var(--gray) solid;
  border-top: 0px;
`;
function ListBody(props: moleculesInterface.ListBodyInterface): JSX.Element {
  const { items, onClickItem } = props;
  return (
    <Wrapper className="List-Body">
      {items.map((value) => {
        return <ListItem item={value} key={uuid()} onClickItem={onClickItem} />;
      })}
      {items.length === 0 ? <NoItem>데이터 없음</NoItem> : null}
    </Wrapper>
  );
}

export default ListBody;
