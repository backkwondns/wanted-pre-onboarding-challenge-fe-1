import React from 'react';
import { ListBody, Header, Footer } from 'molecules';
import styled, { css } from 'styled-components';
import { organismsInterface } from 'interfaces';
import { observer } from 'mobx-react';
import { IconButton } from 'atoms';
import { Add } from 'icons';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  min-width: 400px;
  ${({ $showDetail }: { $showDetail: boolean }) => {
    return css`
      transition: 0.5s all ease-in-out;
      transform: translateX(${$showDetail ? '-50px' : '256px'});
    `;
  }}
`;

const AddStyled = styled(Add)`
  ${({ $trigger }: { $trigger: boolean }) => {
    return css`
      transition: 0.5s all ease;
      transform: rotate(${$trigger ? '45deg' : '0deg'});
    `;
  }}
`;

const CountItems = styled.strong`
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 5px;
`;
function List(props: organismsInterface.ListInterface): JSX.Element {
  const { onClickAdd, onClickItem, items, showDetail, currentMode } = props;
  return (
    <Wrapper className="List" $showDetail={showDetail}>
      <Header>
        <IconButton icon={<AddStyled $trigger={currentMode === 'New'} />} onClick={onClickAdd} />
      </Header>
      <ListBody items={items} onClickItem={onClickItem} />
      <Footer>
        <CountItems>{items.length} 개</CountItems>
      </Footer>
    </Wrapper>
  );
}

export default observer(List);
