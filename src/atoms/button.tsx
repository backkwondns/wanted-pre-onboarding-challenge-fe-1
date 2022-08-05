import styled, { css } from 'styled-components';
import { atomsInterface } from 'interfaces';

const Button = styled.button`
  ${(props: atomsInterface.ButtonInterface) => {
    const { width, color = 'primary' } = props;
    let reverse = false;
    if (color.includes('reverse')) reverse = true;
    return css`
      width: ${width === 'full' ? '100%' : width};
      background-color: var(--${color});
      color: ${reverse ? 'black' : 'white'};
      :hover {
        background-color: var(--${reverse ? color.replace('-reverse', '') : `${color}-reverse`});
        color: ${reverse ? 'white' : 'black'};
      }
      :active {
        background-color: white;
        color: black;
      }
    `;
  }}
  min-height: 28px;
  border-radius: 5px;
  border: none;
`;
export default Button;
