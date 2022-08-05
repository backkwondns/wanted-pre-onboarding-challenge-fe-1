import React from 'react';
import { DetailBody, Footer, Header } from 'molecules';
import styled, { css } from 'styled-components';
import { IconButton } from 'atoms';
import { Delete, Edit, Save, New, Close } from 'icons';
import { organismsInterface } from 'interfaces';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ $showDetail }: { $showDetail: boolean }) => {
    return css`
      transition: 0.5s all ease-in-out;
      visibility: ${$showDetail ? 'visible' : 'hidden'};
      opacity: ${$showDetail ? 1 : 0};
      transform: translateX(${$showDetail ? '100px' : '200px'});
    `;
  }}
`;

function Detail(props: organismsInterface.DetailInterface): JSX.Element {
  const {
    item,
    showDetail,
    currentMode,
    editMode,
    onClickClose,
    onClickEdit,
    onClickDelete,
    onClickSave,
    onChangeInput,
  } = props;

  return (
    <Wrapper className="detail" $showDetail={showDetail}>
      <Header>
        {currentMode === 'New' ? (
          <New />
        ) : (
          <>
            <IconButton icon={<Edit />} onClick={onClickEdit} />
            <IconButton icon={<Delete />} onClick={onClickDelete} />
            <div style={{ width: '100%' }} />
            <IconButton icon={<Close />} onClick={onClickClose} />
          </>
        )}
      </Header>
      <DetailBody item={item} currentMode={currentMode} editMode={editMode} onChangeInput={onChangeInput} />
      <Footer>{editMode ? <IconButton icon={<Save />} onClick={onClickSave} /> : undefined}</Footer>
    </Wrapper>
  );
}

export default Detail;
