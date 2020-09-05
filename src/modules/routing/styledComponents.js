import { createGlobalStyle } from 'styled-components';

const globalFontSize = 16;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    user-select: none;
    direction: ${props => props.direction};
  }
  
  button {
    font-family: inherit;
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    border: none;
    outline: none;
  }
  
  input {
    font-family: inherit;
    border: none;
    outline: none;
  }

  textarea{
    font-family: inherit;
    border: none;
    outline: none;
  }
`;