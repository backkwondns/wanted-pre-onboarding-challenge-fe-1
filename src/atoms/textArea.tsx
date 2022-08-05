import styled from 'styled-components';

const TextArea = styled.textarea`
  resize: none;
  font-size: large;
  border: 1px var(--gray) solid;
  margin: 0px;
  :disabled {
    background-color: white;
  }
`;

export default TextArea;
