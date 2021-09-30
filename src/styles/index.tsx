import { createGlobalStyle, ThemeProvider } from 'styled-components';
type Theme = {
  primary: string;
  primaryText: string;
  scondary: string;
  secondaryText: string;
  textColor: string;
  background: string;
};

const theme = {
  primary: '#333333',
  primaryText: '#ffffff',
  scondary: '#999999',
  secondaryText: '#ffffff',
  textColor: '#333333',
  background: '#fefefe'
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
		font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 14px;
    box-sizing: border-box;
  }
  button {
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  p, span, input, button, li , a , label, strong, li {
    line-height: 1.4;
    font-size: inherit;
    color: inherit;
    text-decoration: unset;
    .no-lingHight {
      line-height: 1;
    }
  }

  a {
    &:not(.normal) {
      font-style: italic;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 0;
    padding: 0;
  }

  div {
    line-height: 1;
    font-size: inherit;
    box-sizing: border-box;
  }

  h1, h2, h3, h4 {
    margin: 0 0 0 0;
    padding: 0;
    line-height: 1.2;
    .no-lingHight {
      line-height: 1;
    }
  }

  h1 {
    font-size: 25px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }

  #modal-root {
    position:relative;
    z-index: 9999;
  }
`;

export { ThemeProvider, Theme, theme, GlobalStyle };
