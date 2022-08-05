import React from 'react';
import { Input, TextArea } from 'atoms';
import styled from 'styled-components';
import { moleculesInterface } from 'interfaces';
import { stringLib } from 'libs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeArea = styled.div`
  border: 1px var(--gray) solid;
  border-top: none;
  border-bottom: none;
  color: #545454;
  display: flex;
  flex-direction: row-reverse;
  padding-right: 5px;
`;

const InputStyled = styled(Input)`
  width: 100%;
  border-radius: 0px;
  margin: 0px;
  border: 1px var(--gray) solid;
  border-top: 0px;
  border-bottom: 0px;
  overflow-x: auto;
  word-wrap: break-word;
  :disabled {
    background-color: white;
  }
`;
function DetailBody(props: moleculesInterface.DetailBodyInterface): JSX.Element {
  const { item, currentMode, editMode, onChangeInput } = props;
  return (
    <Wrapper className="Detail-Body">
      <InputStyled id="title" placeholder="Title" value={item.title} disabled={!editMode} onChange={onChangeInput} />
      {currentMode === 'Old' ? <TimeArea>{stringLib.timeSimplify(item.updatedAt)}</TimeArea> : null}
      <TextArea
        id="content"
        placeholder="Content"
        value={item.content}
        rows={30}
        cols={50}
        disabled={!editMode}
        onChange={onChangeInput}
      />
    </Wrapper>
  );
}

export default DetailBody;
