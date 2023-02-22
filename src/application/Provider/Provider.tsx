import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/application/theme/theme.default';
import store from '@/store/InitStore';

type Props = {
  children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StoreProvider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </StoreProvider>
  </ThemeProvider>
);

export { Provider };
