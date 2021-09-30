import React from 'react';
import ReactDom from 'react-dom/';
import { App } from 'root/app';
import { GlobalStyle, theme, ThemeProvider } from 'root/styles';
const bootstrap = () => {
  ReactDom.render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>,
    document.getElementById('app')
  );
};

bootstrap();
