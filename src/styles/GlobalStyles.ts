import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {

    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.backColor};
    font-family: ${({ theme }) => theme.colors.fontPrimary};
    color: props => props.theme.colors.text;
  }
`;
