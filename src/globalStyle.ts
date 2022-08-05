import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    --primary: #3f51b5;
    --primary-reverse: #9fa8da;
    --warning: #d32f2f;
    --warning-reverse: #e57373;
    --gray: #9e9e9e;
    --gray-reverse: #bdbdbd;
    --invisible: #ffffff00;
    --disabled: #fafafa;
  }
`;
