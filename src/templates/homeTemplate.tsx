import React, { useContext } from 'react';
import { Detail, List } from 'organisms';
import { templateInterface } from 'interfaces';
import styled from 'styled-components';
import { MobXProviderContext, observer } from 'mobx-react';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  transition: 0.5s all ease-in-out;
`;
function HomeTemplate(props: templateInterface.HomeTemplateInterface): JSX.Element {
  const { items, selectedItem, onClickItem, onClickDelete, onClickSave, onChangeInput } = props;
  const rootStore = useContext(MobXProviderContext);
  const currentMode = rootStore.themeStore.getCurrentMode;
  const showDetail = rootStore.themeStore.getShowDetail;
  const editMode = rootStore.themeStore.getEditMode;

  const onClickAdd = () => {
    if (currentMode === 'New') {
      rootStore.themeStore.setCurrentMode('None');
      rootStore.themeStore.toggleShowDetail();
    } else if (currentMode === 'None') {
      rootStore.themeStore.setCurrentMode('New');
      rootStore.themeStore.toggleShowDetail();
      rootStore.themeStore.setOpenEditMode();
    } else if (currentMode === 'Old') {
      rootStore.themeStore.setCurrentMode('New');
      rootStore.todoStore.setInitSelectedItem();
      rootStore.themeStore.setOpenEditMode();
    }
  };

  const onClickEdit = () => {
    rootStore.themeStore.toggleEditMode();
  };

  const onClickClose = () => {
    rootStore.themeStore.setCloseEditMode();
    rootStore.themeStore.setCurrentMode('None');
    rootStore.themeStore.toggleShowDetail();
    rootStore.todoStore.setInitSelectedItem();
  };

  return (
    <Wrapper className="Home-Template">
      <List
        showDetail={showDetail}
        currentMode={currentMode}
        items={items}
        onClickItem={onClickItem}
        onClickAdd={onClickAdd}
      />
      <Detail
        showDetail={showDetail}
        item={selectedItem}
        currentMode={currentMode}
        editMode={editMode}
        onClickClose={onClickClose}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
        onClickSave={onClickSave}
        onChangeInput={onChangeInput}
      />
    </Wrapper>
  );
}

export default observer(HomeTemplate);
