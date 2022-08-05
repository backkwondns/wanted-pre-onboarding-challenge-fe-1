import { homeInterface } from 'interfaces';
import React from 'react';
import { HomeTemplate } from 'templates';
import { Button } from 'atoms';
import styled from 'styled-components';

const LogoutButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  margin: 10px;
`;
function Home(props: homeInterface.HomeInterface): JSX.Element {
  const { items, selectedItem, onClickItem, onClickDelete, onClickSave, onChangeInput, onClickLogout } = props;
  return (
    <div>
      <LogoutButton width="80px" onClick={onClickLogout}>
        로그아웃
      </LogoutButton>
      <HomeTemplate
        items={items}
        selectedItem={selectedItem}
        onClickItem={onClickItem}
        onClickSave={onClickSave}
        onClickDelete={onClickDelete}
        onChangeInput={onChangeInput}
      />
    </div>
  );
}

export default Home;
